import React from 'react'

function Header() {
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
      <div className="col-3 p-0">
        <div className="navbar-brand">
            <img src="/images/logo.png" alt="Book a room" style={{ cursor: 'pointer', width: '120px', height: '50px'}} />
        </div>
      </div>

      <div className="col-3 mt-3 mt-md-0 text-center">
        <a className="btn btn-success px-4 text-white login-header-btn float-right">Login</a>
      </div>
    </div>
    </nav>
  )
}

export default Header
