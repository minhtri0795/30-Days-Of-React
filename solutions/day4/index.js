import React from 'react';
import ReactDOM from 'react-dom';
import myImg from './images/frontend_technologies.png'
import myImg2 from './images/rendering_image.png'

const Image = ()=>{
  return (
    <div style={{width:'100%',}}>
    <h1>Exercises: Level 2</h1>
    <strong>1.Import and render the following images</strong>
    <img style = {{width:'100%'}} src = {myImg} alt=''/>
  </div>
  )
}

// hexa color generator
const hexaColor = ()=>{
  let str='123456abcdef';
  let color = ''
  for (let i=0;i<6;++i){
    let index = Math.floor(Math.random()*str.length)
    color+= str[index]
  }
  return ('#'+color)
}
const generatorColor =()=>{
  let arrColor = []
  for (let i=0;i<7;++i){
    arrColor.push(hexaColor())
  }
  return arrColor
}
const HexaColor = ()=>{
  const colorFormat = generatorColor().map(color =>{return  <div style={{background:color,margin:'2px 0', borderRadius:'5px'}}>{color}</div> })
  return (
    <div className='hexa-color'>
      {colorFormat}
    </div>  
  )
}
const UserCard = ()=>{
  const SkillFormat = ()=>{
    const mySkill = 'HTML,CSS,Sass,JS,React,Redux,Node,MongDB,Python,Flask,Django,Numpy,Pandas,Data Anylysis,MySQL,GraphQL,D3.js,Gatsby,Docker,Heroku,Git'
    const skillFormat = mySkill.split(',').map(skill=>{return <li>{skill}</li>})
    return (
      skillFormat
    )
  }
  return (
    <div className='user-card'>
    <div className='user-info'>
      <img src={myImg2} alt=''></img>
      <p className='name'>ASABENEH YETAYEH</p>
      <p className='role'>Senior Developer,Finland</p>
    </div>
    <div className='skill'>
      <p>SKILLS</p>
      <ul><SkillFormat/></ul>
    </div>
    <p className='date'>Joined on Aug 30, 2020</p>
    </div>
  )
}
const App = ()=>{
  return (
  <div className='app'>
    <Image/>
    <h1>Exercises: Level 3</h1>
    <HexaColor/>
    <UserCard/>
  </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));

