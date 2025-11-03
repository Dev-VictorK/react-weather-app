import { useEffect, useState } from "react";
import { fetchWeatherApi } from 'openmeteo';

function InputForm(props) {
    const [geocode, setGeocode] = useState([]);
    const API_KEY = "ffGkmWQkRDMw4SQHS0miF4OXIiTMoukz";

    const fetchCityLocation = (e) => {
        e.preventDefault();
        let city = e.target.city.value;
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
            .then(response => response.json())
            .then(location => {
                console.log(location);
                setGeocode([
                    location.results[0].longitude,
                    location.results[0].latitude,
                    location.results[0].country_code,
                    location.results[0].name
                ])
            })
            .catch(console.error);
    }

    const fetchWeatherFunc = async () => {

        const [longi, lat, country_code, name] = geocode;
        const params = {
            "latitude": lat,
            "longitude": longi,
            "daily": ["temperature_2m_min", "temperature_2m_max"],
            "hourly": ["temperature_2m","precipitation", "wind_speed_10m", "uv_index", "relative_humidity_2m"],
            "timezone": "auto",
            "past_days": 3,
            "forecast_days": 4,
            "forecast_hours": 12,
            "past_hours": 12,
        };
        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);

        // Process first location. Add a for-loop for multiple locations or weather models
        const response = responses[0];

        // Attributes for timezone and location
        const latitude = response.latitude();
        const longitude = response.longitude();
        const elevation = response.elevation();
        const timezone = response.timezone();
        const timezoneAbbreviation = response.timezoneAbbreviation();
        const utcOffsetSeconds = response.utcOffsetSeconds();

        console.log(
            `\nCoordinates: ${latitude}°N ${longitude}°E`,
            `\nElevation: ${elevation}m asl`,
            `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
            `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
        );

        const hourly = response.hourly();
        const daily = response.daily();

        // Note: The order of weather variables in the URL query and the indices below need to match!
        const weatherData = {
            hourly: {
                time: Array.from(
                    { length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() },
                    (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
                ),
                precipitation: hourly.variables(0).valuesArray(),
                wind_speed_10m: hourly.variables(1).valuesArray(),
                uv_index: hourly.variables(2).valuesArray(),
                relative_humidity_2m: hourly.variables(3).valuesArray(),
            },
            daily: {
                time: Array.from(
                    { length: (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval() },
                    (_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
                ),
                temperature_2m_min: daily.variables(0).valuesArray(),
                temperature_2m_max: daily.variables(1).valuesArray(),
            },
        };

        // 'weatherData' now contains a simple structure with arrays with datetime and weather data
        console.log("\nHourly data", weatherData.hourly)
        console.log("\nDaily data", weatherData.daily)
        props.setWeather(weatherData);
    }

    useEffect(() => {

        if (geocode.length > 0) {
            fetchWeatherFunc();

        }
    }, [geocode])

    return (
        <form onSubmit={fetchCityLocation}
            className={`transform transition-transform duration-300 
        ${props.showSearch ? "opacity-100  -translate-x-1" : "opacity-0 translate-x-0"}`}>
            <input className="border border-black dark:bg-neutral-500 text-white rounded-full w-40 px-6 p-[5px]"
                placeholder="Enter city"
                name="city" />
        </form>
    )
}
export default InputForm;