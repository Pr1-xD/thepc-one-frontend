import React, { useEffect ,useState} from 'react'
import Card from '../Card/Card'
import EventsCard from './EventsCard'
function NonMember(props){
    useEffect(()=>{console.log(props.userData)})
    const [data,setData]=useState({})
    useEffect(()=>{
        setData(props.userData)
      })
    function cardsMapper(obj){
        return(
            <Card name={obj.name}/>
        )
    }  
    return(
        <div>
            Live Events
            <EventsCard data={data}/>
            Past Events
            <EventsCard data={data}/>
        </div>
    )
}
export default NonMember