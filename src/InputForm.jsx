import { useEffect, useState } from "react";

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

    useEffect(() => {
        const [longitude, latitude, country_code, name] = geocode;
        if (geocode.length > 0) {
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=1&hourly=apparent_temperature&temperature_unit=celsius`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    props.setTemperatures([
                        ...props.temperatures, 
                        {
                            city: name,
                            country_code: country_code, 
                            temperatures: [data.hourly.apparent_temperature]}
                    ])
                })
                .catch(console.error);
        }
    }, [geocode])

    return (
        <form onSubmit={fetchCityLocation} 
        className={`transform transition-transform duration-300 
        ${props.showSearch ? "opacity-100  -translate-x-1":"opacity-0 translate-x-0"}`}>
            <input className="border border-black dark:bg-neutral-500 text-white rounded-full w-40 p-[5px]"
                placeholder="Enter city"
                name="city" />
        </form>
    )
}
export default InputForm;