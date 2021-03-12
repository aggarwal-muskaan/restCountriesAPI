import React from "react";

function CountryCard({ flag, name, population, region, capital }) {
  return (
    <div>
      <div>
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div>
        <h4>{name}</h4>
        <p>
          <strong>Population: </strong>
          {population.toLocaleString()}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
