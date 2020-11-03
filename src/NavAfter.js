import React from 'react'
import './NavAfter.css'

function NavAfter(props) {
    function eventSetter(){
        props.pageSetter('Events')
    }
    function homeSetter(){
        props.pageSetter('Home')
    }

    function logoutHandler(){
        props.logoutHandler(false)
    }

    return (
        <div className=" container-fluid navAfter">
                <a className=" homeNavbar_leftText navbar-brand" onClick={homeSetter}>THEPC ONE</a>

                    
                <button className="homeNavbar_myEventButton homeNavbar_myEventButtonColor btn my-2 my-sm-0" type="submit" name="login" onClick={eventSetter} >My Events</button>
                <button className="homeNavbar_logoutButton homeNavbar_logoutButtonColor btn my-2 my-sm-0" type="submit" name="signup" onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default NavAfter
