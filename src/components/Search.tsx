import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const API_KEY = "";

const Search = ({ setSearchData, setErrorMessage }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (city: string) => {
    try {
      if (city === "") return;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setSearchData(data);

      const existingData = localStorage.getItem("citiesData");

      let cities = existingData ? JSON.parse(existingData) : [];
      const newCity = data?.name;
      const existingCityIndex = cities.indexOf(newCity);

      if (existingCityIndex !== -1) {
      } else {
        cities.push(newCity);
      }
      const updatedData = JSON.stringify(cities);
      localStorage.setItem("citiesData", updatedData);
    } catch (error) {
      console.error(error);
      setErrorMessage("City not found, please search for a valid city.");
    } finally {
      setSearchTerm("");
      setErrorMessage(null);
    }
  };

  return (
    <>
      <div className="search-input">
        <input
          id="cityInput"
          type="text"
          placeholder="Search a city..."
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(searchTerm);
          }}
        />
        <div className="search-button" onClick={() => handleSearch(searchTerm)}>
          <SearchIcon className="search-icon" />
        </div>
      </div>
    </>
  );
};

export default Search;
