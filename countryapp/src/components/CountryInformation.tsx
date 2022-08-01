import { useState } from "react";
/*
class TCountry {
  name: string = "";
  capital: string = "";
  currencies: string = "";
  languages: string = "";
}
*/
const CountryInformation = (props: any) => {
  const information: any = useState("");
  /*useSelector((state: any) => state.countryInformation);*/
  const [countryInformation, setCountryInformation]: any = useState({});

  const informationSideBarHandler = () => {};
  /*
  const onCountryChange = async () => {
    if (props.name === "") return;
    try {
      const countryRequest = await fetch(
        `https://restcountries.com/v2/name/${props.name}`
      );
      if (!countryRequest.ok) {
        throw new Error("Couldn't access country data");
      }
      const countryObj = (await countryRequest.json())[0];
      console.log(countryObj);
      const selectedCountry = new TCountry();
      selectedCountry.capital = countryObj.capital;
      selectedCountry.currencies = countryObj.currencies[0].name;
      selectedCountry.languages = countryObj.languages[0].name;
      selectedCountry.name = props.name;

      setCountryInformation(selectedCountry);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    onCountryChange();
  }, [props.name]);
  
  return (
    <>
      <div> Information about {props.name}:</div>
      <div> Formal name : {countryInformation?.name}</div>
      <div> Capital : {countryInformation?.capital}</div>
      <div> Currency : {countryInformation?.currencies}</div>
      <div> Languages : {countryInformation?.languages}</div>
    </>
  );
  */
  return (
    <>
      <div>{information}</div>
      <button onClick={informationSideBarHandler}></button>
    </>
  );
};

export default CountryInformation;
