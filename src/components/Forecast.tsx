import "./Forecast.css";
import { useState, useEffect } from "react";
import { Pages } from "../App";

const API_KEY = "";

const Forecast = ({ searchData, currentPage }: any) => {
  const [forecastData, setForecastData] = useState<[] | null>(null);

  const fetchData = async () => {
    if (!searchData) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchData?.name}&units=metric&appid=${API_KEY}`
      );
      const res = await response.json();
      const array = res?.list?.slice(0, 100);
      const result = array.filter(
        (_: any, index: number) => (index + 1) % 8 === 0
      );

      setForecastData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchData]);

  const getDate = (dateString: string) => {
    const dateObject = new Date(dateString);

    const dayOfWeek = dateObject.toLocaleDateString("en-US", {
      weekday: "long",
    });
    return dayOfWeek;
  };
  debugger;
  return (
    <>
      <div
        className={`forecast ${
          currentPage === Pages.Home ? "forecast-home" : "forecast-geo"
        }`}
      >
        {forecastData?.map((day: any) => (
          <>
            <div className="forecast-day" key={day?.name}>
              <img
                alt="sub-weather"
                className="sub-weather-icon"
                src={`icons/${day?.weather[0]?.icon}.png`}
              />
              <div className="day">{getDate(day?.dt_txt)}</div>
              <div>Max: {Math.round(day?.main?.temp_max)} °C</div>
              <div>Min: {Math.round(day?.main?.temp_min)} °C</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Forecast;
