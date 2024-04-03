import "./History.css";
import { Pages } from "../App";
const API_KEY = "";
const History = ({ setSearchData, setCurrentPage }: any) => {
  const existingData = localStorage.getItem("citiesData");
  const cities = existingData ? JSON.parse(existingData) : [];

  const handleHistoryCityClick = (city: string) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchData(data);
        setCurrentPage(Pages.Home);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="cities">
        <div className="title">Previously searched cities: </div>
        {cities?.map((city: string) => (
          <ul key={city}>
            <div className="city" onClick={() => handleHistoryCityClick(city)}>
              {city}
            </div>
          </ul>
        ))}
      </div>
    </>
  );
};

export default History;
