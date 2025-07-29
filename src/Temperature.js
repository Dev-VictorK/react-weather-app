function Temperature(props){
    let temperatureScale = (function(temp) {
        if(Number(temp) < 10) {
            return "Cold";
        } else if(Number(temp) > 10 && Number(temp) <= 20) {
            return "Cool";
        } else if(Number(temp) > 20 && Number(temp) < 30) {
            return "Warm";
        } else {
            return "Hot";
        }
    })(props.temperature);

    return(
        <div className="flex-shrink-0  w-24 bg-red-700 m-1 p-3 snap-start">{props.time} {props.temperature} {temperatureScale}</div>
    )
}
export default Temperature;