import React,{useState} from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './App.css';
import axios  from 'axios';
import Inputer from './inputer';
import Result from './result';


const App=()=> {

  const [input,setInput]=useState("");
  const[ temp, setTemp]=useState("");
  const [description, setDescription]= useState("");
  const [ icon , setIcon]= useState("");


const findweather= async ()=>{
  const apiKey ="b4396a44bc24390eacf762aacb238f84";
  const unit ="metric";
  const url="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apiKey+"&unit="+unit;
  //const url="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apiKey+"&units="+unit;
  const response =await axios.get(url)

  const temp = response.data.main.temp;
  const description = response.data.weather[0].description;
  const icon =response.data.weather[0].icon;
  const imageURL="https://openweathermap.org/img/wn/" +icon +"@2x.png";
 console.log(response);
  setTemp(temp);
  setDescription(description);
  setIcon(imageURL);
setInput("");
};

  return (
   <div>
     {temp == "" ? (
<Inputer input={input} setInput={setInput} findweather={findweather}/>
     ):(
<Result temp={temp} description={description} icon={icon} setTemp={setTemp}/>
     )}
   </div>
 
  )
}

export default App
