import { useState } from "react";
import CountryInformation from "./CountryInformation";

const Country = (props: any) => {
  const [countryName, setCountryName] = useState("");

  const countriesNames = props.countries;
  let countriesSelects: any[] = [];
  countriesNames.forEach((country: string) => {
    let countrySelect = (
      <option key={country} value={country}>
        {country}
      </option>
    );
    countriesSelects.push(countrySelect);
  });

  const countryChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCountryName(event?.target?.value);
  };
  return (
    <>
      <div>
        <label>Choose a country:</label>

        <select
          onChange={(e) => countryChangeHandler(e)}
          name="region"
          id="region"
        >
          {countriesSelects}
        </select>
        <CountryInformation name={countryName}></CountryInformation>
      </div>
    </>
  );
};

export default Country;
