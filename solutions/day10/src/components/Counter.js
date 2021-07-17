import React, { Component } from 'react'
import Button from './Button'
class Counter extends Component {
    render(){
        let {count,add1,minus1} = this.props
        return(
            <>
            <h4>{count}</h4>
            <Button text='add1' onClick={add1}/>
            <button>{''}</button>
            <Button text='minus1' onClick={minus1}/>
            </>
        )
    }
}
export default Counter