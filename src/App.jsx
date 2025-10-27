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
  const [temperatures, setTemperatures] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (temperatures.length > 0) {
      console.log(temperatures);
    }
  }, [temperatures])

  return (
    <div className="App dark:bg-blackNight bg-lightDay h-screen">
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
            <InputForm showSearch={showSearch} temperatures={temperatures} setTemperatures={setTemperatures} />
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


      <WidgetPanel temperatures={temperatures} />
    </div>
  );
}

export default App;
