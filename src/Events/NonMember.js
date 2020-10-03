import React, { useEffect ,useState} from 'react'
// import axios from 'axios'
import EventsCard from './EventsCard'

function NonMember(props){
    useEffect(()=>{console.log(props.userData)},[])

    const [data,setData]=useState({})

    useEffect(()=>{
        setData(props.userData)
      })

      const [eventsList,setEventsList] = useState(null)


      useEffect(()=>{
          setEventsList(props.eventsData)
      })

      const mDate = props.mDate



    return(
        <div>
            Live Events
            {eventsList ? <EventsCard mDate={mDate} eventsData={eventsList} data={data} />:<br/>}
            Past Events
            {eventsList ? <EventsCard mDate={mDate} eventsData={eventsList} data={data}/>: <br/>}
        </div>
    )
}
export default NonMember