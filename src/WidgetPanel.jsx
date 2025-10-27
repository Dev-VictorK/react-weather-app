import Widget from "./Widget";

function WidgetPanel(props) {
    
    const widgets = props.temperatures.map((item, index) => {
        return <Widget key={index} temperature={item.temperatures}
            city={item.city} country={item.country_code} />
    });

    return (
        <div className="flex justify-center w-full p-2">
            <Widget/>
        </div>
    )
}
export default WidgetPanel;