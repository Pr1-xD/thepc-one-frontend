import React, { useState } from 'react';
import SubmissionCard from '../Card/SubmissionCard';
import axios from 'axios'

function ViewSubmissions(props) {
    const [submissionsData,setSubmissionsData]=useState()
    const [filterData,setFilterData]=useState()
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
            <tr>
      <th scope="row">{cnt+1}</th>
      <td>{obj.name}</td>
        <td>{obj.depts.join(" ")}</td>
    </tr>
        )
    }
    function FilterCardMap(obj){
      console.log(filterData)
      console.log(obj.depts.includes(filterData))
        return(
            (obj.depts.includes(filterData))?<tr>
      <th scope="row">{cnt+1}</th>
      <td>{obj.name}</td>
        <td>{obj.phNum}</td>
    </tr>:<></>
        )
    }
    function CardsToggle(){
        props.CardsToggle()
    }          

    return (
        <div>
            {/* {submissionsData?submissionsData.map(SubmissionCardMap):<></>} */}
            <select id = "dropdown" onChange={e=>setFilterData(e.target.value)} class="dropdown btn btn-secondary">
                <option className="dropdown-item" value="Design">Design</option>
                <option className="dropdown-item" value="Media">Media</option>
                <option className="dropdown-item" value="Tech">Tech</option>
                <option className="dropdown-item" value="Editorial">Editorial</option>
                <option className="dropdown-item" value="Finance">Finance</option>
            </select>
            <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                {filterData?<th scope="col">Number</th>:<th scope="col">Departments</th>}
              </tr>
            </thead>
            <tbody>
            {(submissionsData)&&(!filterData)?submissionsData.map(SubmissionCardMap):<></>}
            {(submissionsData)&&(filterData)?submissionsData.map(FilterCardMap):<></>}
            </tbody>
          </table>
            <button className=" btn btn-lg submitButton m-1" type="button" onClick={CardsToggle}>Back</button>
        </div>
    );
}

export default ViewSubmissions;