import React from "react";
import './chartStyle.scss'
function PopulaChart({worldData,filterData}) {
  const totalPopulation = worldData.reduce((acc,currenVal)=>{
    return acc+currenVal.population
  },0)
  const filterDataSort = filterData.sort((a,b)=>{
    return b.population - a.population
  })
  const chartDataRender = []
  for (let i=0;i<10;++i){
    if(filterDataSort[i]){
      chartDataRender.push(filterDataSort[i])
    }
  }
  const rowLength = '800'
  return <div className="popula-chart">
      <ul>
        <li key='world' className= 'popula-row'>
          <strong>World:</strong> 
          <div style={{width:`${rowLength}px`}} className="row">
            <div style={{width:`${rowLength}px`}} className="row-inner"></div>
          </div>
          <span>{totalPopulation.toLocaleString('en-US')}</span>
        </li>
        {chartDataRender.map(country=>{
          return (
            <li key={country.name}className= 'popula-row'>
              <strong>{country.name}: </strong>
              <div style={{width:`${rowLength}px`}} className="row">
                <div style={{width:`${country.population>50000000?(country.population/totalPopulation*rowLength):3}px`}}  className="row-inner"></div>
              </div>
              <span>{country.population.toLocaleString('en-US')}</span>
            </li>
          )
        })}
      </ul>
  </div>;
}
export default PopulaChart;
