import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = () => {
    const [countries,setCountries]= useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v2/all')
        .then(res =>res.json())
        .then(data => setCountries(data));
        // .then(data => console.log(data));
    },[])
    return (
        <div>
            <h1>Hello and welcome from countries: {countries.length}</h1>
            {
                countries.map(country => console.log(country))
            }
            <div className="countries-container">
            {
                countries.map(country=> <Country 
                key={country.capital}
                country={country}
                
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;