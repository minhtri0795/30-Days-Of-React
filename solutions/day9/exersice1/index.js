import React, { Component } from "react";
import { Fragment } from 'react'
import ReactDOM from "react-dom";


const Button = ({text, onClick})=>{
  return (
    <button onClick={onClick}>{text}</button>
  )
}
const Message = ({message})=>{
  return (
    <>
    <h1>{message}</h1>
    </>
  )
}
class Main extends Component{
  render (){
    let {Spring, Summer, Autumn, Winter, colorSeason,message} = this.props
    return (
      <div className='main-wrapper' style={{background: colorSeason,height:'300px'}}>
        <h2>Click to change color!</h2>
        <Button text='Spring' onClick = {Spring}/>
        <Button text='Summer' onClick = {Summer}/>
        <Button text='Autumn' onClick = {Autumn}/>
        <Button text='Winter' onClick = {Winter}/>
        <Message message = {message}/>
      </div>
      
    )
  }
}
class FecthData extends Component{
  
  render(){
    let {message,handleFecth}= this.props
    return (
      <div>
        <h2>{message}</h2>
        <Button text='Fecth data' onClick = {handleFecth}/>
      </div>
    )
  }
}
class App extends Component {
  state = {
    colorSeason :'#fff',
    message:'',
    loadMess:'Get data'
  }
  Spring = ()=>{ 
    let colorSeason = '#7aff6e'
    let message='Spring season'
    this.setState({colorSeason,message})
    console.log(this.state.colorHour)
  }
  Summer = ()=>{ 
    let colorSeason = '#fc8b56'
    let message='Summer season'
    this.setState({colorSeason,message})
  }
  Autumn = ()=>{ 
    let colorSeason = '#f4fc56'
    let message='Autumn season'
    this.setState({colorSeason,message})
  }
  Winter = ()=>{ 
    let colorSeason = '#5eefff'
    let message='Winter season'
    this.setState({colorSeason,message})
  }
  handleFecth = () => {
    let loadMess = 'Loading data...'
    this.setState({loadMess})
    setTimeout(()=>{
      let loadMess = 'Data load done!'
      this.setState({loadMess})
    },3000)
  }
  render (){
    let time = new Date().getHours()
    let minute = new Date().getMinutes()
    const setColor = (time)=>{
      let backGround
      if(time>6&&time<12){
        backGround = '#7aff6e'
      }else if (time>12&&time<18){
        backGround = '#fc8b56'
      }else if (time>18&&time<24){
        backGround = '#f4fc56'
      }else {
        backGround = '#5eefff'
      }
      return backGround
    }
    return (
      <div className='App'>
        <Main 
          Spring = {this.Spring}
          Summer = {this.Summer}
          Autumn = {this.Autumn}
          Winter = {this.Winter}
          colorSeason = {this.state.colorSeason}
          message = {this.state.message}
        />
        {<div style={{background:setColor(time),height:'300px'}}><h1>THIS BACKGROUND COLOR AUTO CHANGE BASE HOURSE OF DAY</h1>Current time {time}:{minute}</div>}
        <FecthData 
          message = {this.state.loadMess}
          handleFecth = {this.handleFecth}/>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
