import React, { useState } from 'react'
import './filterStyle.scss'
function FilterCountry(props) {
    const {onFilterForm} = props
    const filterForm = (e)=>{
        onFilterForm (e.target.value)
    }
    return (
        <div className = 'filter-wrapper'>
            <input placeholder="Search country by name or city" onChange={filterForm} type="text" />
        </div>
    )
}

export default FilterCountry
