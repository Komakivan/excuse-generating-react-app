import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



function App() {

  const [Excuse,setExcuse] = useState('')

  const handleParty = () =>{
    axios.get('https://excuser.herokuapp.com/v1/excuse/party/')
    .then(res=>{
      
      setExcuse(res.data[0])
    })
  }

  const handleFamily = () =>{
    axios.get('https://excuser.herokuapp.com/v1/excuse/family/')
    .then(res=>{
      
      setExcuse(res.data[0])
    })
  }

  const handleOffice = () =>{
    axios.get('https://excuser.herokuapp.com/v1/excuse/office/')
    .then(res=>{
      
      setExcuse(res.data[0])
    })
  }

  

  return (
    <div className="App">
      <h1>Excuse generating machine</h1>
      <div align='center'>
        <Button variant='outline-success' onClick={handleParty}>Party</Button>
        <Button variant='outline-success' onClick={handleFamily}>Family</Button>
        <Button variant='outline-success' onClick={handleOffice}>Office</Button>
        <br/>
        <hr/>
        <Card border="info" style={{ width: '18rem' }}>
        <Card.Header>{Excuse.category} excuse for today</Card.Header>
        <Card.Body>
          <Card.Title>Excuse</Card.Title>
          <Card.Text>
            {Excuse.excuse}
          </Card.Text>
        </Card.Body>
      </Card>
      </div >
      
    </div>
  );
}

export default App;

