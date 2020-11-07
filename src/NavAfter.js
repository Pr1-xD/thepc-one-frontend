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
        <nav class="navbar navbar-expand-lg navbar-light bg-white navAfter">
            <a class="navbar-brand navAfter_leftText mr-auto" onClick={homeSetter} >THEPC ONE</a>
            <button class="navbar-toggler float-right customIcon" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <a class="navAfter_myEventButton navAfter_myEventButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" name="login" onClick={eventSetter}> My Events <span class="sr-only">(current)</span></a>
                    <a class="navAfter_logoutButton navAfter_logoutButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" name="signup" onClick={logoutHandler}><span className="logoutColor">LOGOUT</span></a>
                </div>
            </div>
        </nav>
    )
}

export default NavAfter
