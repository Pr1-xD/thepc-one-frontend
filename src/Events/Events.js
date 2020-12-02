import React, { useEffect, useState } from 'react';
import './Events.css'
import './EventsDark.css'
import NavAfter from '../NavAfter'
import NonMember from './NonMember'
import Admin from './Admin'
import Member from './Member'
import Loader from '../Loader'
import axios from 'axios'

function Events(props){

        const data=props.userData
        const darkTheme=props.darkTheme
        const eventsList=props.eventsList
        const token=props.userData.tokens.pop()
        let userID=props.userData._id
        function pageSetter(val){props.pageSetter(val)}
        function logoutHandler(val){props.logoutHandler(val)}
        function setEventsList(val){props.setEventsList(val)}
        function eventsRefresh(){props.eventsRefresh()} 
        function setDarkTheme(val){props.setDarkTheme(val)}

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
              <NavAfter pageSetter={pageSetter} logoutHandler={logoutHandler} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              {eventsList?<></>:<Loader />}
              {props.userData.memberType ===-1?<NonMember eventsList={eventsList} userData={data} userID={userID} darkTheme={darkTheme} />:props.userData.memberType ===0?<Member eventsList={eventsList} userData={data} token={token} userID={userID} eventsRefresh={eventsRefresh} darkTheme={darkTheme}/>:props.userData.memberType ===1?<Admin eventsList={eventsList} eventsRefresh={eventsRefresh} setEventsList={setEventsList}  userData={data} token={token} userID={userID} darkTheme={darkTheme}/>:<br/>}
            </>
        ) 
}

export default Events;