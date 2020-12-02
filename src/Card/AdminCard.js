import React, { useState } from 'react'
import "./Card.css"
import img from "../Images/thepcOneImg.png"
import axios from 'axios'
import swal from '@sweetalert/with-react'
import ScrollAnimation from 'react-animate-on-scroll';

function AdminCard(props) {
    const darkTheme=props.darkTheme
    const id=props.id
    const eventsList=props.eventsList
    const date=props.startDate
    const newDate = date.toString().substring(0,10)

    let textTime='2-6PM'
    if(props.textTime){
        textTime=props.textTime
    }

    let blob = new Blob([arrayBuffer])
    let srcBlob=null
    if(props.image){
        var arrayBuffer = new Uint8Array( props.image.data)
        blob=new Blob( [ arrayBuffer], { type: "image/jpeg" } );
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL( blob );
    }

    function setEventsList(val){props.setEventsList(val)}
    function eventsRefresh(){props.eventsRefresh()}

    let link='https://thepc-one.herokuapp.com/api/approveEvent/'+id
    let header='Bearer '+(props.token.token)

    function eventsApprove(){
        console.log(header)
        axios.post(link+'/true',
            {},
            {
                headers: {authorization:header}
            })
                    .then(res => {
                    console.log(res);
                    console.log(res.data);
                    }, (error) => {
                        console.log(error)
                    }) 
                    swal("Event Approved", "Successfully!", "success",{
                        button:false,
                        timer:2000,
                    });
                    setTimeout(eventsRefresh(),8000)                
          }

    function eventsReject(){
        console.log(header)
        console.log(link+'/false')
        axios.post(link+'/false',
            {},
            {
                headers: {authorization:header}
            })
                    .then(res => {
                    console.log(res);
                    console.log(res.data);
                    })
                    swal("Event Rejected", " ", "error",{
                        button:false,
                        timer:2000,
                    });
                    setTimeout(eventsRefresh(),8000)          
          }
        

    return (
        <>
        <ScrollAnimation animateIn="animate__slideInLeft" delay='200' duration='0.6' animateOnce='true' >
        <div class={darkTheme?"card-container-dark":"card-container"}>{/* ADD CONDITIONAL RENDERING */}
            <div class="float-layout">
                <div class="card-image">
                        {props.image?<img class="customImage" src={imageUrl}/>:<img class="customImage" src={img}/>}
                        <div class={darkTheme?"card card-custom-dark d-flex":"card card-custom d-flex"}>{/* ADD CONDITIONAL RENDERING */}
                            <div class="card-title">{props.name}</div>
                            <div class="card-desc mb-auto">{props.desc}</div>
                            <div class="d-flex justify-content-between align-items-center custom_footer">
                                <h5 className="card_footerColor">Date : <span className="card_footerColor">{newDate}</span></h5>
                                <h5 className="card_footerColor">Time : <span className="card_footerColor">{textTime}</span></h5>
                                <div>
                                <button onClick={eventsReject} class="adminReject_button registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="button" > <span class="registerText">{'Reject'}</span></button>
                                <button onClick={eventsApprove} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="button" > <span class="registerText">{props.buttonText}</span></button> 
                                </div>
                            </div>
                         </div>
                </div>
            </div>
        </div>
        </ScrollAnimation>
        </>
    )
}

export default AdminCard