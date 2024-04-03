import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import WeatherDetails from "./components/WeatherDetails";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import Geo from "./components/Geo";
import Forecast from "./components/Forecast";
import Settings from "./components/Settings";
import History from "./components/History";

export enum Pages {
  Home,
  Geo,
  History,
  Settings,
}
function App() {
  const [searchData, setSearchData] = useState(null);
  const [currentPage, setCurrentPage] = useState(Pages.Home);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchedCities, setSearchedCities] = useState([]);

  // console.log(searchedCities);
  return (
    <>
      <div className="app">
        <div className="background">
          {currentPage === Pages.Home && !errorMessage ? (
            <>
              <Search
                setSearchData={setSearchData}
                setErrorMessage={setErrorMessage}
                searchedCities={searchedCities}
                setSearchedCities={setSearchedCities}
              />
              <WeatherDetails searchData={searchData} />
              <Forecast searchData={searchData} currentPage={currentPage} />
            </>
          ) : (
            <>{errorMessage}</>
          )}
          {currentPage === Pages.Geo && (
            <>
              <Search
                setSearchData={setSearchData}
                setErrorMessage={setErrorMessage}
                searchedCities={searchedCities}
                setSearchedCities={setSearchedCities}
              />
              <Geo setSearchData={setSearchData} />
              <WeatherDetails searchData={searchData} />
              <Forecast searchData={searchData} />
            </>
          )}
          {currentPage === Pages.History && (
            <>
              <History
                setSearchData={setSearchData}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}
          {currentPage === Pages.Settings && (
            <>
              <Settings />
            </>
          )}
          <div className="footer">
            <button
              className={`round-left button ${
                currentPage === Pages.Home ? "active" : ""
              }`}
              onClick={() => setCurrentPage(Pages.Home)}
            >
              <HomeIcon />
            </button>
            <button
              className={`button ${currentPage === Pages.Geo ? "active" : ""}`}
              onClick={() => setCurrentPage(Pages.Geo)}
            >
              <LocationOnIcon />
            </button>
            <button
              className={`button ${
                currentPage === Pages.History ? "active" : ""
              }`}
              onClick={() => setCurrentPage(Pages.History)}
            >
              <HistoryIcon />
            </button>
            <button
              className={`round-right button ${
                currentPage === Pages.Settings ? "active" : ""
              }`}
              onClick={() => setCurrentPage(Pages.Settings)}
            >
              <SettingsIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
