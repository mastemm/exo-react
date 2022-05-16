import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from './Card';

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState('');
  const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  // Le useEffect se joue qd le composant est monté
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(({ data }) => {
      setCountries(data);
    });
  }, []);

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
        {radios.map((continent) => {
          return (
            <li>
              <input
                type='radio'
                id={continent}
                name='continentRadio'
                onChange={(e) => {
                  setSelectedRadio(e.target.id);
                }}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          );
        })}
      </ul>
      <ul>
        {countries
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => {
            return <Card key={index} toto={country} />;
          })}
      </ul>
    </div>
  );
};
