import React from 'react'
import Card from '../Card/Card'

function EventsCard(props){
    const userID=props.userID
    const mDate=props.mDate
    const buttonText=props.buttonText
    const userType=props.userType

    function eventCardsMap(obj){
        if (userType==-1){
        let regUsersList=[]
        regUsersList=obj.regUsers.map(listMapFunction)
        function listMapFunction(obj){
            return obj._id
        }
        console.log(regUsersList)
        return(
            (obj.approved)&&(regUsersList.includes(userID))?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} buttonText={buttonText} />:<br/>
        )}
        if (userType==0){
        return(
            (obj.approved)?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} buttonText={buttonText} />:<></>
        )}
        if (userType==1){
        return(
            (obj.approved)?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} buttonText={buttonText} />:<></>
        )}
    }
    return(
        props.eventsData?props.eventsData.map(eventCardsMap):<></>  
    )
}

export default EventsCard