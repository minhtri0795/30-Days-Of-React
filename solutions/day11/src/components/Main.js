
import React, { Component } from 'react'


class Main extends Component {
    state = {
        x: '',
        y: '',
    }
    mouseEnter = ()=>{
        let x = Math.floor(Math.random() *100)
        let y = Math.floor(Math.random() *100)
        console.log(x,y)
        this.setState({x,y})
    }
    render(){
        const {x,y}= this.state
        return (
            <div className='main-wrapper'>
                <div onMouseEnter={this.mouseEnter} style={{top:x+'%',left:y+'%'}} className = 'box-wrapper'>Catch me {':))'}</div>
            </div>
        )
    }
}
export default Main