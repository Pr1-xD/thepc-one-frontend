import React from 'react'
import './NavAfter.css'

function NavAfter() {
    return (
        <div className="navAfter">
            <nav className=" homeNavbar_color navbar navbar-expand-lg navbar-dark bg-primary">
                <a className=" homeNavbar_leftText navbar-brand">THEPC ONE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                </ul>
  
                <button className="homeNavbar_myEventButton homeNavbar_myEventButtonColor btn my-2 my-sm-0" type="submit" name="login" >My Events</button>
                <button className="homeNavbar_logoutButton homeNavbar_logoutButtonColor btn my-2 my-sm-0" type="submit" name="signup">Logout</button>
  
            </div>
          </nav>
        </div>
    )
}

export default NavAfter
