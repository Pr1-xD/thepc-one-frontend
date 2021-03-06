import React from 'react'
import Card from './Card/Card'

function HomeCards(props){
    const userID=props.userData._id
    const darkTheme=props.darkTheme

    function eventsRegister(val){
        props.eventsRegister(val)
    }

    function regListCheck(obj){
        let regUsersList=[]
        regUsersList=obj.regUsers.map(listMapFunction)
        function listMapFunction(obj){return obj._id}
        if(regUsersList.includes(userID))
        return('Registered')
        else 
        return('Register')
    }
    function homeCardsMap(obj){
        let buttonText="Register"
        if(userID)
        buttonText=regListCheck(obj)
        const d1=new Date(obj.eventStart)
        const d2=new Date()
        return(
            ((obj.approved)&&(d1<=d2))?<Card image={obj.eventImg} name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} textTime={obj.textTime} eventsRegister={eventsRegister}  buttonText={buttonText} userID={userID} darkTheme={darkTheme}/> : <></>
        )
    }
    return(
        <div>
           {props.data.map(homeCardsMap)}
        </div>
        
    )
}

export default HomeCards