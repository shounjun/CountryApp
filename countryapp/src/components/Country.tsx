import { useState } from "react";
import CountryInformation from "./CountryInformation";
import "../App.css";

const Country = (props: any) => {
  const [countryName, setCountryName] = useState("");

  const countriesNames = props.countries;
  let countriesSelects: any[] = [];
  countriesNames.forEach((country: string) => {
    let countrySelect = (
      <button onClick={() => countryClickHandler(country)} key={country}>
        {country}
      </button>
    );
    countriesSelects.push(countrySelect);
  });

  const countryClickHandler = (country: string) => {
    console.log("Clicked on " + country);
  };

  const countryChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCountryName(event?.target?.value);
  };
  return (
    <>
      <div className="App-main-content">
        <label>Choose a country to add to the sidebar:</label>
        <div>{countriesSelects}</div>
        <CountryInformation name={countryName}></CountryInformation>
      </div>
    </>
  );
};

export default Country;
