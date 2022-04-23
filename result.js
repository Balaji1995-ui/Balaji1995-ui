import React from 'react'
import Button from '@material-ui/core/Button';
import'./Result.css';


const Result = ({temp,description,icon,setTemp}) => {
  return (
    <div className="result">
        <div className="result_result-box">
       
            <h1>Temp: {temp}</h1>
            <p>{description}</p>
            <img src={icon} alt="logo"></img><br/>
            <Button variant="contained" color="primary" onClick={()=>{setTemp("")}}>Back</Button>
            
        </div>
      
    </div>
  )
}

export default Result;
