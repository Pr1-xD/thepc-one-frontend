import React from 'react'
import Card from '../Card/Card'

function EventsCard(props){
    const userID=props.userID
    const mDate=props.mDate
    const buttonText=props.buttonText
    const userType=props.userType

    // function handleEventState(val){
    //     props.handleEventState(val)
    // }
    function eventStart(val){props.eventStart(val)}

    function eventCardsMapLive(obj){
        const d1=new Date(obj.eventStart)
        const d2=new Date()
        if (userType==-1){
        let regUsersList=[]
        regUsersList=obj.regUsers.map(listMapFunction)
        function listMapFunction(obj){
            return obj._id
        }
        return(
            (obj.approved)&&(regUsersList.includes(userID)&&(d1<=d2))?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} buttonText={buttonText} eventStart={eventStart} event={obj} />:<></>
        )}
        if (userType==0){
        return(
            (obj.approved)&&(d1<=d2)?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} buttonText={buttonText} />:<></>
        )}
        if (userType==1){
        return(
            (obj.approved)&&(d1<=d2)?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} buttonText={buttonText} />:<></>
        )}
    }
    function eventCardsMapPast(obj){
        const d1=new Date(obj.eventStart)
        const d2=new Date()
        if (userType==-1){
        let regUsersList=[]
        regUsersList=obj.regUsers.map(listMapFunction)
        function listMapFunction(obj){
            return obj._id
        }
        return(
            (obj.approved)&&(regUsersList.includes(userID)&&(d1<=d2))?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} />:<></>
        )}
        if (userType==0){
        return(
            <>
            {/* <button className="btn btn-lg btn-primary btn-block create-event" type="button" onClick={()=>handleEventState('Create')}>Create Event</button> */}
            {(obj.approved)&&(d1<=d2)?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate}  />:<></>}
            </>
        )}
        if (userType==1){
        return(
            (obj.approved)&&(d1<=d2)?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} />:<></>
        )}
    }
    return(
        <>
        <h1 className="event-headers">Live Events</h1>
        {props.eventsData?props.eventsData.map(eventCardsMapLive):<></>}  
        <h1 className="event-headers">Past Events</h1>
        {props.eventsData?props.eventsData.map(eventCardsMapPast):<></>}  
        </>
    )
}
// (obj._id==userID)?<Card name={obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} id={obj._id} mDate={mDate} buttonText={buttonText} />:
export default EventsCard