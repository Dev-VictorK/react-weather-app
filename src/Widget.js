import Temperature from "./Temperature";
import { useRef, useState, useEffect } from 'react';

function Widget(props) {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(props.temperature);

    const temperatureArr = props.temperature[0].map((temp, index) => {
        return <Temperature key={index} time={index} temperature={temp} />
    });

    const slide = (direction) => {
        const slider = sliderRef.current;
        const totalSlides = slider.children.length;
        const newIndex = Math.max(0, Math.min(currentIndex + direction, totalSlides - 1));
        setCurrentIndex(newIndex);

        const offset = newIndex * slider.clientWidth;
        slider.style.transform = `translateX(-${offset}px)`;
    };

    // Recalculate position on resize
    useEffect(() => {
        const handleResize = () => {
            const slider = sliderRef.current;
            const offset = currentIndex * slider.clientWidth;
            slider.style.transform = `translateX(-${offset}px)`;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex]);

    return (
        <div className="border border-black rounded bg-blue-500 p-2 text-white">
            <div className="overflow-hidden relative w-full">
                <div ref={sliderRef} className="flex transition-transform duration-500 ease-in-out">
                    {temperatureArr}
                </div>
            </div>
            <div className="flex gap-4 mt-4">
                <button onClick={() => slide(-1)} className="px-4 py-2 bg-slate-800">Prev</button>
                <button onClick={() => slide(1)} className="px-4 py-2 bg-slate-800">Next</button>
            </div>
            <h3>Location: {props.city}, {props.country}</h3>
            <h3>Icon</h3>
        </div>
    )
}
export default Widget;