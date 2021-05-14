import React from "react";
import PropTypes from "prop-types";

function CountryCard({ flag, name, population, region, capital, push }) {
  const handleClick = () => {
    push(`/detail/${name}`);
  };
  return (
    <div style={{ cursor: "pointer" }} onClick={() => handleClick()}>
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

CountryCard.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string.isRequired,
  population: PropTypes.any,
  region: PropTypes.string,
  capital: PropTypes.string,
  push: PropTypes.func.isRequired,
};

export default CountryCard;
