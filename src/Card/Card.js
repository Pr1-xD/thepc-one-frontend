import React from 'react'
import "./Card.css"
import CardButton from './CardButton'

function Card(props) {


    return (
        <div>   
            <div className="card_contentBox card card_box mb-3">
                <img className="card_img" src="https://picsum.photos/seed/picsum/200/300" alt="Event-img" />
                <div className="card_body card-body">
                    <h5 className="card_title card-title">{props.title}</h5>
                    <p className="card_bodyText card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est culpa qui officia deserunt mollit anim id est . Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumculpa qui officia deserunt mollit anim id est . Excepteur sint occaecat cup. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="card_bodyFooter card-text"><b>DATE: <span className="card_footerColor">4/10/2020</span></b>     &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <b>TIME: <span className="card_footerColor">2-6 PM</span></b></p>         <CardButton /> {/*<button type="button" class="btn btn-primary card_button">Register</button>*/}
                </div>
            </div>
        </div>
    )
}

export default Card