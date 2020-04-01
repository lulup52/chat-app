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
    </div>
  );
}

export default App;
