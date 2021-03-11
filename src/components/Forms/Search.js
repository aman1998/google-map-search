import React, { useContext } from "react";
import PlacesAutocomplete, {geocodeByAddress} from "react-places-autocomplete";
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import ThemeContext from '../../store/context';

import styled from 'styled-components';

const SearchForm = () => {
  const { address, setAddress, setInfo } = useContext(ThemeContext)

  const handleSelect = async value => {
    const search = await geocodeByAddress(value);
    await setInfo(search[0].address_components)
    setAddress(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              label="Place"
              variant="outlined"
              InputProps={{
                ...getInputProps({ placeholder: "Type address", className: 'location-search-input' }),
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  </>
                ),
              }}
            />

            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <DropDown {...getSuggestionItemProps(suggestion, { style })} className="input-suggestion" key={suggestion.placeId}>
                    {suggestion.description} 
                  </DropDown>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

const DropDown = styled.div`
  position: absolute;
  z-index: 100;
  font-family: 'Lato', sans-serif;
  max-width: 500px;
  width: 100%;
  height: 60px;
  background-color: rgb(95, 87, 87);
  border-bottom: 1px black dotted;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: black;
`

export default SearchForm