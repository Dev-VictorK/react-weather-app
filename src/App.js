import './App.css';
import InputForm from './InputForm';
import WidgetPanel from './WidgetPanel';
{/**Weather App

Fetch weather from an API like OpenWeatherMap.

Display temperature, location, and icon. */}
function App() {
  return (
    <div className="App m-4">
      Weather App
      <InputForm/>
      <WidgetPanel/>
    </div>
  );
}

export default App;
