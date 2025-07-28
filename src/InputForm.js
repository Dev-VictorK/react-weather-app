import { useEffect, useState } from "react";

function InputForm(props) {
    const [geocode, setGeocode] = useState([]);

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
                    location.results[0].country])
            })
            .catch(console.error);
    }

    useEffect(() => {
        const [longitude, latitude, country] = geocode;
        if (geocode.length > 0) {
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=1&hourly=temperature_2m&temperature_unit=celsius`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    props.setTemperatures([
                        ...props.temperatures, 
                        {country: country, temperatures: [data.hourly.temperature_2m]}
                    ])
                })
                .catch(console.error);
        }
    }, [geocode])

    return (
        <form onSubmit={fetchCityLocation}>
            <input className="border border-black rounded-md m-4 p-2"
                placeholder="Enter city"
                name="city" />
            <button type="submit" className="border border-black bg-gray-600 text-white p-2 rounded-md">Add</button>
        </form>
    )
}
export default InputForm;