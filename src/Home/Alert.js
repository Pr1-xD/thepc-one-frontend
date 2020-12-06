import React from 'react';
import './Alert.css'

function Alert(props) {

    const eventsList=props.eventsList
    console.log(eventsList) 
    let currentDate=new Date()
    let liveEvents=[]
    eventsList.map(dateCheck)
    

    function dateCheck(obj){
        let eventStartDate=new Date(obj.eventStart)
        let eventRegDate=new Date(obj.regStart)
        if((currentDate>eventRegDate)&&(currentDate<eventStartDate))
        liveEvents.push(obj.eventName)
    }

 
    return (
        <div>
            <div class="alert  alert-dismissible fade show reg-alert" role="alert">
            <strong>Registrations for {liveEvents[0]} are live now!</strong> 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
        </div>
    );
}

export default Alert;