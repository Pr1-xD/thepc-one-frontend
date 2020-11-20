import React , {useState,useEffect} from 'react'
import axios from 'axios'
import "./Eventshome.css"
import HomeCards from './HomeCards'
import swal from '@sweetalert/with-react'

function Eventshome(props){
    const userData=props.data
    const [eventsList, setEventsList] = useState(null);
    const token=props.token

    function setData(val){props.setData(val)}

    function eventsRegister(val){
        let link='https://thepc-one.herokuapp.com/api/user/'+val.eventID
        let header='Bearer '+(token.token)
        console.log(header)
          axios.patch(link,{},{headers: {authorization:header}})
                  .then(res => {console.log(res.data)
                    setData(res.data)})
        swal("Event Registered", "Successfully", "success",{
            button:false,
            timer:2000,  
        });
                                
    }

    function eventsRefresh(){
        console.log("reg")
        axios.get('https://thepc-one.herokuapp.com/api/allEvents')
        .then((response) => {
            console.log(response);
            setEventsList(response.data);
        }, (error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        axios.get('https://thepc-one.herokuapp.com/api/allEvents')
        .then((response) => {
            console.log(response);
            setEventsList(response.data);
        }, (error) => {
            console.log(error);
        });    
    },[])

    return(
        <div className="eventsHomeCard">
            <h1 className="events_title">Events</h1>
            {eventsList?<HomeCards data={eventsList} eventsRegister={eventsRegister} userData={userData} />  :<></>}
        </div>
    )
}

export default Eventshome