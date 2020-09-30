import React from 'react'
import axios from 'axios'

function Eventshome(){

    axios.get('https://thepc-one.herokuapp.com/api/allEvents')
    .then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
    

    return(
        <>
        Card
        </>
    )
}

export default Eventshome