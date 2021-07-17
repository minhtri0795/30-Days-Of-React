import React, { Component } from "react";
import Button from './Button'


class Showtime extends Component {
    render(){
      const message = this.props.message
      return (
        <strong>{message}</strong>
      )
    }
  }
class UserInfo extends Component {

    render(){
        const {info:{name, title},handleTime,showTime,message,handleDarkMode, darkMode} = this.props
        return (
           <div className='infor-wrapper'>
            <h2>{name}</h2>
            <p>{title}</p>
            <Showtime message = {message}/>
            <Button text={showTime?'Watch day':'Hide'} onClick={handleTime}/>
            <Button text={darkMode?'Dark mode':'Turn Light'} onClick={handleDarkMode}/>
           </div>
        )
    }
}
export default UserInfo
