import React, { useEffect, useState } from 'react';
import './Events.css'
import NavAfter from '../NavAfter'
import NonMember from './NonMember'
import Admin from './Admin'
import Member from './Member'
import axios from 'axios'

function Events(props){

        const data=props.userData
        const token=props.userData.tokens.pop()
        let userID=props.userData._id

        function pageSetter(val){props.pageSetter(val)}
        function logoutHandler(val){props.logoutHandler(val)}
        
        const [eventsList,setEventsList] = useState(null)
        useEffect(() => {
          axios.get('https://thepc-one.herokuapp.com/api/allEvents')
          .then((response) => {
              setEventsList(response.data);
          }, (error) => {
              console.log(error);
          });    
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
            <>
              <NavAfter pageSetter={pageSetter} logoutHandler={logoutHandler} />
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              {props.userData.memberType ===-1?<NonMember eventsData={eventsList} mDate={mDate} userData={data} userID={userID}/>:props.userData.memberType ===0?<Member eventsData={eventsList} mDate={mDate} userData={data} token={token} userID={userID}/>:props.userData.memberType ===1?<Admin eventsData={eventsList} mDate={mDate} userData={data} token={token} userID={userID}/>:<br/>}
            </>
        ) 
}

export default Events;