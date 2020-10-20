import React, { useState } from 'react'
import "./Card.css"

function Card(props) {
    const name=props.name;
    const id=props.id;

    const date=props.startDate
    const newDate = date.toString().substring(0,10);

    function eventsRegister()
    {
        console.log('Passed')
        props.eventsRegister(
            {   
                'eventName':props.name,
                'eventID':props.id
            }
        )
    }

    return (
        <div>   
            <div className="card_contentBox card card_box mb-3">
                <img className="card_img" src="https://picsum.photos/seed/picsum/200/300" alt="Event-img" />
                <div className="card_body card-body">
                    <h5 className="card_title card-title">{props.name}</h5>
                    <p className="card_bodyText card-text">{props.desc}</p>
                    <div className="card_bodyFooter card-text"><b>DATE: <span className="card_footerColor">{newDate}</span></b>     &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <b>TIME: <span className="card_footerColor">2-6 PM</span></b>
                        <button type="button" onClick={eventsRegister} className="btn btn-primary card_button">{props.buttonText}</button>
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default Card