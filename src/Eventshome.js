import React , {useState,useEffect} from 'react'
import axios from 'axios'
import "./Eventshome.css"
import HomeCards from './HomeCards'
import swal from '@sweetalert/with-react'
import Loader from './Loader'
import LoaderDark from './LoaderDark'

function Eventshome(props){
    const userData=props.data
    const eventsList=props.eventsList
    const [eventsData,setEventsData]=useState(eventsList)
    const token=props.token

    function setData(val){props.setData(val)}
    function setEventsList(val){props.setEventsList(val)}

    const darkTheme=props.darkTheme

    function eventsRegister(val){
        let link='https://thepc-one.herokuapp.com/api/user/'+val.eventID
        let header='Bearer '+(token.token)
        console.log(header)
          axios.patch(link,{},{headers: {authorization:header}})
                  .then(res => {setData(res.data)})
        swal("Event Registered", "Successfully", "success",{
            button:false,
            timer:2000,  
        });
        setTimeout(eventsRefresh,2000)                 
    }

    function eventsRefresh(){
        axios.get('https://thepc-one.herokuapp.com/api/allEvents')
        .then((response) => {
            console.log(response.data)
            setEventsList(response.data)
            setEventsData(response.data)
        }, (error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        axios.get('https://thepc-one.herokuapp.com/api/allEvents')
        .then((response) => {
            console.log(response)
            setEventsList(response.data)
            setEventsData(response.data)
        }, (error) => {
            console.log(error)
        });    
    },[])

    return(
        <div className="eventsHomeCard">
            {eventsData?<h1 className={darkTheme?"events_title_dark":"events_title"}>Events{/* ADD CONDITIONAL RENDERING */}
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-event" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            </svg>
            </h1>:<></>}
            <div class="alert alert-success container inst-cont" role="alert">
            <h2 className="instructions">Instructions for CCS:</h2>
                <ol>
                <li>Once the CCS event loads, click on the register button.</li>
                <li>After successful registration, go to my events page.</li>
                <li>Click start and fill the form appropriately.</li>
                <li>Further instructions will be provided via Whatsapp or email before 19th December.</li>
                </ol>
                
            </div>
            <br/>
            {(!eventsData)&&(darkTheme)?<LoaderDark/>:<></>}{/* ADD CONDITIONAL RENDERING */}
            {(eventsData)?<></>:<Loader/>}{/* ADD CONDITIONAL RENDERING */}
            {eventsData?<HomeCards data={eventsData} eventsRegister={eventsRegister} userData={userData} darkTheme={darkTheme} />:<></>}
        </div>
    )
}

export default Eventshome