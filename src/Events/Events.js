import React, { useEffect, useState } from 'react';
import './Events.css'
import NavAfter from '../NavAfter'
import NonMember from './NonMember'
import Admin from './Admin'
import Member from './Member'
import axios from 'axios'

function Events(props){
        const [data,setData]=useState({})
        props.userData.tokens.pop()
        const token=props.userData.tokens.pop()
        console.log(token)

        function pageSetter(val){
          props.pageSetter(val)
        }

        useEffect(()=>{
          setData(props.userData)
          console.log(data)
        },[])
        
        const [eventsList,setEventsList] = useState(null)

        useEffect(() => {
          axios.get('https://thepc-one.herokuapp.com/api/allEvents')
          .then((response) => {
              console.log(response);
              setEventsList(response.data);
          }, (error) => {
              console.log(error);
          });    
        },[])

        useEffect(()=>{console.log(eventsList)},[])

        useEffect(()=>{
          console.log(formatDate(todayDate));
        },[])


        const todayDate = new Date()

        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
        
            return [year, month, day].join('-');
        }
        const mDate = formatDate(todayDate).toString()

        return(
            <div>
              <NavAfter pageSetter={pageSetter} />
              {props.userData.memberType ===-1?<NonMember eventsData={eventsList} mDate={mDate} userData={data}/>:props.userData.memberType ===0?<Member mDate={mDate} userData={data} token={token}/>:props.userData.memberType ===1?<Admin mDate={mDate} userData={data} />:<br/>}
            </div>
        ) 
}

export default Events;