import React from 'react'
import Card from '../Card/Card'

function EventsCard(props){

    const mDate=props.mDate
    const buttonText=props.buttonText

    function eventCardsMap(obj){
        return(
            obj.approved?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} buttonText={buttonText} />:<br/>
        )
    }
    return(
        props.eventsData?props.eventsData.map(eventCardsMap):<br />  
    )
}

export default EventsCard