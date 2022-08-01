export type Country = {
  name: string;
  currency: string;
};

export interface CountryState {
  countries: Country[];
}

const initialState: CountryState = {
  countries: [],
};

export type CountryAction =
  | { type: "ADD"; payload: Country }
  | { type: "REMOVE"; payload: Country };

const countryReducer = (
  state: CountryState = initialState,
  action: CountryAction
): CountryState => {
  if (action.type === "ADD") {
    state.countries.push(action.payload);
    return {
      countries: state.countries,
    };
  }

  if (action.type === "REMOVE") {
    return {
      countries: state.countries.filter(
        (country) => country.name !== action.payload.name
      ),
    };
  }
  return state;
};

export default countryReducer;
