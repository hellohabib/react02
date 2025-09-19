// const Countries = () =>{
//     return(

//     )
// }


import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesInfoPromise }) => {
    // --(04)-- যে ফাইলে থেকে কম্পোনেন্ট কে কল করার জন্য props এর মাধ্যমে প্যারামিটার পাঠানো হল তা মেইন component ফাইলের মধ্যে Destructuring করা হল প্যারামিটারের মধ্যে {} দিয়ে
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) =>{
        //console.log(country)
        
    }

    const countriesData = use(countriesInfoPromise);
    // --(05)-- প্রমিজ থেকে পাওয়া JSON এর থেকে মূল ডাটা নিলাম যা মূলত Object টাইপের ডাটা  
    const countries = countriesData.countries
    // --(06)-- মুল Object টাইপের ডাটা থেকে যে ইলিমেন্টের মধ্যে প্রয়োজনীয় ডাটা আছে তা নিলাম যা মূলত একটা এরে 
    //console.log(countries);
    return (
        <div>
            <h3>মোট দেশের সংখ্যাঃ {countries.length}</h3>
            <h2>ভিজিট করেছি এমন দেশের সংখ্যাঃ </h2>
            {/* --(07)-- এরের লেন্থ থেকে মোট দেশের সংখ্যা দেখালাম */}
            <div className='countries'>
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries = {handleVisitedCountries}
                        >

                        </Country>)
                }
                {/* --(08)-- লুপ করে এরের সকল ইলিমেন্ট কে Country নামের আর একটা Component এর মধ্যে পাঠালাম। এই নতুন Component টা components ফোল্ডারের মধ্যে Country নামের একটা ফোল্ডার তৈরী করে তার মধ্যে Countries.jsx ফাইলের মধ্যে লেখা হল */}
            </div>

        </div>
    );
};

export default Countries;