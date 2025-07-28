import { useEffect, useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import WidgetPanel from './WidgetPanel';
{/**Weather App

Fetch weather from an API like OpenWeatherMap.

Display temperature, location, and icon. */}
function App() {
  const [temperatures, setTemperatures] = useState([]);

  useEffect(()=>{
    if(temperatures.length>0){
      console.log(temperatures);
    }
  },[temperatures])

  return (
    <div className="App m-4">
      Weather App
      <InputForm temperatures={temperatures} setTemperatures={setTemperatures}/>
      <WidgetPanel temperatures={temperatures}/>
    </div>
  );
}

export default App;
