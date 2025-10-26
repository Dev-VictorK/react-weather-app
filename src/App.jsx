import { useEffect, useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import WidgetPanel from './WidgetPanel';
{/**Weather App

Fetch weather from an API like OpenWeatherMap.

Display temperature, location, and icon. */}
function App() {
  const [temperatures, setTemperatures] = useState([]);

  useEffect(() => {
    if (temperatures.length > 0) {
      console.log(temperatures);
    }
  }, [temperatures])

  return (
    <div className="App dark:bg-blackNight bg-lightDay h-screen">
      <div className='flex flex-row items-center gap-x-2 p-2'>
        <svg xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="currentColor"
          viewBox="0 0 100 100"
          className='w-[60px] h-[80px] dark:text-white text-black'>
          <g><path d="M 99.5,55.5 C 99.5,59.5 99.5,63.5 99.5,67.5C 97.3502,73.1478 93.3502,76.9812 87.5,79C 62.5,79.6667 37.5,79.6667 12.5,79C 6.31536,76.6469 1.98203,72.4802 -0.5,66.5C -0.5,62.1667 -0.5,57.8333 -0.5,53.5C 1.75319,48.0782 5.58652,44.0782 11,41.5C 14.5544,30.056 21.8878,26.3893 33,30.5C 43.6758,15.5984 57.1758,12.4318 73.5,21C 80.5105,26.8523 84.5105,34.3523 85.5,43.5C 91.8549,45.6568 96.5216,49.6568 99.5,55.5 Z" /></g>
        </svg>
        <h1 className='text-black dark:text-white text-[32px] font-rubik font-semibold'>Weather app</h1>
      </div>

      <InputForm temperatures={temperatures} setTemperatures={setTemperatures} />
      <WidgetPanel temperatures={temperatures} />
    </div>
  );
}

export default App;
