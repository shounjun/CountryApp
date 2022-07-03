import React from "react";
import Country from "./Country";

const Region = () => {
  const getAllCountries = async (region: string) => {
    try {
      const allReq = await fetch(
        "https://restcountries.com/v3.1/region/" + region
      );
      if (!allReq.ok) {
        throw new Error("Couldn't access data");
      }
      const all = await allReq.json();
      console.log(all);
    } catch (error) {
      console.log("Error");
    }
  };

  getAllCountries("Europe");

  return (
    <React.Fragment>
      <label>Choose a region of the globe:</label>

      <select name="region" id="region">
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <Country countries={["Portugal", "Brasil"]}></Country>
    </React.Fragment>
  );
};

export default Region;
