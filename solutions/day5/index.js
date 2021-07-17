import React from 'react';
import ReactDOM from 'react-dom';
import myImg from './images/frontend_technologies.png'
import userImg from './images/avatar.jpg'

const Image = (props)=>{
  return (
    <div style={{width:'100%',}}>
    <h1>Exercises: Level 2</h1>
    <strong>1.Import and render the following images</strong>
    <img style = {{width:'100%'}} src = {props.src} alt=''/>
  </div>
  )
}


const Subscribe = (props)=>{
  return (
    <div className='sub'>
    <h2 className='sub-title'>SUBSCRIBE</h2>
    <p>Sign up with your email address to receive news and update</p>
    <div>
    {props.inputs}
    </div>
    <button>Subscribe</button>
  </div>
  )
}
// hexa color generator
const hexaColor = ()=>{
  let str='123456abcdef';
  let color = ''
  for (let i=0;i<6;++i){
    let index = Math.floor(Math.random() * str.length)
    color+= str[index]
  }
  return ('#'+color)
}
const generatorColor =()=>{
  let arrColor = []
  for (let i=0;i<5;++i){
    arrColor.push(hexaColor())
  }
  return arrColor
}
const ColorFormat = ()=>{
  let colorFormat = generatorColor().map(color =>{return  <div style={{background:color,margin:'2px 0', borderRadius:'5px'}}>{color}</div> })
  return (
    colorFormat
  )
}
const HexaColor = ()=>{
  return (
    <div className='hexa-color'>
      <ColorFormat/>
    </div>  
  )
}
const UserCard = (props)=>{
  let data = props.userInfo
  const {name,role,avatar} = data
  return (
    <div className='user-card'>
    <div className='user-info'>
      <img src={avatar} alt=''></img>
      <p className='name'>{name}</p>
      <p className='role'>{role}</p>
    </div>
    <div className='skill'>
      <p>SKILLS</p>
      <ul>{props.skill}</ul>
    </div>
    <p className='date'>Joined on Aug 30, 2020</p>
    </div>
  )
}
const App = ()=>{
  const placeHolder = ['First name','Last name','Email'];
  const inputFormat = placeHolder.map(input=>{return <input placeHolder={input} type='text'/>})
  const SkillFormat = ()=>{
    const mySkill = 'HTML,CSS,Sass,JS,React,Redux,Node,MongDB,Python,Flask,Django,Numpy,Pandas,Data Anylysis,MySQL,GraphQL,D3.js,Gatsby,Docker,Heroku,Git'
    const listSkill = mySkill.split(',').map(skill=>{return <li>{skill}</li>})
    return (
      listSkill
    )
  }
  const userInfo = {
    name:'Le Minh Tri',
    role:'Front-end Developer',
    avatar: userImg,
  }
  return (
  <div className='app'>
    <Image src={myImg}/>
    <Subscribe inputs={inputFormat}/>
    <h1>Exercises: Level 3</h1>
    <HexaColor/>
    <UserCard skill={SkillFormat()}
              userInfo={userInfo}
    />
  </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));

