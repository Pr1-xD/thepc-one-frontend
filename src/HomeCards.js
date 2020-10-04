import React from 'react'
import Card from './Card/Card'

function HomeCards(props){
    
    function eventsRegister(val){
        console.log('Passed')
        props.eventsRegister(val)
    }
    function homeCardsMap(obj){
        return(
            <Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} eventsRegister={eventsRegister}/>
        )
    }
    return(
        props.data.map(homeCardsMap)
    )
}

export default HomeCards