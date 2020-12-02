import React from 'react'
import './NavAfter.css'
import logo from './Images/t1-logo.png'
import logoDark from './Images/T1LogoDark.png'
import DarkToggle from './Home/DarkToggle'

function NavAfter(props) {
    const darkTheme=props.darkTheme
    function setDarkTheme(val){
    if(val)
    document.body.style.backgroundColor="#181818"
    else
    document.body.style.backgroundColor="white"
    console.log(val)
    props.setDarkTheme(val)} 

    function eventSetter(){
        props.pageSetter('Events')
        window.scrollTo(0, 0)
    }
    function homeSetter(){
        props.pageSetter('Home')
        window.scrollTo(0, 0)
    }
    function logoutHandler(){
        props.logoutHandler(false)
        window.scrollTo(0, 0)
    }

    return (
        <nav className={darkTheme?"navbar navbar-custom-dark navbar-expand-lg navbar-light bg-white navbar-custom home fixed-top":"navbar navbar-expand-lg navbar-light bg-white navbar-custom home fixed-top"}>{/* ADD CONDITIONAL RENDERING */}
            <a className="navbar-brand navAfter_leftText mr-auto" onClick={homeSetter} >
                <img src={darkTheme?logoDark:logo} className='nav-logo' />
            </a>
            <button className="navbar-toggler float-right customIcon" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <div className="nav-dark-toggle" >
                    <span className={darkTheme?"nav-dark-toggle-span-dark":"nav-dark-toggle-span"}>Dark Theme</span>
                  <DarkToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                  </div>
                    <a className="navAfter_myEventButton navAfter_myEventButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" name="login" onClick={eventSetter}> My Events <span class="sr-only">(current)</span></a>
                    <a className="navAfter_logoutButton navAfter_logoutButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" name="signup" onClick={logoutHandler}><span className="logoutColor">LOGOUT</span>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavAfter
