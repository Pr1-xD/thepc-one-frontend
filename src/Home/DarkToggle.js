import React from 'react';
import './DarkToggle.css'

function DarkToggle(props) {
    const darkTheme=props.darkTheme
    function setDarkTheme(val){
        if(val)
        document.body.style.backgroundColor="#181818"
        else
        document.body.style.backgroundColor="white"
        console.log(val)
        props.setDarkTheme(val)}
    return (
        <div className="dark-toggle">
            <label class="toggle-control">
            <input type="checkbox" checked={darkTheme}  onClick={(e)=>{setDarkTheme(!darkTheme)}} />
            <span class="control"></span>
            </label>
        </div>
    );
}

export default DarkToggle;