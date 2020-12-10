import React, { useState } from 'react';
import SubmissionCard from '../Card/SubmissionCard';
import axios from 'axios'

function ViewSubmissions(props) {
    const [submissionsData,setSubmissionsData]=useState()
    let cnt=0
    let link='https://thepc-one.herokuapp.com/api/ccs/submissions'
    let header='Bearer '+(props.token.token)
    if (!submissionsData){
      axios.get(link,{headers: {
        authorization:header}})
              .then(res => {console.log(res.data)
            setSubmissionsData(res.data)}
              ,(error) => {
                console.log(error)
            })
        }
    function SubmissionCardMap(obj){
        return(
            // <SubmissionCard name={obj.name} depts={obj.depts}/>
            <tr>
      <th scope="row">{cnt+1}</th>
      <td>{obj.name}</td>
        <td>{obj.depts.join(" ")}</td>
    </tr>
        )
    }
    function CardsToggle(){
        props.CardsToggle()
    }          

    return (
        <div>
            {/* {submissionsData?submissionsData.map(SubmissionCardMap):<></>} */}
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Departments</th>
    </tr>
  </thead>
  <tbody>
  {submissionsData?submissionsData.map(SubmissionCardMap):<></>}
  </tbody>
</table>
            <button className=" btn btn-lg submitButton m-1" type="button" onClick={CardsToggle}>Back</button>
        </div>
    );
}

export default ViewSubmissions;