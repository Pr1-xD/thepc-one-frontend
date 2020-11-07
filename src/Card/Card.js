import React, {useState} from 'react'
import "./Card.css"

function Card(props) {
    const userID=props.userID
    // const [buttonText,setButtonText]=useState(props.buttonText)
    // console.log(buttonText)
    const buttonText=props.buttonText
    const date=props.startDate
    const newDate = date.toString().substring(0,10);

    function eventsRegister()
    {   if(userID)
       { // setButtonText('Registered')    
        props.eventsRegister(
            {   
                'eventName':props.name,
                'eventID':props.id
            }
        )
        }
        else
        console.log('Not logged in')
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
                                {(buttonText)&&(buttonText!='Registered')?<button onClick={eventsRegister} class="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto" type="submit" > <span class="registerText">{buttonText}</span></button>:<></>}
                                {buttonText=='Registered'?<button type="button" className="registerButton registerButtonColor float-right btn my-2 my-sm-0 mr-auto card_button_disabled">{props.buttonText}</button>:<></>}
                            </div>
                         </div>
                </div>
            </div>
        </div>




        // <div>   
        //     <div className="card_contentBox card card_box mb-3">
        //         <img className="card_img" src="https://picsum.photos/seed/picsum/200/300" alt="Event-img" />
        //         <div className="card_body card-body">
        //             <h5 className="card_title card-title">{props.name}</h5>
        //             <p className="card_bodyText card-text">{props.desc}</p>
        //             <div className="card_bodyFooter card-text"><b>DATE: <span className="card_footerColor">{newDate}</span></b>     &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <b>TIME: <span className="card_footerColor">2-6 PM</span></b>
        //               {(props.buttonText)&&(props.buttonText!='Registered')?<button type="button" onClick={eventsRegister} className="btn btn-primary card_button">{props.buttonText}</button>:<></>}
        //               {props.buttonText=='Registered'?<button type="button" className="btn btn-primary card_button_disabled">{props.buttonText}</button>:<></>}
        //             </div>          
        //         </div>
        //     </div>
        // </div>
    )
}

export default Card