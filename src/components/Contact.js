import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            online: props.status
        }
    }

    render() {
        return (
        <div className= "Contact">
            <img className ="avatar" src = {this.props.image} alt = {this.props.name}/>
            <div className = "status"  onClick={event => {
                    const isOnline = !this.state.online;
                    this.setState({ online: isOnline })}}>
                <h3 className = "name">{this.props.name}</h3> 
                <div className = {this.state.online ? "status-online" : "status-offline"}> 
                </div>
                <p className = "status-text" >{this.state.online ? "online" : "offline"}</p>
            </div>  
        </div>
        )
    }
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  };

export default Contact;