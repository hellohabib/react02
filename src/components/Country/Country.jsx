import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    console.log(country.currencies.currencies)

    const [visited, setVisited] = useState(false);



    const handleVisited = () =>{
        //setVisited(true);
        //visited ? setVisited(false) : setVisited(true)
        //setVisited(visited ? false : true)
        setVisited(!visited)
        //চার ভাবে করা হল, যেকোনটাই কাজ করবে
    }
    return (
        <div className={`country ${visited && "country-visited" }`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital[0]}</p>
            <p>Area: {country.area.area},   {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>            
            <p>Continent: {country.continents.continents}</p>
            {/* <p>Currencies: {country.currencies.currencies}</p> */}
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;