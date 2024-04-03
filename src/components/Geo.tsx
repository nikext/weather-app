import "./Geo.css";

const API_KEY = "";

const Geo = ({ setSearchData }: any) => {
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  };

  const success = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchData(data);
      })
      .catch((error) => console.log(error));
  };

  function error() {
    console.log("Unable to retrieve your location");
  }
  return (
    <div className="geo">
      <label className="label">Or use your current location:</label>
      <button onClick={handleLocationClick} className="location-button">
        Get my location
      </button>
    </div>
  );
};

export default Geo;
