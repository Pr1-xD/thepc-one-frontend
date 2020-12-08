import React from 'react'
import Input from "./Events Components/Input"
import Textarea from "./Events Components/Textarea"
import Checkboxes from "./Events Components/Checkboxes"

function Ccs(props) {
    return (
        <div>
            <Input placeholder="Enter your Name" type="text" required/>
            <Input placeholder="Enter the Registration date (yyyy/mm/dd)" type="date" required />
            <Input placeholder="Enter you Phone Number" type="number" required />
            <Input placeholder="Enter you Email ID" type="email" required />
            <Textarea placeholder="Desc" type="textarea" rows="3" cols="100" required />
            <Textarea placeholder="Desc" type="textarea" rows="3" cols="100" required />
            <Input placeholder="File upload" type="file" required />
            <Checkboxes label ="Design" />
        </div>
    )
}

export default Ccs
