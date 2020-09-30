import React , {useState,useEffect} from 'react'
import axios from 'axios'
import Card from "./Card/Card";
import "./Eventshome.css"

function Eventshome(props){

    

    const [eventsList, setEventsList] = useState(null);



    axios.get('https://thepc-one.herokuapp.com/api/allEvents')
    .then((response) => {
        console.log(response.data);
        setEventsList(response.data);
        console.log(eventsList);
    }, (error) => {
        console.log(error);
    });
    


    return(
        <div className="eventsHomeCard">
            <div className="events_title"><h1>Events</h1></div>
            {eventsList.map ((event) => {
                return (
                    <Card title={event.eventName}/>
                )
            })} 
        </div>
    )
}

export default Eventshome