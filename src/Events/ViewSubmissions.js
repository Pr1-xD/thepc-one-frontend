import React, { useState } from 'react';
import SubmissionCard from '../Card/SubmissionCard';
import axios from 'axios'
import './Submissions.css'

function ViewSubmissions(props) {
    const [submissionsData,setSubmissionsData]=useState()
    const [filterData,setFilterData]=useState()
    const darkTheme=props.darkTheme
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
        return(<>
            <tr>
            <th scope="row">{cnt+1}</th>
            <td>{obj.name}</td>
              <td>{obj.depts.join(" ")}</td>
              <td>
              <a class="view-more" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">View More</a>
              </td>
          </tr>
          <div class="card collapse multi-collapse subcards" id="multiCollapseExample1">
            <div class="card-body">
                <h5 class="card-title">{obj.name}</h5>
                 <p class="card-text">Registration Number:{obj.regNum}</p>
                 <p class="card-text">Phone Number: {obj.phNum}</p>
                 <p class="card-text">Email: {obj.email}</p>
                 <p class="card-text">Whatsapp: {obj.whatsapp}</p>
                 <p class="card-text">Strengths: {obj.strengths}</p>
                 <p class="card-text">Weaknesses: {obj.weaknesses}</p>
                 <p class="card-text">Why do you want to join THEPC?: {obj.whyDoYouJoin}</p>
            </div>
            </div>
          </>
        )
    }
    function FilterCardMap(obj){
      console.log(filterData)
      console.log(obj.depts.includes(filterData))
        return(
            (obj.depts.includes(filterData))?
            <><tr>
      <th scope="row">{cnt+1}</th>
      <td>{obj.name}</td>
        <td>{obj.phNum}</td>
        <td>
              <a class="view-more" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">View More</a>
              </td>
          </tr>
          <div class="card collapse multi-collapse subcards" id="multiCollapseExample1">
            <div class="card-body subcards">
                <h5 class="card-title">{obj.name}</h5>
                 <p class="card-text">Registration Number:{obj.regNum}</p>
                 <p class="card-text">Phone Number: {obj.phNum}</p>
                 <p class="card-text">Email: {obj.email}</p>
                 <p class="card-text">Whatsapp: {obj.whatsapp}</p>
                 <p class="card-text">Strengths: {obj.strengths}</p>
                 <p class="card-text">Weaknesses: {obj.weaknesses}</p>
                 <p class="card-text">Why do you want to join THEPC?: {obj.whyDoYouJoin}</p>
            </div>
            </div></>:<></>
        )
    }

    function CardsToggle(){
        props.CardsToggle()
    }          

    return (
        <div>
            {/* {submissionsData?submissionsData.map(SubmissionCardMap):<></>} */}
            <select id = "dropdown" onChange={e=>setFilterData(e.target.value)} class="dropdown btn btn-secondary dropbtn">
                <option className="dropdown-item textWhite">Departments</option>
                <option className="dropdown-item textWhite" value="Design">Design</option>
                <option className="dropdown-item textWhite" value="Media">Media</option>
                <option className="dropdown-item textWhite" value="Tech">Tech</option>
                <option className="dropdown-item textWhite" value="Editorial">Editorial</option>
                <option className="dropdown-item textWhite" value="Finance">Finance</option>
            </select>
            <table class="table subtable">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                {filterData?<th scope="col">Number</th>:<th scope="col">Departments</th>}
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className={darkTheme?"textWhite":""}>
            {(submissionsData)&&(!filterData)?submissionsData.map(SubmissionCardMap):<></>}
            {(submissionsData)&&(filterData)?submissionsData.map(FilterCardMap):<></>}
            </tbody>
          </table>
          <div className="mx-auto"><button className=" btn btn-lg submitButton backbtn" type="button" onClick={CardsToggle}>Back</button></div>
        </div>
    );
}

export default ViewSubmissions