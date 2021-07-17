import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const nums = []
  for (let i=0;i<=31;++i){
  nums.push(i)
}
function isPrime (n){
  if (n === 2){
    return true;
  }

  if (n < 2 || n%2===0){
    return false;
  }       

for (let i = 3; i < n; i += 2){
    if (n % i === 0){
        return false;
    }   
}
return true;
}
const generalColorBlock = function (numberOfBlock){
  numberOfBlock++
  const colors=[]
  for(let i=0;i<=numberOfBlock;++i){
    colors.push(pickColor())
  }
  return colors
}

class CheckNum extends React.Component{
  render(){
    const listnum = this.props.nums.map(num=>{
      if(isPrime(num)){
        return <span style={{background:'#fd5e53'}} className='number-box' key={num}>{num}</span>
      }else if (num%2===0){
        return <span style={{background:'#21bf73'}} className='number-box' key={num}>{num}</span>
      }else {
        return <span style={{background:'#fddb3a'}} className='number-box' key={num}>{num}</span>
      }
  })
  return (listnum)
  }
}

class NumberBlock extends React.Component {
  render(){
    return (
      <div>
        <h1 className='title'>Number Generator</h1>
        <div className='box-wrapper'><CheckNum nums={this.props.nums}/></div>
      </div>
    )
  }
}

function pickColor (){
  const str='123456abcdef'
  let color = ''
  for(let i=0;i<6;++i){
    const index = Math.floor(Math.random()*str.length)
    color += str[index]
  }
  return ('#'+color)
}

class ColorBlock extends React.Component {
  render (){
    const colorBlock = this.props.colors.map(color=>{
      return (
        <span className='color-box' style={{background:color}} key={color}>{color}</span>
      )
    })
    return(
      <div>
        <h1 className='title'>Hexadecimal Color</h1>
         <div className='color-wrapper'>{colorBlock}</div>
      </div>
    )
  }
}
const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]
const worldPopulation = tenHighestPopulation[0].population;
const Render = ({countries:{country,population}})=>{
  return (
    <div className='population-item' key={country}>
      <p className='country'>{country.toUpperCase()}</p>
      <div style={{width:800}} className='column'><div style={{width:(population/worldPopulation)*800}} className='inner'></div></div>
      <span className='population'>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
    </div>
  )
}

class PopulationBlock extends React.Component {
  render () {
    const listCountry = this.props.countryData.map(countries=>{
      return (
        <Render countries={countries}/>
      )
    })
    return (
    <div className='population-block'>
      <h1 className='title'>World population</h1>
      <small>Ten most populated countries</small>
      <div className='population-wrapper'>{listCountry}</div>
    </div>)
  }
}
class App extends React.Component{
  
  render(){
    return(
      <div className='App'>
      <NumberBlock nums={nums}/>
      <ColorBlock colors={generalColorBlock(30)}/>
      <PopulationBlock countryData={tenHighestPopulation}/>
    </div>
    )
  }
}



ReactDOM.render(<App/>,document.getElementById('root'));

