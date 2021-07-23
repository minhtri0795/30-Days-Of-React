import React from 'react'
import './headerStyle.scss'
function HeaderCountry({length,result}) {

    return (
        <div className='header-country'>
            <h1>World Countries Data</h1>
            <p>Currently, we have {length} countries</p>
            {(result>=length||result===0)?(''):(<span className = 'filter-result'>Have {result} result matched</span>)}
        </div>
    )
}
export default HeaderCountry
