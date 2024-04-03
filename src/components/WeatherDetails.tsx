import "./WeatherDetails.css";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";

const WeatherDetails = ({ searchData }: any) => {
  return (
    <>
      {searchData ? (
        <div className="weather-details">
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${searchData?.weather[0]?.icon}.png`}
          />
          <h1 className="city-name">{searchData?.name}</h1>
          <h2 className="temperature">
            Current temperature: {searchData?.main?.temp.toFixed(0)} °C
          </h2>
          {/* <h3 className="weather-min-max">
            Min: {Math.round(searchData?.main?.temp_min)}
          </h3>
          <h3 className="weather-min-max">
            Max: {Math.round(searchData?.main?.temp_max)}
          </h3> */}
          <div className="weather-sub-details">
            <div className="detail">
              <WaterDropIcon className="weather-icon-details" />
              <div>Humidity </div>
              <div> {searchData?.main?.humidity}%</div>
            </div>
            <div className="detail">
              <AirIcon className="weather-icon-details" />
              <div>Wind Speed </div>
              <div> {searchData?.wind?.speed.toFixed(0)} km/h</div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className={`enter-city ${!searchData && "extra-margin"}`}>
          Please enter a city
        </h2>
      )}
    </>
  );
};

export default WeatherDetails;
