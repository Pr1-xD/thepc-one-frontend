import React from 'react'
import './NavAfter.css'
import logo from './Images/t1-logo.png'

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
        <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-custom home fixed-top">
            <a className="navbar-brand navAfter_leftText mr-auto" onClick={homeSetter} >
                <img src={logo} className='nav-logo' />
                {/* THEPC ONE */}
            </a>
            <button className="navbar-toggler float-right customIcon" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="navAfter_myEventButton navAfter_myEventButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" name="login" onClick={eventSetter}> My Events <span class="sr-only">(current)</span></a>
                    <a className="navAfter_logoutButton navAfter_logoutButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" name="signup" onClick={logoutHandler}><span className="logoutColor">LOGOUT</span></a>
                </div>
            </div>
        </nav>
    )
}

export default NavAfter
