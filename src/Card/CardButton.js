import React,{useState} from 'react'

function CardButton(props) {
    function onclick(){
        props.onClick()
    }

    const [registerText,setRegisterText] = useState("Register")

    const handleRegisterText = () => {
        return(
            setRegisterText("Registered")
        )
    };

    return (
        <div>
            <button onClick={onclick} className="btn btn-primary card_button" >{registerText}</button>
        </div>
    )
};

export default CardButton
