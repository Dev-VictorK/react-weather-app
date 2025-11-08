import { useEffect, useState } from 'react';
import { FaSearch, FaTimes } from "react-icons/fa";
import './App.css';
import InputForm from './InputForm';
import WidgetPanel from './WidgetPanel';
import SunIcon from './sunIcon';
import CloudIcon from './cloudIcon';
import NightIcon from './nightIcon';
import ToggleSwitch from './ToggleSwitch';
{/**Weather App

Fetch weather from an API like OpenWeatherMap.

Display temperature, location, and icon. */}
function App() {
  const [weather, setWeather] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [geocode, setGeocode] = useState([]);

  useEffect(() => {
    if (weather.length > 0) {
      console.log(weather);
    }
  }, [weather])

  return (
    <div className="App dark:bg-blackNight bg-lightDay min-h-screen pb-8">
      <div className='flex flex-row items-center justify-between px-2'>
        <div className='flex items-center gap-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            fill="currentColor"
            viewBox="0 0 100 100"
            className='w-[60px] h-[80px] dark:text-white text-black'>
            <CloudIcon />
          </svg>
          <h1 className='text-black dark:text-white text-[32px] font-rubik font-semibold'>Weather app</h1>
        </div>

        <div className='flex items-center gap-x-2'>
          <div className='flex flex-row gap-x-1'>
            <InputForm showSearch={showSearch} geocode={geocode} setGeocode={setGeocode} weather={weather} setWeather={setWeather} />
            <button
              onClick={() => setShowSearch(!showSearch)}>
              <FaSearch className={`text-black dark:text-white  text-[15px] ${showSearch ? "hidden" : "block"}`} />
              <FaTimes className={`text-black dark:text-white  text-[15px] ${showSearch ? "block" : "hidden"}`} />
            </button>
          </div>
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="30px" height="30px"
            className='w-[30px] h-[30px] dark:text-white text-black'>
            <SunIcon />
          </svg>
          <ToggleSwitch />
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
            fill="currentColor"
            viewBox="0 0 100 100"
            className='w-[30px] h-[30px] dark:text-white text-black'>
            <NightIcon />
          </svg>
        </div>
      </div>
      <WidgetPanel weather={weather} setGeocode={setGeocode} geocode={geocode}/>
    </div>
  );
}

export default App;
