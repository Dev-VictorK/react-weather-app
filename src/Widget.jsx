import Temperature from "./Temperature";

function Widget(props) {

    const temperatureArr = props.temperature[0].map((temp, index) => {
        return <Temperature key={index} time={index} temperature={temp} />
    });

    return (
        <div className="rounded bg-blue-500 p-2 text-white">
            <div className="overflow-x-auto">
                <div className="flex space-x-4 snap-x snap-mandatory scroll-smooth">
                    {temperatureArr}
                </div>
            </div>
            <h3>Location: {props.city}, {props.country}</h3>
        </div>
    )
}
export default Widget;