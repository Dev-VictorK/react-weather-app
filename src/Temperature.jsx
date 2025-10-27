import cold from './assets/images/cold.png';
import cool from './assets/images/cooling.png';
import warm from './assets/images/air.png';
import hot from './assets/images/hot-sale.png';

function Temperature(props) {
    let pic;
    let temperatureScale = (function (temp) {
        if (Number(temp) < 10) {
            pic = cold;
            return "Cold";
        } else if (Number(temp) > 10 && Number(temp) <= 20) {
            pic= cool;
            return "Cool";
        } else if (Number(temp) > 20 && Number(temp) < 30) {
            pic = warm;
            return "Warm";
        } else {
            pic= hot;
            return "Hot";
        }
    })(props.temperature);

    return (
        <div
            className="flex-shrink-0 flex flex-col w-24 bg-cardDark m-1 p-2 h-50 snap-start rounded-md">
            <div>{props.time}:00 HRS</div>
            <div>{props.temperature} °C</div>
            <div>{temperatureScale}</div>
            <img src={pic} alt="icon"/>
        </div>
    )
}
export default Temperature;