import React from 'react'
import Input from "./Events Components/Input"
import Textarea from "./Events Components/Textarea"
import Checkboxes from "./Events Components/Checkboxes"
import FileUpload from "./Events Components/FileUpload"
import swal from '@sweetalert/with-react'
import axios from 'axios'

function Ccs(props) {
    window.scrollTo(0,0)
    let darkTheme=props.darkTheme
    let header='Bearer '+(props.token.token)
    function CardsToggle(){props.CardsToggle()}
    let ccsData={depts:[]}
    function returnData(tag,val){
        ccsData[tag]=val}
    function returnDepts(tag){
        ccsData.depts.push(tag)
    }
    function handleSubmit(){
        let link='https://thepc-one.herokuapp.com/api/ccs/submit'
        console.log(header)
        console.log(ccsData)
        axios.post(link,ccsData,{headers: {
            authorization:header}})
                  .then(res => {console.log(res.data)}
                  ,(error) => {
                    console.log(error)
                })
          swal("Form Submitted!", "Successfully!", "success",{
            button:false,
            timer:2000,
          });       
        
    }

    return (
        <div>
            <Input placeholder="Enter your Name" type="text" returnData={returnData} tag='name' required/>
            <Input placeholder="Registration Number" type="text" returnData={returnData} tag='regNum' required />
            <Input placeholder="Whatsapp Number" type="number" returnData={returnData} tag='whatsapp' required />
            <Input placeholder="Contact Number" type="number" returnData={returnData} tag='phNum' required />
            <Input placeholder="Enter your Email ID" type="email" returnData={returnData} tag='email' required />
            <div className={darkTheme?"textWhite container mt-4":"container mt-4"}><p><b>Choose the departments you wish to apply for:</b></p></div>
            <Checkboxes label ="Design" returnDepts={returnDepts} darkTheme={darkTheme} tag='Design' />
            <Checkboxes label ="Editorial" returnDepts={returnDepts} darkTheme={darkTheme} tag='Editorial' />
            <Checkboxes label ="Media" returnDepts={returnDepts} darkTheme={darkTheme} tag='Media' />
            <Checkboxes label ="Tech" returnDepts={returnDepts} darkTheme={darkTheme} tag='Tech'/>
            <Checkboxes label ="Finance" returnDepts={returnDepts} darkTheme={darkTheme} tag='Finance' />
            <Textarea placeholder="What are your strengths (2-3 lines)" type="textarea" rows="3" cols="100" returnData={returnData} tag='strengths' required />
            <Textarea placeholder="What are your weaknesses (2-3 lines)" type="textarea" rows="3" cols="100" returnData={returnData} tag='weaknesses' required />
            <Textarea placeholder="Why do you want to join THEPC (2-3 lines)" type="textarea" rows="3" cols="100" returnData={returnData} tag='whyDoYouJoin' required />
            {/* <FileUpload placeholder="Upload File" type="file" returnData={returnData} tag='file' required/> */}
            {/* <button onClick={console.log(ccsData)}>Check</button> */}
            <div className="create-form-btn">
                <button className=" btn btn-lg submitButton m-1" type="button" onClick={handleSubmit}>Submit</button>
                <button className=" btn btn-lg submitButton m-1" type="button" onClick={CardsToggle}>Back</button>
            </div>
        </div>
    )
}

export default Ccs
