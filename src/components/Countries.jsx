import axios from 'axios';
import { useEffect, useState } from 'react';

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  // Le useEffect se joue qd le composant est monté
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(({ data }) => {
      setCountries(data);
    });
  }, []);
  return (
    <div className='countries'>
      <h1>COUNTRIES</h1>
    </div>
  );
};
