import React, { Component } from 'react'
import "./Header.css";


 class Header extends Component {
  render() {
    return (
      <div className="header">
                <div className="s-logo">
                    <p>e!</p>
                </div>
                <div className="btn-group login-block">
                    <span className="login">LogIn</span>
                    <span className="signUp">Create an account</span>
                </div>
            </div>
    )
  }
}

export default Header