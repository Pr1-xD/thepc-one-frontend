import React,{useState} from 'react'

function CardButton() {
    const [registerText,setRegisterText] = useState("Register")

    const handleRegisterText = () => {
        return(
            setRegisterText("Registered")
        )
    };

    return (
        <div>
            <button type="submit" className="btn btn-primary card_button" onClick={handleRegisterText}>{registerText}</button>
        </div>
    )
};

export default CardButton
