import React from 'react';
import './Country.css';

const Country = (props) => {
    const{name,flag,capital,population,region} = props.country;
    console.log(props.country);

    return (
        <div className="country bg-info">
            <h4 className="text-secondary">This is :{name}</h4>
            <img src={flag} alt="" /> 
            <p><small>Region: {region}</small></p>
            <p>Capital is :{capital} Population: {population}
            </p>
        </div>
    );
};

export default Country;