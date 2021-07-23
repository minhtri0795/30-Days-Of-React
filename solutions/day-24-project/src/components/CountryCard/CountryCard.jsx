import React from 'react'
import './countryStyle.scss'
function CountryCard(props) {
    const {flag,name,capital, languages,population}= props.country
    const languageName = languages[0].name
    return (
        <div className='country-card'>
            <img src={flag} alt="country-img" />
            <p className="name">{name}</p>
            <div className="country-property">
                <div className="capital">
                    <strong>Capital: </strong>
                    <p>{capital}</p>
                </div>
                <div className="lang">
                    <strong>Language:</strong>
                    <p>{languageName}</p>
                </div>
                <div className="population">
                    <strong>Population: </strong>
                    <p>{population}</p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard
