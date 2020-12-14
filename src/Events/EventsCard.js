import React, { useState } from 'react'
import Card from '../Card/Card'

function EventsCard(props){
    const darkTheme=props.darkTheme
    const userID=props.userID
    const mDate=props.mDate
    const buttonText=props.buttonText
    const userType=props.userType
    const eventsList=props.eventsList
    function handleEventState(val){props.handleEventState(val)}
    function eventStart(val){props.eventStart(val)}
    let liveEventsList=[]
    let reqEventsList=[]
    let pastEventsList=[]
    

    function MemberCards(data){
        let liveEventsList=LiveEventsCheck(data)
        let reqEventsList=ReqEventsCheck(data)
        let pastEventsList=PastEventsCheck(data)
        return(
            <>{/* ADD CONDITIONAL RENDERING */}
            {(reqEventsList.length!=0)?<h1 className={darkTheme?"event-headers-dark":"event-headers"}>Event Requests</h1>: <></>}
            {(reqEventsList.length!=0)?reqEventsList.map(ReqCardsRender): <></>}
            {(liveEventsList.length!=0)?<h1 className={darkTheme?"event-headers-dark":"event-headers"}>Live Events</h1>: <></>}
            {(liveEventsList.length!=0)?liveEventsList.map(LiveCardsRender):<></>}
            {(pastEventsList.length!=0)?<h1 className={darkTheme?"event-headers-dark":"event-headers"}>Past Events</h1>: <></>}
            {(pastEventsList.length!=0)?pastEventsList.map(PastCardsRender): <></>}
            </>
        )
    }

    function LiveEventsCheck(data){
        
        if(userType==-1){
        data.map((obj)=>{
            const d1=new Date(obj.eventStart)
            const d2=new Date() 
            let regUsersList=[]
            regUsersList=obj.regUsers.map(listMapFunction)
            function listMapFunction(obj){return obj._id}
            if((obj.approved)&&(regUsersList.includes(userID))&&(d1<=d2))
            liveEventsList.push(obj)
        })}
        if(userType==0){
        data.map((obj)=>{
            const d1=new Date(obj.eventStart)
            const d2=new Date() 
            let regUsersList=[]
            regUsersList=obj.regUsers.map(listMapFunction)
            function listMapFunction(obj){return obj._id}
            if((obj.approved)&&(regUsersList.includes(userID))&&(d1<=d2))
            liveEventsList.push(obj)
        })}
        if(userType==1){
        data.map((obj)=>{
            const d1=new Date(obj.eventStart)
            const d2=new Date() 
            let regUsersList=[]
            regUsersList=obj.regUsers.map(listMapFunction)
            function listMapFunction(obj){return obj._id}
            if((obj.approved)&&(d1<=d2))
            liveEventsList.push(obj)
        })}
        return(liveEventsList)
    }
    
    function ReqEventsCheck(data){
        
        if(userType==0){
        data.map((obj)=>{
            if(obj.createdBy.length!=0){
            let createdBy=[]
            createdBy=obj.createdBy[0]._id
            if ((userType==0)&&(createdBy==userID)&&(obj.approved==false))   
            reqEventsList.push(obj)
        }})}
        return(reqEventsList)
    }

    function PastEventsCheck(data){
        
        if(userType==-1){
        data.map((obj)=>{
            const d1=new Date(obj.eventStart)
            const d2=new Date() 
            let regUsersList=[]
            regUsersList=obj.regUsers.map(listMapFunction)
            function listMapFunction(obj){return obj._id}
            if((obj.approved)&&(regUsersList.includes(userID))&&(d1<=d2))
            pastEventsList.push(obj)
        })}
        if(userType==0){
        data.map((obj)=>{
            const d1=new Date(obj.eventStart)
            const d2=new Date() 
            if((obj.approved)&&(d1<=d2))
            pastEventsList.push(obj)
        })}
        if(userType==1){
        data.map((obj)=>{
            const d1=new Date(obj.eventStart)
            const d2=new Date() 
            if((obj.approved)&&(d1<=d2))
            pastEventsList.push(obj)
        })}
        return(pastEventsList)
    }

    function LiveCardsRender(obj){
        
        if(userType==-1){
            return(
                <Card name={obj.eventName} image={obj.eventImg} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} textTime={obj.textTime} mDate={mDate} buttonText={'Start'} eventStart={eventStart} event={obj} darkTheme={darkTheme} />
            )
        }
        if(userType==0){
            return(
                <Card name={obj.eventName} image={obj.eventImg} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} textTime={obj.textTime} mDate={mDate} buttonText={'Start'} buttonTextTwo={'View Submissions'} eventStart={eventStart} handleEventState={handleEventState} event={obj} darkTheme={darkTheme}/>
            )
        }
        if(userType==1){
            return(
                <Card name={obj.eventName} image={obj.eventImg} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} textTime={obj.textTime} mDate={mDate} buttonText={'Start'} buttonTextTwo={'View Submissions'} eventStart={eventStart} handleEventState={handleEventState} event={obj} darkTheme={darkTheme}/>
            )
        }  
    }
    function PastCardsRender(obj){
        
            return(
                <Card name={obj.eventName} image={obj.eventImg} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} textTime={obj.textTime} mDate={mDate} darkTheme={darkTheme}/>
            ) 
    }
    function ReqCardsRender(obj){
        
        if(userType==0){
            return(
                <Card name={obj.eventName} image={obj.eventImg} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} textTime={obj.textTime} mDate={mDate} buttonText='Pending' darkTheme={darkTheme} />
            )
        }
    }

    return(
        <>
        {userType==0&&eventsList?<button className="btn btn-lg btn-block create-event-dark" type="button" onClick={()=>handleEventState('Create')}>Create Event {/* ADD CONDITIONAL RENDERING */}
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus create-event-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        </button>:<></>}
        {/* {(eventsList&&evntcnt==0)?<div className="container text-center mx-auto no-events-text"><p><b>No Events Registered</b></p></div>:<></>} */}
        {eventsList?MemberCards(eventsList):<></>}
        </>
    )
}

export default EventsCard