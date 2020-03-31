import React from 'react';
import './Contact.css';

const Contact = ({name, status, image}) => {
    return (
    <div className= "Contact">
        <img className ="avatar" src = {image} alt = {name}/>
        <div className = "status">
            <h3 className = "name">{name}</h3> 
            <div className ="status-online"> 
            </div>
            <p className = "status-text">{status === "online" ? "online" : "offline"}</p>
        </div>  
    </div>
    )
}

export default Contact;