import React from 'react'
import Card from '../Card/Card'

function EventsCard(props){
    const userID=props.userID
    const mDate=props.mDate
    const buttonText=props.buttonText

    function eventCardsMap(obj){
        let regUsersList=[]
        regUsersList=obj.regUsers.map(listMapFunction)
        function listMapFunction(obj){
            return obj._id
        }
        console.log(regUsersList)
        return(
            (obj.approved)&&(regUsersList.includes(userID))?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} buttonText={buttonText} />:<br/>
        )
    }
    return(
        props.eventsData?props.eventsData.map(eventCardsMap):<></>  
    )
}

export default EventsCard