import React, { useContext } from "react";
import PropTypes from "prop-types";
import { allCountriesData } from "../contexts/state.context";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function CountryDetails({ match, history }) {
  const allCountries = useContext(allCountriesData);

  const countryFound = allCountries.find(
    (s) => s.name.toLowerCase() === match.params.id.toLowerCase()
  );

  const displayNameFromCode = (borderCode) => {
    const borderCountry = allCountries.find(
      (coun) => coun.alpha3Code === borderCode
    );
    return (
      <button onClick={() => history.push(`/detail/${borderCountry.name}`)}>
        {borderCountry.name}
      </button>
    );
  };

  const print = countryFound ? (
    <div>
      <img src={countryFound.flag} alt={`flag of ${countryFound.name}`} />
      <div>
        <h2>{countryFound.name}</h2>
        <div>
          <p>
            <strong>Native Name: </strong>
            {countryFound.nativeName}
          </p>
          <p>
            <strong>Population: </strong>
            {countryFound.population.toLocaleString()}
          </p>
          <p>
            <strong>Region: </strong>
            {countryFound.region}
          </p>
          <p>
            <strong>Sub Region: </strong>
            {countryFound.subregion}
          </p>
          <p>
            <strong>Capital: </strong>
            {countryFound.capital}
          </p>
        </div>
      </div>
      <div>
        <p>
          <strong>Top Level Domain: </strong>
          {countryFound.topLevelDomain.join(", ")}
        </p>
        <p>
          <strong>Currencies: </strong>
          {countryFound.currencies.map((c) => c.name).join(", ")}
        </p>
        <p>
          <strong>Language: </strong>
          {countryFound.languages.map((l) => l.name).join(", ")}
        </p>
      </div>
      {countryFound?.borders.length !== 0 && (
        <div>
          <strong>Border Countries:</strong>
          <div> {countryFound.borders.map((b) => displayNameFromCode(b))}</div>
        </div>
      )}
    </div>
  ) : (
    <div>Country doesn't exist.</div>
  );

  // return countryFound ? showDetails : notFound;
  return (
    <>
      <div>
        <button onClick={() => history.push("/")}>
          <ArrowBackIcon fontSize="small" />
          Back
        </button>
      </div>
      {print}
    </>
  );
}

CountryDetails.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default CountryDetails;
