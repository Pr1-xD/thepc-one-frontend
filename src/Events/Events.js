import React, { useEffect, useState } from 'react';
import './Events.css'
import NavAfter from '../NavAfter'
import NonMember from './NonMember'
import Member from './Member'
// import Login from './Login'
import Card from '../Card/Card'

function Events(props){
        const [data,setData]=useState({})
        function pageSetter(val){
          props.pageSetter(val)
        }
        useEffect(()=>{
          setData(props.userData)
        })
        


        return(
            <div>
              <NavAfter pageSetter={pageSetter} />
              {props.userData.memberType==-1?<NonMember userData={data}/>:props.userData.memberType==0?<Member userData={data}/>:<br/>}
            </div>
        ) 
}

export default Events;