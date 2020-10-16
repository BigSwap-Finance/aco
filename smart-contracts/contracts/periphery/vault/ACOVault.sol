pragma solidity ^0.6.6;
pragma experimental ABIEncoderV2;

import '../../util/Ownable.sol';
import '../../libs/SafeMath.sol';
import '../../libs/Address.sol';
import '../../libs/ACOAssetHelper.sol';
import '../../interfaces/IACOVault.sol';
import '../../interfaces/IController.sol';
import '../../interfaces/IACOPoolFactory.sol';
import '../../interfaces/IACOFlashExercise.sol';
import '../../interfaces/IACOFactory.sol';
import '../../interfaces/IACOAssetConverterHelper.sol';
import '../../interfaces/IACOToken.sol';
import '../../interfaces/IACOPool.sol';


contract ACOVault is Ownable, IACOVault {
    using Address for address;
    using SafeMath for uint256;
    
    uint256 internal constant PERCENTAGE_PRECISION = 100000;
    uint256 internal constant MAX_UINT = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;

    event SetController(address indexed oldController, address indexed newController);
    event SetAssetConverter(address indexed oldAssetConverter, address indexed newAssetConverter);
    event SetAcoFlashExercise(address indexed oldAcoFlashExercise, address indexed newAcoFlashExercise);
    event SetMinPercentageToKeep(uint256 indexed oldMinPercentageToKeep, uint256 indexed newMinPercentageToKeep);
    event SetAcoToken(address indexed oldAcoToken, address indexed newAcoToken);
    event SetAcoPool(address indexed oldAcoPool, address indexed newAcoPool);
    event SetTolerancePriceAbove(uint256 indexed oldTolerancePriceAbove, uint256 indexed newTolerancePriceAbove);
    event SetTolerancePriceBelow(uint256 indexed oldTolerancePriceBelow, uint256 indexed newTolerancePriceBelow);
    event SetMinExpiration(uint256 indexed oldMinExpiration, uint256 indexed newMinExpiration);
    event SetMaxExpiration(uint256 indexed oldMaxExpiration, uint256 indexed newMaxExpiration);
    event SetMinTimeToExercise(uint256 indexed oldMinTimeToExercise, uint256 indexed newMinTimeToExercise);
    event SetExerciseSlippage(uint256 indexed oldExerciseSlippage, uint256 indexed newExerciseSlippage);
    event SetWithdrawFee(uint256 indexed oldWithdrawFee, uint256 indexed newWithdrawFee);
    event RewardAco(address indexed acoToken, uint256 acoTokenAmountIn);
    event ExerciseAco(address indexed acoToken, uint256 acoTokensOut, uint256 tokenIn);
    event Deposit(address indexed account, uint256 shares, uint256 amount);
    event Withdraw(address indexed account, uint256 shares, uint256 amount, uint256 fee);

    IACOPoolFactory public immutable override acoPoolFactory;
    IACOFactory public immutable override acoFactory;
    address public immutable override token;
    
    uint256 public override minPercentageToKeep;
    
    IController public override controller;
    IACOAssetConverterHelper public override assetConverter;
    IACOFlashExercise public override acoFlashExercise;
    
    IACOPool public override acoPool;
    IACOToken public override currentAcoToken;
    address[] public override acoTokens;
    uint256 public override tolerancePriceAbove;
    uint256 public override tolerancePriceBelow;
    uint256 public override minExpiration;
    uint256 public override maxExpiration;
    uint256 public override minTimeToExercise;
    uint256 public override exerciseSlippage;
    uint256 public override withdrawFee;
    uint256 public override totalSupply;
    
    mapping (address => uint256) internal balances;
    mapping(address => Position) internal positions;
    mapping(address => AccountData) internal accounts;
    
    constructor(VaultInitData memory initData) public {
        super.init();
        
        require(initData.acoPoolFactory.isContract(), "ACOVault:: Invalid ACO pool factory");
        require(initData.acoFactory.isContract(), "ACOVault:: Invalid ACO factory");
        require(initData.token.isContract(), "ACOVault:: Invalid token");
        
        acoPoolFactory = IACOPoolFactory(initData.acoPoolFactory);
        acoFactory = IACOFactory(initData.acoFactory);
        token = initData.token;
        _setAssetConverter(initData.assetConverter);
        _setAcoFlashExercise(initData.acoFlashExercise);
        _setMinPercentageToKeep(initData.minPercentageToKeep);
        _setMinTimeToExercise(initData.minTimeToExercise);
        _setExerciseSlippage(initData.exerciseSlippage);
        _setWithdrawFee(initData.withdrawFee);
        _setMaxExpiration(initData.maxExpiration);
        _setMinExpiration(initData.minExpiration);
        _setTolerancePriceAbove(initData.tolerancePriceAbove);
        _setTolerancePriceBelow(initData.tolerancePriceBelow);
        _setAcoToken(
            IACOAssetConverterHelper(initData.assetConverter), 
            IACOFactory(initData.acoFactory), 
            IACOPoolFactory(initData.acoPoolFactory), 
            initData.currentAcoToken, 
            initData.acoPool
        );
    }

    function name() public view override returns(string memory) {
        return string(abi.encodePacked("ACO Vault ", ACOAssetHelper._getAssetSymbol(address(token))));
    }

    function decimals() public view override returns(uint8) {
        return ACOAssetHelper._getAssetDecimals(address(token));
    }
    
    function balanceOf(address account) public view override returns(uint256) {
        return balances[account];
    }
    
    function getPosition(address acoToken) external view override returns(Position memory) {
        return positions[acoToken];
    }
    
    function getAccountPositionsCount(address account) external view override returns(uint256) {
        AccountData storage data = accounts[account];
        return data.acoTokensOnDeposit.length;
    }
    
    function getAccountPositionByIndex(address account, uint256 index) external view override returns(address, Position memory) {
        AccountData storage data = accounts[account];
        address acoToken = data.acoTokensOnDeposit[index];
        return (acoToken, data.positionsOnDeposit[acoToken]);
    }
    
    function getAccountPositionByAco(address account, address acoToken) external view override returns(Position memory) {
        return accounts[account].positionsOnDeposit[acoToken];   
    }
    
    function getAccountSituation(address account, uint256 shares) external view override returns(uint256, uint256, address[] memory, uint256[] memory) {
        require(balanceOf(account) >= shares, "ACOVault:: Shares not available");
        
        (uint256 totalAdjust, address[] memory acos, uint256[] memory acosAmount) = _getAccountAcoSituation(account, shares);
        
        uint256 accountBalance = shares.mul(balance().sub(totalAdjust)).div(totalSupply);
        uint256 bufferBalance = ACOAssetHelper._getAssetBalanceOf(token, address(this));
        if (bufferBalance < accountBalance) {
            accountBalance = bufferBalance.add(controller.actualAmount(address(this), accountBalance.sub(bufferBalance)));
        }
        
        uint256 fee = accountBalance.mul(withdrawFee).div(PERCENTAGE_PRECISION);
        accountBalance = accountBalance.sub(fee);
        return (accountBalance, fee, acos, acosAmount);
    }

    function balance() public override view returns(uint256) {
        return ACOAssetHelper._getAssetBalanceOf(token, address(this)).add(controller.balanceOf(address(this)));
    }

    function available() public override view returns(uint256) {
        return PERCENTAGE_PRECISION.sub(minPercentageToKeep).mul(ACOAssetHelper._getAssetBalanceOf(token, address(this))).div(PERCENTAGE_PRECISION);
    }

    function numberOfAcoTokensNegotiated() public override view returns(uint256) {
        return acoTokens.length;
    }

    function getPricePerFullShare() public override view returns(uint256) {
        uint256 _decimals = uint256(decimals());
        return balance().mul(_decimals).div(totalSupply);
    }
  
    function setController(address newController) onlyOwner external override {
        _setController(newController);
    }
    
    function setAssetConverter(address newAssetConverter) onlyOwner external override {
        _setAssetConverter(newAssetConverter);
    }
    
    function setAcoFlashExercise(address newAcoFlashExercise) onlyOwner external override {
        _setAcoFlashExercise(newAcoFlashExercise);
    }
    
    function setMinPercentageToKeep(uint256 newMinPercentageToKeep) onlyOwner external override {
        _setMinPercentageToKeep(newMinPercentageToKeep);
    }
    
    function setTolerancePriceBelow(uint256 newTolerancePriceBelow) onlyOwner external override {
        _setTolerancePriceBelow(newTolerancePriceBelow);
    }

    function setTolerancePriceAbove(uint256 newTolerancePriceAbove) onlyOwner external override {
        _setTolerancePriceAbove(newTolerancePriceAbove);
    }

    function setMinExpiration(uint256 newMinExpiration) onlyOwner external override {
        _setMinExpiration(newMinExpiration);
    }

    function setMaxExpiration(uint256 newMaxExpiration) onlyOwner external override {
        _setMaxExpiration(newMaxExpiration);
    }
    
    function setMinTimeToExercise(uint256 newMinTimeToExercise) onlyOwner external override {
        _setMinTimeToExercise(newMinTimeToExercise);
    }
    
    function setExerciseSlippage(uint256 newExerciseSlippage) onlyOwner external override {
        _setExerciseSlippage(newExerciseSlippage);
    }
    
    function setWithdrawFee(uint256 newWithdrawFee) onlyOwner external override {
        _setWithdrawFee(newWithdrawFee);
    }
    
    function setAcoToken(address newAcoToken, address newAcoPool) onlyOwner external override {
        _setAcoToken(assetConverter, acoFactory, acoPoolFactory, newAcoToken, newAcoPool);
    }
    
    function setAcoPool(address newAcoPool) onlyOwner external override {
        (address underlying, 
         address strikeAsset, 
         bool isCall, 
         uint256 strikePrice, 
         uint256 expiryTime) = acoFactory.acoTokenData(address(currentAcoToken));
        _setAcoPool(acoPoolFactory, newAcoPool, underlying, strikeAsset, isCall, strikePrice, expiryTime);
    }
    
    function withdrawStuckToken(address _token, address destination) external override {
        require(msg.sender == address(controller), "ACOVault:: Invalid sender");
        require(address(token) != _token && !positions[_token].initialized, "ACOVault:: Invalid token");
        uint256 _balance = ACOAssetHelper._getAssetBalanceOf(_token, address(this));
        if (_balance > 0) {
            ACOAssetHelper._transferAsset(_token, destination, _balance);
        }
    }
    
    function earn() external override {
        controller.earn(available());
    }

    function deposit(uint256 amount) external override {
        require(address(controller) != address(0), "ACOVault:: No controller");
        require(amount > 0, "ACOVault:: Invalid amount");
        uint256 _totalBalance = balance();
        ACOAssetHelper._receiveAsset(address(token), amount);
        
        uint256 shares = 0;
        if (_totalBalance == 0) {
            shares = amount;
        } else {
            shares = amount.mul(totalSupply).div(_totalBalance);
        }
            
        address _currentAcoToken = address(currentAcoToken);
        Position storage acoData = positions[_currentAcoToken];
        AccountData storage accountData = accounts[msg.sender];
        _setAccountData(_currentAcoToken, acoData.amount, acoData.profit, acoData.exercised, balanceOf(msg.sender), shares, accountData);
        
        _mint(msg.sender, shares);
        
        emit Deposit(msg.sender, shares, amount);
    }

    function withdraw(uint256 shares) external override {
        uint256 accountShares = balanceOf(msg.sender);
        uint256 vaulTotalSupply = totalSupply;
        
        _burn(msg.sender, shares);
        
        AccountData storage data = accounts[msg.sender];
        uint256 totalAdjust = 0;
        for (uint256 i = data.acoTokensOnDeposit.length; i > 0; --i) {
            address acoToken = data.acoTokensOnDeposit[i - 1];
            (uint256 acoAmount, uint256 adjust) = _getPositionData(acoToken, shares, vaulTotalSupply, data);
            totalAdjust = totalAdjust.add(adjust);
            if (block.timestamp >= IACOToken(acoToken).expiryTime()) {
                if (accountShares > shares && adjust == 0) {
                    _removeFromAccountData(acoToken, data);
                }
            } else if (acoAmount > 0) {
                ACOAssetHelper._transferAsset(acoToken, msg.sender, acoAmount);
            }   
        }
        
        if (accountShares == shares) {
            delete accounts[msg.sender];
        }
        
        uint256 accountBalance = shares.mul(balance().sub(totalAdjust)).div(vaulTotalSupply);
        uint256 bufferBalance = ACOAssetHelper._getAssetBalanceOf(token, address(this));
        if (bufferBalance < accountBalance) {
            accountBalance = bufferBalance.add(controller.withdraw(accountBalance.sub(bufferBalance)));
        }
        
        uint256 fee = accountBalance.mul(withdrawFee).div(PERCENTAGE_PRECISION);
        accountBalance = accountBalance.sub(fee);
        
        controller.sendFee(fee);
        ACOAssetHelper._transferAsset(address(token), msg.sender, accountBalance);
        
        emit Withdraw(msg.sender, shares, accountBalance, fee);
    }
    
    function exerciseAco(address acoToken, uint256 acoAmount) external override {
        (uint256 acoBalance, uint256 minIntrinsicValue, address collateral) = _exerciseValidation(acoToken, acoAmount);
        
        uint256 previousTokenAmount = ACOAssetHelper._getAssetBalanceOf(token, address(this));
        if (ACOAssetHelper._getAssetAllowance(acoToken, address(this), address(acoFlashExercise)) < acoBalance) {
            ACOAssetHelper._callApproveERC20(acoToken, address(acoFlashExercise), MAX_UINT);    
        }
        acoFlashExercise.flashExercise(acoToken, acoBalance, minIntrinsicValue, block.timestamp);
        
        if (collateral != address(token)) {
            uint256 collateralBalance = ACOAssetHelper._getAssetBalanceOf(collateral, address(this));
            uint256 etherAmount = 0;
            if (ACOAssetHelper._isEther(collateral)) {
                etherAmount = collateralBalance;
            } else if (ACOAssetHelper._getAssetAllowance(collateral, address(this), address(assetConverter)) < collateralBalance) {
                ACOAssetHelper._callApproveERC20(collateral, address(assetConverter), MAX_UINT);
            }
            assetConverter.swapExactAmountOut{value: etherAmount}(collateral, address(token), collateralBalance);
        }
        
        uint256 tokenIn = ACOAssetHelper._getAssetBalanceOf(token, address(this)).sub(previousTokenAmount);
        positions[acoToken].profit = tokenIn.add(positions[acoToken].profit); 
        positions[acoToken].exercised = acoBalance.add(positions[acoToken].exercised); 
        
        emit ExerciseAco(acoToken, acoBalance, tokenIn);
    }
    
    function setReward(uint256 acoTokenAmount, uint256 rewardAmount) external override {
        require(msg.sender == address(controller), "ACOVault:: Invalid sender");
        address _currentAcoToken = address(currentAcoToken);
        address _token = token;
        address poolExpectedAsset = IACOToken(_currentAcoToken).strikeAsset();
        
        uint256 restriction;
        if (_token != poolExpectedAsset) {
            restriction = assetConverter.swapExactAmountOutWithMinAmountToReceive(_token, poolExpectedAsset, rewardAmount, 1);    
        } else {
            restriction = rewardAmount;
        }
        
        uint256 amount = acoPool.swap(true, _currentAcoToken, acoTokenAmount, restriction, address(this), block.timestamp);
        positions[_currentAcoToken].amount = amount.add(positions[_currentAcoToken].amount);
        
        if (_token != poolExpectedAsset) {
            uint256 poolAssetBalance = ACOAssetHelper._getAssetBalanceOf(poolExpectedAsset, address(this));
            if (poolAssetBalance > 0) {
                assetConverter.swapExactAmountOutWithMinAmountToReceive(poolExpectedAsset, _token, poolAssetBalance, 1);  
            }
        }
        
        emit RewardAco(_currentAcoToken, amount);
    }
    
    function skim(address account) external override {
        uint256 shares = balanceOf(account);
        uint256 vaulTotalSupply = totalSupply;
        AccountData storage data = accounts[account];
        for (uint256 i = data.acoTokensOnDeposit.length; i > 0; --i) {
            address acoToken = data.acoTokensOnDeposit[i - 1];
            if (block.timestamp >= IACOToken(acoToken).expiryTime()) {
                (,uint256 adjust) = _getPositionData(acoToken, shares, vaulTotalSupply, data);    
                if (adjust == 0) {
                    _removeFromAccountData(acoToken, data);
                }
            }
        }
    }
    
    function _removeFromAccountData(address acoToken, AccountData storage data) internal {
        uint256 index = data.positionsOnDeposit[acoToken].index;
        uint256 lastIndex = data.acoTokensOnDeposit.length - 1;
		if (lastIndex != index) {
			address last = data.acoTokensOnDeposit[lastIndex];
			data.positionsOnDeposit[last].index = index;
			data.acoTokensOnDeposit[index] = last;
		}
        data.acoTokensOnDeposit.pop();
        delete data.positionsOnDeposit[acoToken];
    }
    
    function _setAccountData(
        address acoToken, 
        uint256 acoAmount, 
        uint256 acoProfit, 
        uint256 acoExercised, 
        uint256 previousShares,
        uint256 newShares,
        AccountData storage accountData
    ) internal {
        if (accountData.positionsOnDeposit[acoToken].initialized) {
            uint256 weight = newShares.add(previousShares);
            Position storage _accountPosition = accountData.positionsOnDeposit[acoToken];
            _accountPosition.amount = newShares.mul(acoAmount).add(previousShares.mul(_accountPosition.amount)).div(weight).add(1);
            _accountPosition.profit = newShares.mul(acoProfit).add(previousShares.mul(_accountPosition.profit)).div(weight).add(1);
            _accountPosition.exercised = newShares.mul(acoExercised).add(previousShares.mul(_accountPosition.exercised)).div(weight).add(1);
        } else if (acoAmount > acoExercised) {
            if (previousShares > 0) {
                uint256 weight = newShares.add(previousShares);  
                acoAmount = newShares.mul(acoAmount).div(weight).add(1);
                if (acoProfit > 0) {
                    acoProfit = newShares.mul(acoProfit).div(weight).add(1);
                }
                if (acoExercised > 0) {
                    acoExercised = newShares.mul(acoExercised).div(weight).add(1);
                }
            }
            accountData.positionsOnDeposit[acoToken] = Position(acoAmount, acoProfit, acoExercised, accountData.acoTokensOnDeposit.length, true);
            accountData.acoTokensOnDeposit.push(acoToken);
        }
    }
    
    function _getAccountAcoSituation(address account, uint256 shares) internal view returns(uint256, address[] memory, uint256[] memory) {
        AccountData storage data = accounts[account];
        uint256[] memory accountPositions = new uint256[](data.acoTokensOnDeposit.length);
        uint256 count = 0;
        uint256 totalAdjust = 0;
        uint256 vaulTotalSupply = totalSupply;
        for (uint256 i = 0; i < data.acoTokensOnDeposit.length; ++i) {
            address acoToken = data.acoTokensOnDeposit[i];
            (uint256 acoAmount, uint256 adjust) = _getPositionData(acoToken, shares, vaulTotalSupply, data);
            totalAdjust = totalAdjust.add(adjust);
            if (block.timestamp >= IACOToken(acoToken).expiryTime() || acoAmount == 0) {
                accountPositions[i] = 0;
            } else {
                ++count;
                accountPositions[i] = acoAmount;
            }   
        }
        address[] memory acos = new address[](count);
        uint256[] memory acosAmount = new uint256[](count);
        count = 0;
        for (uint256 j = 0; j < accountPositions.length; ++j) {
            if (accountPositions[j] > 0) {
                acosAmount[count] = accountPositions[j];
                acos[count] = data.acoTokensOnDeposit[j];
                ++count;
            }
        }
        return (totalAdjust, acos, acosAmount);
    }
    
    function _getPositionData(
        address acoToken,
        uint256 shares, 
        uint256 vaulTotalSupply,
        AccountData storage data
    ) internal view returns(uint256, uint256) {
        uint256 amount = 0;
        uint256 adjust = 0;
        
        Position storage _position = positions[acoToken];
        Position storage _accountPosition = data.positionsOnDeposit[acoToken];
        
        uint256 expectedAmount = _position.amount.sub(_accountPosition.amount);
        if (expectedAmount > 0) {
            uint256 acoAmount = ACOAssetHelper._getAssetBalanceOf(acoToken, address(this));
            if (expectedAmount > acoAmount) {
                expectedAmount = acoAmount;
            }
            amount = shares.mul(expectedAmount).div(vaulTotalSupply);
        }
        
        uint256 exercisedAmount = _position.exercised.sub(_accountPosition.exercised);
        if (exercisedAmount > 0) {
            uint256 totalProfit = _position.profit.sub(_accountPosition.profit);
            uint256 accountPosition = exercisedAmount.sub(_accountPosition.amount.sub(_accountPosition.exercised));
            uint256 profit = accountPosition.mul(totalProfit).div(exercisedAmount);
            adjust = controller.actualAmount(address(this), totalProfit.sub(profit));
        }
        return (amount, adjust);
    }
    
    function _exerciseValidation(address acoToken, uint256 acoAmount) internal view returns(uint256, uint256, address) {
        (address underlying, 
         address strikeAsset, 
         bool isCall,
         uint256 strikePrice, 
         uint256 expiryTime) = acoFactory.acoTokenData(acoToken);
        require(expiryTime <= minTimeToExercise.add(block.timestamp), "ACOVault:: Invalid time to exercise");
        
        uint256 acoBalance = ACOAssetHelper._getAssetBalanceOf(acoToken, address(this));
        if (acoAmount > acoBalance) {
            acoAmount = acoBalance;
        }
        require(acoAmount > 0, "ACOVault:: Invalid ACO amount");
        
        uint256 price = assetConverter.getPrice(underlying, strikeAsset);
        uint256 diff = 1;
        address collateral;
        uint256 _decimals;
        if (isCall) {
            require(price > strikePrice, "ACOVault:: It's not ITM");
            uint256 priceWithSlippage = price.mul(PERCENTAGE_PRECISION.sub(exerciseSlippage)).div(PERCENTAGE_PRECISION);
            if (priceWithSlippage > strikePrice) {
                diff = priceWithSlippage.sub(strikePrice);
            }
            collateral = underlying;
            _decimals = ACOAssetHelper._getAssetDecimals(strikeAsset);
        } else {
            require(price < strikePrice, "ACOVault:: It's not ITM");
            uint256 priceWithSlippage = price.mul(PERCENTAGE_PRECISION.add(exerciseSlippage)).div(PERCENTAGE_PRECISION);
            if (priceWithSlippage < strikePrice) {
                diff = strikePrice.sub(priceWithSlippage);
            }
            collateral = strikeAsset;
            _decimals = ACOAssetHelper._getAssetDecimals(underlying);
        }
        uint256 minIntrinsicValue = diff.mul(acoBalance).div((10 ** _decimals));
        require(minIntrinsicValue > 0, "ACOVault:: Profit too small");
        
        return (acoAmount, minIntrinsicValue, collateral);
    }

    function _setAcoToken(
        IACOAssetConverterHelper _assetConverter,
        IACOFactory _acoFactory, 
        IACOPoolFactory _acoPoolFactory, 
        address newAcoToken, 
        address newAcoPool
    ) internal {
        (address underlying, 
         address strikeAsset, 
         bool isCall, 
         uint256 strikePrice, 
         uint256 expiryTime) = _acoFactory.acoTokenData(newAcoToken);
         
        _acoTokenValidation(_assetConverter, underlying, strikeAsset, strikePrice, expiryTime);
        
        _setAcoPool(_acoPoolFactory, newAcoPool, underlying, strikeAsset, isCall, strikePrice, expiryTime);
        
        emit SetAcoToken(address(currentAcoToken), newAcoToken);
        
        currentAcoToken = IACOToken(newAcoToken);
        
        if (!positions[newAcoToken].initialized) {
            positions[newAcoToken] = Position(0, 0, 0, acoTokens.length, true);
            acoTokens.push(newAcoToken);
        }
    }
    
    function _setAcoPool(
        IACOPoolFactory _acoPoolFactory, 
        address newAcoPool,
        address underlying, 
        address strikeAsset, 
        bool isCall, 
        uint256 strikePrice, 
        uint256 expiryTime
    ) internal {
        _acoPoolValidation(_acoPoolFactory, newAcoPool, underlying, strikeAsset, isCall, strikePrice, expiryTime); 
        
        emit SetAcoPool(address(acoPool), newAcoPool);
        
        ACOAssetHelper._callApproveERC20(strikeAsset, newAcoPool, MAX_UINT);
        acoPool = IACOPool(newAcoPool);
    }
    
    function _acoTokenValidation(
        IACOAssetConverterHelper _assetConverter,
        address underlying, 
        address strikeAsset, 
        uint256 strikePrice, 
        uint256 expiryTime
    ) internal view {
        require(underlying != strikeAsset, "ACOVault:: Invalid ACO token");
        
        uint256 minExpiryTime = minExpiration.add(block.timestamp);
        uint256 maxExpiryTime = maxExpiration.add(block.timestamp);
        require(expiryTime >= minExpiryTime && expiryTime <= maxExpiryTime, "ACOVault:: Invalid ACO expiry time");
        
        uint256 price = _assetConverter.getPrice(underlying, strikeAsset);
        uint256 maxPrice = strikePrice.mul(PERCENTAGE_PRECISION.add(tolerancePriceAbove)).div(PERCENTAGE_PRECISION);
        uint256 minPrice = strikePrice.mul(PERCENTAGE_PRECISION.sub(tolerancePriceBelow)).div(PERCENTAGE_PRECISION);
        
        require(price >= minPrice && price <= maxPrice, "ACOVault:: Invalid ACO strike price");
    }
    
    function _acoPoolValidation(
        IACOPoolFactory _acoPoolFactory,
        address newAcoPool,
        address underlying, 
        address strikeAsset, 
        bool isCall, 
        uint256 strikePrice, 
        uint256 expiryTime
    ) internal view {
        (uint256 poolStart, 
         address poolUnderlying, 
         address poolStrikeAsset, 
         bool poolIsCall, 
         uint256 poolMinStrikePrice, 
         uint256 poolMaxStrikePrice, 
         uint256 poolMinExpiration, 
         uint256 poolMaxExpiration,) = _acoPoolFactory.acoPoolData(newAcoPool);
        require(
            poolStart <= block.timestamp &&
            underlying == poolUnderlying &&
            strikeAsset == poolStrikeAsset &&
            isCall == poolIsCall &&
            poolMinStrikePrice <= strikePrice &&
            poolMaxStrikePrice >= strikePrice &&
            poolMinExpiration <= expiryTime &&
            poolMaxExpiration >= expiryTime, 
            "ACOVault:: Invalid ACO pool");
    }
    
    function _setController(address newController) internal {
        require(newController.isContract(), "ACOVault:: Invalid controller");
        emit SetController(address(controller), newController);
        ACOAssetHelper._callApproveERC20(token, newController, MAX_UINT);
        controller = IController(newController);
    }
    
    function _setAssetConverter(address newAssetConverter) internal {
        require(newAssetConverter.isContract(), "ACOVault:: Invalid asset converter");
        emit SetAssetConverter(address(assetConverter), newAssetConverter);
        assetConverter = IACOAssetConverterHelper(newAssetConverter);
    }
    
    function _setAcoFlashExercise(address newAcoFlashExercise) internal {
        require(newAcoFlashExercise.isContract(), "ACOVault:: Invalid ACO flash exercise");
        emit SetAcoFlashExercise(address(acoFlashExercise), newAcoFlashExercise);
        acoFlashExercise = IACOFlashExercise(newAcoFlashExercise);
    }
    
    function _setMinPercentageToKeep(uint256 newMinPercentageToKeep) internal {
        require(newMinPercentageToKeep < PERCENTAGE_PRECISION, "ACOVault:: Invalid percentage");
        emit SetMinPercentageToKeep(minPercentageToKeep, newMinPercentageToKeep);
        minPercentageToKeep = newMinPercentageToKeep;
    }
    
    function _setTolerancePriceAbove(uint256 newTolerancePriceAbove) internal {
        require(newTolerancePriceAbove < PERCENTAGE_PRECISION, "ACOVault:: Invalid tolerance");
        emit SetTolerancePriceAbove(tolerancePriceAbove, newTolerancePriceAbove);
        tolerancePriceAbove = newTolerancePriceAbove;
    }
    
    function _setTolerancePriceBelow(uint256 newTolerancePriceBelow) internal {
        require(newTolerancePriceBelow < PERCENTAGE_PRECISION, "ACOVault:: Invalid tolerance");
        emit SetTolerancePriceBelow(tolerancePriceBelow, newTolerancePriceBelow);
        tolerancePriceBelow = newTolerancePriceBelow;
    }
    
    function _setMinExpiration(uint256 newMinExpiration) internal {
        require(newMinExpiration <= maxExpiration, "ACOVault:: Invalid min expiration");
        emit SetMinExpiration(minExpiration, newMinExpiration);
        minExpiration = newMinExpiration;
    }
    
    function _setMaxExpiration(uint256 newMaxExpiration) internal {
        require(newMaxExpiration >= minExpiration, "ACOVault:: Invalid max expiration");
        emit SetMaxExpiration(maxExpiration, newMaxExpiration);
        maxExpiration = newMaxExpiration;
    }
    
    function _setMinTimeToExercise(uint256 newMinTimeToExercise) internal {
        require(newMinTimeToExercise >= 3600, "ACOVault:: Invalid min time to exercise");
        emit SetMinTimeToExercise(minTimeToExercise, newMinTimeToExercise);
        minTimeToExercise = newMinTimeToExercise;
    }
    
    function _setExerciseSlippage(uint256 newExerciseSlippage) internal {
        require(newExerciseSlippage < PERCENTAGE_PRECISION, "ACOVault:: Invalid exercise slippage");
        emit SetExerciseSlippage(exerciseSlippage, newExerciseSlippage);
        exerciseSlippage = newExerciseSlippage;
    }
    
    function _setWithdrawFee(uint256 newWithdrawFee) internal {
        require(newWithdrawFee <= 1000, "ACOVault:: Invalid withdraw fee");
        emit SetWithdrawFee(withdrawFee, newWithdrawFee);
        withdrawFee = newWithdrawFee;
    }
    
    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "ACOVault:: Invalid account");
        totalSupply = totalSupply.add(amount);
        balances[account] = balances[account].add(amount);
    }

    function _burn(address account, uint256 amount) internal {
        require(account != address(0), "ACOVault:: Invalid account");
        balances[account] = balances[account].sub(amount);
        totalSupply = totalSupply.sub(amount);
    }
}