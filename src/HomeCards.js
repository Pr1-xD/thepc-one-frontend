import React from 'react'
import Card from './Card/Card'

function HomeCards(props){
    
    function eventsRegister(val){
        console.log('Passed')
        props.eventsRegister(val)
    }
    function homeCardsMap(obj){
        const d1=new Date(obj.eventStart)
        const d2=new Date()
        return(
            ((obj.approved)&&(d1<=d2))?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} eventsRegister={eventsRegister} buttonText="Register"/> : <br/>
        )
    }
    return(
        props.data.map(homeCardsMap)
    )
}

export default HomeCards