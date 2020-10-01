import React from 'react'
import "./Card.css"
import CardButton from './CardButton'

function Card(props) {
    const name=props.name
    const id=props.id
    function eventsRegister(){
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
            <button type="button" onClick={eventsRegister} class="btn btn-primary card_button">Register</button>
            <div className="card_contentBox card card_box mb-3">
                <img className="card_img" src="https://picsum.photos/seed/picsum/200/300" alt="Event-img" />
                <div className="card_body card-body">
                    <h5 className="card_title card-title">{props.name}</h5>
                    <p className="card_bodyText card-text">{props.desc}</p>
                    <p className="card_bodyFooter card-text"><b>DATE: <span className="card_footerColor">{props.startDate}</span></b>     &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <b>TIME: <span className="card_footerColor">2-6 PM</span></b></p>          
                </div>
            </div>
            
        </div>
    )
}

export default Card