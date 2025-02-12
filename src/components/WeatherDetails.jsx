import { convertTemp } from "../utils/convertTemperature";
import { getStatusResult } from '../utils/checkApiStatus';

export const WeatherDetails = ({weatherData}) => {
  if (!weatherData) return null; //Si no se encontraron datos, no se despliega nada.
  
  const objResult = getStatusResult(weatherData?.cod);
  if (!objResult.status) return (<p>{objResult.message}</p>);

  return (
    <>
      <div className="weatherDetails">
        <h1>{weatherData.name}</h1>
        <h2>Pais: {weatherData?.sys?.country}</h2>
        <p>Temperatura: {convertTemp(weatherData?.main?.temp, 'K', 'C')}°C</p>
        <p>Humedad: {weatherData?.main?.humidity}</p>
        <p>Condición meteorológica: {weatherData?.weather[0].description}</p>
        <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} />
      </div>
    </>
  )
}
