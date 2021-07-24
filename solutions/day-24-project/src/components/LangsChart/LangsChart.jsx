import './chartStyle.scss'
import React from "react";
function LangsChart({filterData}) {
 const convertFilterData = filterData.reduce((acc,currVal)=>{
    return acc.concat(currVal.languages)
 },[])
 const LangsObject = convertFilterData.reduce((acc,currVal)=>{
    !acc[currVal.name]? acc[currVal.name]=1:acc[currVal.name]+=1
    return acc
 },{})
 const topTenLangs = Object.entries(LangsObject)
 topTenLangs.length = 10
 const sortable = topTenLangs.sort((a,b) => b[1]-a[1])
                .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  const rowLength = '800'
  return <div className="popula-chart">
      <ul>
        {Object.entries(sortable).map(([langName, langNumber])=>{
          return (
            <li key={langName}className= 'popula-row'>
              <strong>{langName}: </strong>
              <div style={{width:`${rowLength}px`}} className="row">
                <div style={{width:`${langNumber*8}px`}}  className="row-inner"></div>
              </div>
              <span>{langNumber.toLocaleString('en-US')}</span>
            </li>
          )
        })}
      </ul>
  </div>;
}
export default LangsChart;
