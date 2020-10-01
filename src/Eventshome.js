import React , {useState,useEffect} from 'react'
import axios from 'axios'
import Card from "./Card/Card";
import "./Eventshome.css"

function Eventshome(props){

    const [eventsList, setEventsList] = useState([]);

    useEffect(() => {
        axios.get('https://thepc-one.herokuapp.com/api/allEvents')
        .then((response) => {
            console.log(response);
            setEventsList(response.data);
        }, (error) => {
            console.log(error);
        });    
    },[])

    useEffect(()=>{console.log(eventsList)})

    function homeCardsMap(obj){
        return(
            <Card name={eventsList.obj.eventName} desc={obj.eventDesc} startDate={obj.eventStart} />
        )
    }

    return(
        <div className="eventsHomeCard">
            <div className="events_title"><h1>Events</h1></div>
            {/* {Object.keys(eventsList).map(homeCardsMap)} */}
        </div>
    )
}

export default Eventshome