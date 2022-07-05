import React, { useEffect, useState } from "react";
import Country from "./Country";

const Region = (props: any) => {
  const [countriesList, setCountriesList] = useState([]);
  const [region, setRegion] = useState("Africa");
  const [countryNames, setCountryNames] = useState([]);

  const countryChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCountriesList([]); //event?.target?.value
  };

  const regionChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(event?.target?.value);
  };

  const onRegionChange = async () => {
    try {
      const regionRequest = await fetch(
        "https://restcountries.com/v3.1/region/" + region
      );
      if (!regionRequest.ok) {
        throw new Error("Couldn't access data");
      }
      const all = await regionRequest.json();
      console.log(all);
      setCountryNames(all.map((country: any) => country.name.common));
      console.log(countryNames);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    onRegionChange();
  }, [region]);

  return (
    <>
      <label>Choose a region of the globe:</label>

      <select
        name="region"
        id="region"
        onChange={(e) => regionChangeHandler(e)}
      >
        <option key="africa" value="africa">
          Africa
        </option>
        <option key="americas" value="americas">
          Americas
        </option>
        <option key="asia" value="asia">
          Asia
        </option>
        <option key="europe" value="europe">
          Europe
        </option>
        <option key="oceania" value="oceania">
          Oceania
        </option>
      </select>
      <Country countries={countryNames}></Country>
    </>
  );
};

export default Region;
