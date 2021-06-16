import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './customSwal2.css'
import App from './App'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import { setLoggedNetworkByName } from './util/network'

import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.locale(en)

setLoggedNetworkByName(window && window.localStorage && window.localStorage.getItem('DEFAULT_NETWORK'))

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))