import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./CreateEvent.css"

function CreateEvent(props){

    function handleEventState(val){props.handleEventState(val)}

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
        isFileUpload:false
      }

      const [eventDetails,setEventDetails]=useState(defaultEvent)
      let abc=defaultEvent
      let link='https://thepc-one.herokuapp.com/api/newEvent'
      let header='Bearer '+(props.token.token)
      
      function handleSubmit()
      {  
        setEventDetails(abc)    
        console.log('Clicked')
        console.log(eventDetails)
        console.log(header)
        axios.post(link,eventDetails,{headers: {authorization:header}})
                .then(res => {console.log(res.data);})
        setEventDetails(defaultEvent)        
      }


    return(
        <div class="container mt-3">
        <form className="form-event" onSubmit="return false" >
                    <label for="eventName" class="sr-only">Event Name</label>
                    <input type="text" id="eventName" className="form-control" placeholder="Event Name" onChange={e=>abc.eventName=e.target.value} required/>
                    
                    <label for="eventDesc" class="sr-only">Event Description</label>
                    <textarea type="text" id="eventDesc" className="form-control mt-3" placeholder="Event Desc" rows="3" cols="100" onChange={e=>abc.eventDesc=e.target.value} required/>
                    
                    <label for="eventLink" class="sr-only">Event Link</label>
                    <input type="text" id="eventLink" className="form-control mt-3" placeholder="Event Link" onChange={e=>abc.eventLink=e.target.value} required/>
                    
                    <label for="numTextBoxes" class="sr-only">Number of text boxes</label>
                    <input type="text" id="numTextBoxes" className="form-control mt-3" placeholder="Number of text boxes" onChange={e=>abc.numTextBoxes=e.target.value} required/>
                    
                    <label for="numMultiChoice" class="sr-only">Number of Multi Choice</label>
                    <input type="number" id=" numMultiChoice" className="form-control mt-3" placeholder="Number of Multi Choice" onChange={e=>abc.numMultiChoice=e.target.value} required/>
                    
                    <label for="numOptions" class="sr-only">Number of Options</label>
                    <input type="number" id="numOptions" className="form-control mt-3" placeholder="Number of Options" onChange={e=>abc.numOptions=e.target.value} required/>
                    
                    <label for="numFileUploads" class="sr-only">Number of File Uploads</label>
                    <input type="number" id="numFileUploads" className="form-control mt-3" placeholder="Number of File Uploads" onChange={e=>abc.numFileUploads=e.target.value} required/>
                    
                    <label for="isTextBoxes" className="radioText">Text Boxes</label>
                    <input type="radio" id="isTextBoxes" name="isTextBoxes" className="radioCustom" value="true" onChange={e=>abc.isTextBoxes=e.target.checked} />
                    
                    <label for="isMultiChoice" className="radioText">MultiChoice</label>
                    <input type="radio" id="isMultiChoice" name="isMultiChoice" className="radioCustom" value="true" onChange={e=>abc.isMultiChoice=e.target.checked} />
                    
                    <label for="isFileUpload" className="radioText">isFileUpload</label>
                    <input type="radio" id="isFileUpload" name="isFileUpload" className="radioCustom" value="true" onChange={e=>abc.isFileUpload=e.target.checked}  />
                    <br></br>
                    <button className="button btn btn-lg btn-primary mt-2 " type="button" onClick={handleSubmit}>Submit</button>
                </form>
                <button className="button btn btn-lg btn-primary mt-5 custom" type="button" onClick={()=>handleEventState('cards')}>Back</button>
            
        </div>
    )
}
export default CreateEvent