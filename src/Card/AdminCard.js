import React, { useState } from 'react'
import "./Card.css"
import axios from 'axios'

function AdminCard(props) {
    const id=props.id;
    console.log(props.token)
    const date=props.startDate
    const newDate = date.toString().substring(0,10);

    let link='https://thepc-one.herokuapp.com/api/approveEvent/'+id
    let header='Bearer '+(props.token.token)

    function eventsApprove(){
        console.log(header)
        axios.patch(link,
            {},
            {
                headers: {authorization:header}
            })
                    .then(res => {
                    console.log(res);
                    console.log(res.data);
                    })          
          }
        
    
    return (
        <div class="card-container navAfter">
            <div class="float-layout">
                <div class="card-image">
                    <img class="customImage" src="https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>
                        <div class="card d-flex ">
                            <div class="card-title">{props.name}</div>
                            <div class="card-desc mb-auto">{props.desc}</div>
                            <div class="d-flex justify-content-between align-items-center custom_footer">
                                <h5 className="card_footerColor">Date : <span className="card_footerColor">{newDate}</span></h5>
                                <h5 className="card_footerColor">Time : <span className="card_footerColor">2-6 PM</span></h5>
                                <button onClick={eventsApprove} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="button" > <span class="registerText">{props.buttonText}</span></button>
                            </div>
                         </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCard