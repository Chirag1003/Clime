import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from "../API/Api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  // Function to asynchronously load options for the city based upon search
  // Returns an array of options, where each option has a 'value' in the format 'lat lon'
  // and a 'label' in the format 'city name, country code'
  const loadOptions = async (inputValue) => {
    try {
      const citiesList = await fetchCities(inputValue);
      return {
        options: citiesList.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={1000}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
