import React,{useEffect,useState} from 'react'
import axios from 'axios'
import FormData from 'form-data'
import "./CreateEvent.css"
import swal from '@sweetalert/with-react'
import "../Events Components/Checkboxes.css"
import "../Events Components/Checkboxes.css"

function CreateEvent(props){

    function handleEventState(val){props.handleEventState(val)}
    function eventsRefresh(){props.eventsRefresh()}
    const [isTextBoxes, setTextBoxes] = useState(false)
    const [isFileUpload, setFileUpload] = useState(false)
    const [isMultiChoice, setMultiChoice] = useState(false)
    const [picture,setPicture]=useState()
    const [images, setImages] = useState();
   

    useEffect(()=>{console.log(images)},[images])

    let defaultEvent={
        eventName:'',
        eventDesc:'',
        eventLink:'',
        numTextBoxes:0,
        numMultiChoice:0,
        numOptions:0,
        numFileUploads:0,
        isTextBoxes:false,
        isMultiChoice:false,
        isFileUpload:false,
        eventStart:'',
        eventEnd:'',
        regStart:'',
        textTime:'',
        eventImage:{}
      }
      let abc=defaultEvent
      let formdata=new FormData()

      function onUpload(e){
        e.preventDefault()
        let img=e.target.files[0]
        setPicture(img)
        setImages({file: img})
        formdata.append('eventImage',img)
        abc.eventImage=formdata
        console.log(abc)

      }
      function imgSubmit(e){
        e.preventDefault()
        console.log(images)
        console.log(abc)
        console.log(abc)
      }


      const [eventDetails,setEventDetails]=useState(defaultEvent)
      let link='https://thepc-one.herokuapp.com/api/newEvent'
      let header='Bearer '+(props.token.token)
      
      function handleSubmit(e)
      {  e.preventDefault()
        console.log(abc)
        // setEventDetails(abc)    
        // console.log(eventDetails)
        formdata.append('eventName',abc.eventName)
        formdata.append('eventDesc',abc.eventDesc)
        formdata.append('eventLink',abc.eventLink)
        formdata.append('numTextBoxes',abc.numTextBoxes)
        formdata.append('numMultiChoice',abc.numMultiChoice)
        formdata.append('numOptions',abc.numOptions)
        formdata.append('numFileUploads',abc.numFileUploads)
        formdata.append('eventStart',abc.eventStart)
        formdata.append('eventEnd',abc.eventEnd)
        formdata.append('regStart',abc.regStart)
        formdata.append('textTime',abc.textTime)


        axios.post(link,formdata,{headers: {
          authorization:header}})
                .then(res => {console.log(res.data)}
                ,(error) => {
                  console.log(error)
              })
        setEventDetails(defaultEvent)
        swal("Event created", "Successfully!", "success",{
          button:false,
          timer:2000,
        });
        handleEventState('cards')
        setTimeout(eventsRefresh,2000)        
      }


    return(
        <div class="container mt-3">
        <form className="form-event" onSubmit="return false" >
        <h1 className="event-headers">Create Event</h1>
                    <label for="eventName" class="sr-only">Event Name</label>
                    <input type="text" id="eventName" className="form-control" placeholder="Event Name" onChange={e=>abc.eventName=e.target.value} required/>
                    
                    <label for="eventDesc" class="sr-only">Event Description</label>
                    <textarea type="text" id="eventDesc" className="form-control mt-3" placeholder="Event Desc" rows="3" cols="100" onChange={e=>abc.eventDesc=e.target.value} required/>
                    
                    <label for="eventLink" class="sr-only">Event Link</label>
                    <input type="text" id="eventLink" className="form-control mt-3" placeholder="Event Link" onChange={e=>abc.eventLink=e.target.value} required/>
                    <label for="eventStart" class="sr-only">Event Start (yyyy/mm/dd)</label>
                    <input type="text" id="eventStart" className="form-control mt-3" placeholder="Event Start (yyyy/mm/dd)" onChange={e=>abc.eventStart=new Date(e.target.value)} required/>
                    <label for="eventEnd" class="sr-only">Event End (yyyy/mm/dd)</label>
                    <input type="text" id="eventEnd" className="form-control mt-3" placeholder="Event End (yyyy/mm/dd)" onChange={e=>abc.eventEnd=new Date(e.target.value)} required/>
                    <label for="regStart" class="sr-only">Registration Start (yyyy/mm/dd)</label>
                    <input type="text" id="regStart" className="form-control mt-3" placeholder="Registration Start (yyyy/mm/dd)" onChange={e=>abc.regStart=new Date(e.target.value)} required/>
                    <label for="eventTime" class="sr-only">Event Time</label>
                    <input type="text" id="eventTime" className="form-control mt-3" placeholder="Event Time" onChange={e=>abc.textTime=e.target.value} required/>
                    <br></br>

                    <label for="eventImage" class="sr form-control mt-1 customImage_text"><b>Event Image</b></label>


                    <input type="file" name="file" onChange={(e)=>{formdata.append('eventImg',e.target.files[0])}}/>

                    <br/>
                    <br/>
                    <br/>
                    <h1 className="event-headers">Event Details</h1>
                    

                    <div className="d-flex ">
                    <div className="checkbox-inline p-4">
                    <div>Text Boxes</div>
                      <label for="isTextBoxes" className="radioText checkbox bounce">
                      <input type="checkbox" id="isTextBoxes" name="isTextBoxes" className="radioCustom" value="true" onChange={e=>{abc.isTextBoxes=e.target.checked;setTextBoxes(e.target.checked)}} />
                      <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                      </svg>
                      </label>
                    </div>


                    <div className="checkbox-inline p-4">
                    <div>MultiChoice</div>
                    <label for="isMultiChoice" className="radioText checkbox bounce">
                    <input type="checkbox" id="isMultiChoice" name="isMultiChoice" className="radioCustom" value="true" onChange={e=>{abc.isMultiChoice=e.target.checked;setMultiChoice(e.target.checked)}} />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                    </svg>
                    </label>
                    </div>

                    <div className="checkbox-inline p-4">
                    <div>FileUpload</div>
                    <label for="isFileUpload" className="radioText checkbox bounce">
                    <input type="checkbox" id="isFileUpload" name="isFileUpload" className="radioCustom" value="true" onChange={e=>{abc.isFileUpload=e.target.checked;setFileUpload(e.target.checked)}}  />
                    
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                    </svg>
                    </label>
                    </div> 
                    </div>

                    <label for="numTextBoxes" class="sr-only">Number of text boxes</label>
                    {isTextBoxes?<input type="text" id="numTextBoxes" className="form-control mt-3" placeholder="Number of text boxes" onChange={e=>abc.numTextBoxes=e.target.value} required/>:<></>}
                    
                    <label for="numMultiChoice" class="sr-only">Number of Multi Choice</label>
                    {isMultiChoice?<input type="number" id=" numMultiChoice" className="form-control mt-3" placeholder="Number of Multi Choice" onChange={e=>abc.numMultiChoice=e.target.value} required/>:<></>}
                    
                    <label for="numOptions" class="sr-only">Number of Options</label>
                    {isMultiChoice?<input type="number" id="numOptions" className="form-control mt-3" placeholder="Number of Options" onChange={e=>abc.numOptions=e.target.value} required/>:<></>}
                    
                    <label for="numFileUploads" class="sr-only">Number of File Uploads</label>
                    {isFileUpload?<input type="number" id="numFileUploads" className="form-control mt-3" placeholder="Number of File Uploads" onChange={e=>abc.numFileUploads=e.target.value} required/>:<></>}
                    <br></br>
                    <div className="create-form-btn">
                    <button className="button btn btn-lg submitButton mt-2 " type="button" onClick={handleSubmit}>Submit</button>
                    <button className="button btn btn-lg submitButton mt-5 custom" type="button" onClick={()=>handleEventState('cards')}>Back</button>
                    </div>
                    
                </form>
                
                <br/>
                <br/>
                <br/>
        </div>
    )
}
export default CreateEvent