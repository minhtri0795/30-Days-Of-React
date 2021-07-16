import React from 'react';
import ReactDOM from 'react-dom';
import myImg from './images/frontend_technologies.png'
import myImg2 from './images/rendering_image.png'

const image = (
  <div style={{width:'100%',}}>
    <h1>Exercises: Level 2</h1>
    <strong>1.Import and render the following images</strong>
    <img style = {{width:'100%'}} src = {myImg} alt=''/>
  </div>
)
const inputs = ['First name','Last name','Email'];
const inputFormat = inputs.map(input=>{return <input placeHolder={input} type='text'/>})
const subscribe = (
  <div className='sub'>
    <h2 className='sub-title'>SUBSCRIBE</h2>
    <p>Sign up with your email address to receive news and update</p>
    <div>
    {inputFormat}
    </div>
    <button>Subscribe</button>
  </div>
)
const skills = 'HTML,CSS,Sass,JS,React,Redux,Node,MongDB,Python,Flask,Django,Numpy,Pandas,Data Anylysis,MySQL,GraphQL,D3.js,Gatsby,Docker,Heroku,Git'
const skillFormat = skills.split(',').map(skill=>{return <li>{skill}</li> })
const userCard = (
  <div className='user-card'>
    <div className='user-info'>
      <img src={myImg2} alt=''></img>
      <p className='name'>ASABENEH YETAYEH</p>
      <p className='role'>Senior Developer,Finland</p>
    </div>
    <div className='skill'>
      <p>SKILLS</p>
      <ul>{skillFormat}</ul>
    </div>
    <p className='date'>Joined on Aug 30, 2020</p>
  </div>
)
const app = (
 <div className='app'>
   {image}
   {subscribe}
   <h1>Exercises: Level 3</h1>
   {userCard}
 </div>
)
  

ReactDOM.render(app,document.getElementById('root'));

