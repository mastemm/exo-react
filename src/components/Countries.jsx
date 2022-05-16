import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from './Card';

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  // Le useEffect se joue qd le composant est monté
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(({ data }) => {
      setCountries(data);
    });
  }, []);
  // const handleChange = (event) => {target.value};
  return (
    <div className='countries'>
      <ul className='radio-container'>
        <input
          type='range'
          min='1'
          max='250'
          defaultValue={rangeValue}
          onChange={(event) => {
            setRangeValue(event.target.value);
          }}
        />
      </ul>
      <ul>
        {countries.slice(0, rangeValue).map((country, index) => {
          return <Card key={index} toto={country} />;
        })}
      </ul>
    </div>
  );
};
