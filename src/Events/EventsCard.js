import React from 'react'
import Card from '../Card/Card'
function EventsCard(props){
    let test=['A','B','C']
    function eventCardsMap(obj){
        return(
            <Card name={obj} desc={obj.eventDesc} startDate={obj.eventStart} />
        )
    }
    return(
        <div>
            {/* {props.data.eventsRegistered.map(eventCardsMap)}  */}
            {test.map(eventCardsMap)} 
        </div>
        
    )
}

export default EventsCard