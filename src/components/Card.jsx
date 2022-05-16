import React from 'react';

export const Card = ({ toto }) => {
  return (
    <li className='card'>
      <img src={toto.flags.svg} alt={'drapeau' + toto.name.common} />
      <div className='infos'>
        <h2>{toto.name.common}</h2>
        <h4>{toto.capital}</h4>
        <h4>Pop : {toto.population.toLocaleString()}</h4>
      </div>
    </li>
  );
};
