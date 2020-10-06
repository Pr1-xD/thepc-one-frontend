import React,{useEffect,useState} from 'react'
import axios from 'axios'

function CreateEvent(props){

    console.log(props.token)
    
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
      // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjcwYzkyMjMwMmEyNDAwMTc2NWNkMDIiLCJtZW1iZXJUeXBlIjoiMSIsImlhdCI6MTYwMTIyNzQxMn0.qQFfNu1NMpwveCwfZa5V1S6QhEZGxTdpjmTJcn-ayt0'
      function handleSubmit()
      {  
        setEventDetails(abc)    
        console.log('Clicked')
        console.log(eventDetails)
        console.log(header)
        axios.post(link,
        eventDetails,
        {
            headers: {authorization:header}
        }
        )
                .then(res => {
                console.log(res);
                console.log(res.data);
                })
        setEventDetails(defaultEvent)        
      }


    return(
        <div>
        <form className="form-event" onSubmit="return false" >
                    <label for="eventName" class="sr-only">Event Name</label>
                    <input type="text" id="eventName" className="form-control" placeholder="Event Name" onChange={e=>abc.eventName=e.target.value} required/>
                    <label for="eventDesc" class="sr-only">Event Description</label>
                    <input type="text" id="eventDesc" className="form-control" placeholder="Event Desc" onChange={e=>abc.eventDesc=e.target.value} required/>
                    <label for="eventLink" class="sr-only">Event Link</label>
                    <input type="text" id="eventLink" className="form-control" placeholder="Event Link" onChange={e=>abc.eventLink=e.target.value} required/>
                    <label for="numTextBoxes" class="sr-only">Number of text boxes</label>
                    <input type="text" id="numTextBoxes" className="form-control" placeholder="numTextBoxes" onChange={e=>abc.numTextBoxes=e.target.value} required/>
                    <label for="numMultiChoice" class="sr-only">Email address</label>
                    <input type="number" id=" numMultiChoice" className="form-control" placeholder="numMultiChoice" onChange={e=>abc.numMultiChoice=e.target.value} required/>
                    <label for="nunmOptions" class="sr-only">Email address</label>
                    <input type="number" id="nunmOptions" className="form-control" placeholder="nunmOptions" onChange={e=>abc.numOptions=e.target.value} required/>
                    <label for="numFileUploads" class="sr-only">Email address</label>
                    <input type="number" id="numFileUploads" className="form-control" placeholder="numFileUploads" onChange={e=>abc.numFileUploads=e.target.value} required/>
                    <label for="isTextBoxes">Text Boxes</label>
                    <input type="radio" id="isTextBoxes" name="isTextBoxes" value="true" onChange={e=>abc.isTextBoxes=e.target.checked} />
                    <label for="isMultiChoice">MultiChoice</label>
                    <input type="radio" id="isMultiChoice" name="isMultiChoice" value="true" onChange={e=>abc.isMultiChoice=e.target.checked} />
                    <label for="isFileUpload">isFileUpload</label>
                    <input type="radio" id="isFileUpload" name="isFileUpload" value="true" onChange={e=>abc.isFileUpload=e.target.checked}  />

                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={handleSubmit}>Submit</button>
                    
                    

                </form>
            
        </div>
    )
}
export default CreateEvent