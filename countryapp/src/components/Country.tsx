const Country = (props: any) => {
  const countriesNames = props.countries;
  let countriesSelects: any[] = [];
  countriesNames.forEach((country: string) => {
    let countrySelect = <option value={country}> {country}</option>;
    countriesSelects.push(countrySelect);
  });

  return (
    <>
      <label>Choose a country:</label>

      <select name="region" id="region">
        {countriesSelects}
      </select>
    </>
  );
};

export default Country;
