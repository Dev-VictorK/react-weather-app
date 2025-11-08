import Widget from "./Widget";

function WidgetPanel(props) {
    
    console.log(props.weather);

    return (
        <div className="flex justify-center w-full">
            <Widget weather={props.weather} setGeocode={props.setGeocode} geocode={props.geocode}/>
        </div>
    )
}
export default WidgetPanel;