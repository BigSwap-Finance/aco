import './ErrorLargeIcon.css'
import React, { Component } from 'react'

class ErrorLargeIcon extends Component {
  render() {
    return (
      <div className="error-large-icon">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="12" stroke="#ff0000" strokeWidth="2" />
            <path
                d="M8.61523 17.6175L17.3845 8.38672"
                stroke="#ff0000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.38446 8.61719L17.6152 17.3864"
                stroke="#ff0000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
      </div>
  )}
}
export default ErrorLargeIcon