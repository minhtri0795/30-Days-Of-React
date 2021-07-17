import React, { Component } from 'react'
import Header from './components/header/Header';
import Main from './components/Main'
import Footer from './components/Footer';

class  App extends Component {
  state = {
    count :0,
    loggedIn: false,
    techs: ['HTML', 'CSS', 'JS'],
    message: '',
    showTime : true,
    darkMode :true,
  }
  
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[time.getMonth()]
    const year = time.getFullYear()
    const date = time.getDate()
    return `Today is: ${date} ${month}, ${year}`
  }
  handleTime = () => {
    let message 
    let showTime = this.state.showTime 
    message =  showTime ? this.showDate(new Date()): ''
    showTime = message?false:true
    this.setState({message,showTime})
  }
  handleDarkMode=()=>{
    let body = document.querySelector('body')
    let darkMode = this.state.darkMode
    darkMode?body.classList.add('dark-mode'):body.classList.remove('dark-mode')
    darkMode = darkMode?false:true
    this.setState({darkMode})
  }
  render (){
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
        author: {
          firstName: 'Le',
          lastName: 'Tri',
        },
      date: 'Oct 9, 2020',
    }
    const info ={
      name: 'Lê Minh Trí',
      title :'Hello world!, I\'m front-end developer.'
    }
    return (
      <>
      <Header data={data}/>
      <Main
          info = {info}
          handleTime = {this.handleTime}
          message = {this.state.message}
          showTime = {this.state.showTime}
          handleDarkMode={this.handleDarkMode}
          darkMode ={this.state.darkMode}
      />
        <Footer date = {new Date()}/>
      </>
    );
  }
}
export default App;
