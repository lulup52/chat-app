import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

const Contact = ({name, status, image}) => {
    return (
    <div className= "Contact">
        <img className ="avatar" src = {image} alt = {name}/>
        <div className = "status">
            <h3 className = "name">{name}</h3> 
            <div className = {status ? "status-online" : "status-offline"}> 
            </div>
            <p className = "status-text">{status ? "online" : "offline"}</p>
        </div>  
    </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  };

export default Contact;