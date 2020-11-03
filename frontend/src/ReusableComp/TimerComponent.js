import React,{useState,useRef,useEffect} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";
import {Navbar} from "react-bootstrap";

//TODO: need to give time for your application
const Header =() => {
  const Button = styled.button`
  color: none;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 0px solid ;
  border-radius: 0px;
  margin-left:570px;
  position:fixed:
`;
// const useLiveTime =() => {
//   const date = new Date();
//   return date;
// }

// const CallMe = () =>{
// const date=useLiveTime();
// return date.toISOString();
// }
const [timerDays, setTimerDays]=useState('00');
const [timerHours,SetTimerHours] = useState("00")
const [timerMinutes,setTimerMinutes]=useState("00")
const [timerSeconds,setTimerSeconds]=useState("00")

let interval =useRef()
const startTimer = () =>{
  const countdownDate=new Date("December 30,2020 00:00:00").getTime();
 
  interval=setInterval(()=>{
const now=new Date().getTime();
const distance =countdownDate - now;

const days=Math.floor(distance/(1000*60*60*24))
const hours=Math.floor((distance%(1000*60*60*24)/(1000*60*60)))

const minutes=Math.floor((distance%(1000*60*60*24)/(1000*60*60)))

const seconds=Math.floor((distance%(1000*60)/1000))
if (distance <0) {
//stop the timer
clearInterval(interval.current)
}else {
  //update
  setTimerDays(days);
  SetTimerHours(hours)
  setTimerMinutes(minutes)
  setTimerSeconds(seconds)
}
  },1000)
}

//componentDidMount
useEffect(()=>{
  startTimer()
  return ()=> {
    clearInterval(interval.current)
  }
})

  return (    
  <>
  <Navbar bg="light">
    <Navbar.Brand href="#home">Brand Link




    </Navbar.Brand>
  <p style={{marginLeft:"450px", alignContent:"center",justifyContent:"center"}}>Days:{timerDays} - Hours:{timerHours} - Minutes:{timerMinutes} - Seconds:{timerSeconds}</p>
    <Button>
    <MenuIcon/>
    Menu</Button>
  </Navbar>
  <br />
  </>
  )
}

export default Header
