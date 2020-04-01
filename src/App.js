import React from 'react';
import Contacts from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Contacts 
        name = "Susan Lawson"
        status = "status-offline"
        image = "https://randomuser.me/api/portraits/men/97.jpg"
        />
      <Contacts 
        name = "Sarah Holmes"
        status = "status-online"
        image = "https://randomuser.me/api/portraits/women/82.jpg"
        />
      <Contacts 
        name = "Emily Davis"
        status = "status-online"
        image = "https://randomuser.me/api/portraits/women/28.jpg"
        />
    </div>
  );
}

export default App;
