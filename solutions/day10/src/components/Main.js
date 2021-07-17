import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserCard from "./UserCard";
import UserInfo from "./UserInfo";

class Main extends Component {
    render() {
      const{ info,handleTime,message ,showTime,handleDarkMode,darkMode}= this.props
      return (
        <main>
          <div className='main-wrapper'>
            <UserCard/>
            <UserInfo info = {info} handleTime ={handleTime} showTime={showTime} message={message} handleDarkMode={handleDarkMode}  darkMode={darkMode}/>
          </div>
        </main>
      )
    }
  }
export default Main