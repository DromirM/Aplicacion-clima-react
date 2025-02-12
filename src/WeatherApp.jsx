import { useState, useRef } from "react";
import { useFetch } from './hooks/useFetch';
import { WeatherDetails } from "./components/WeatherDetails";

export const WeatherApp = () => {
  
  //Acceso a las variables de entorno en Vite.
  const api_key = import.meta.env.VITE_API_KEY;
  const urlBase = import.meta.env.VITE_BASE_URL;

  const [city, setCity] = useState('');
  const [url, setUrl] = useState('');
  const {data, isLoading, error} = useFetch(url);
  const focusRef = useRef();

  const handleCityChange = (e) =>{
    //Funcion que permite actualizar la variable de estado del input.
    setCity(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(city.trim() !== ''){
      setUrl(`${urlBase}?q=${city}&appid=${api_key}`);
      setCity('');
    }
    
    focusRef.current.focus();
  };

  return (
    <>
      <div className='container'>
        <h1>Aplicacion de Clima</h1>

        <form onSubmit={handleOnSubmit}>
          <input 
            type='text'
            value={city}
            onChange={handleCityChange}
            placeholder='Ingrese el nombre de una ciudad o pais'
            ref={focusRef}
          />          
          <button type='submit'>Buscar</button>
        </form>

        {isLoading && <p>Cargando...</p>}
        {error && <p>Se ha producido un error al obtener los datos.</p>}
        {!isLoading && !error && data && <WeatherDetails weatherData={data} />}
      </div>
    </>
  )
}
