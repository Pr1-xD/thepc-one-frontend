import React from 'react'
import Card from '../Card/Card'

function EventsCard(props){

    const mDate=props.mDate


    function eventCardsMap(obj){
        return(
            <Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} />
            
        )
    }
    return(
        props.eventsData.map(eventCardsMap)    
    )
}

export default EventsCard