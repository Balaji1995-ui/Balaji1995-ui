import React from 'react';
import App from './App';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const Inputer = ({input,setInput,findweather}) => {

    const handleChange=(event)=>{
        setInput(event.target.value);
      
      
    
      };
      const handleClick=(event)=>{
        event.preventDefault();
      findweather();
      
      
      };
  return (
    <div className='input-box'>
    <div className='input-input_box'>
      
      <h1>Google Weather App</h1>
      <p>Powered by</p>
      <img src="https://www.transparentpng.com/thumb/google-logo/shady-google-logo-pictures-png-free-BjH4wQ.png" alt="shady google logo pictures png free @transparentpng.com" />
      <form>
      <Input placeholder='Enter Your City Name' onChange={handleChange} value={input}  ></Input>
     <br/>
      <Button variant="contained" color="Primary" type='submit' onClick={handleClick} >Check</Button>
      </form>
    </div>
  </div>


  )
}

export default Inputer
