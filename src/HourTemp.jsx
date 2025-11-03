import { useState } from "react";

export default function HourTemp({ time }) {
    const [isActive, setIsActive] = useState(time === currentTime());

    function currentTime() {
        const date = new Date();

        let hours = date.getHours();
        const suffix = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // convert 0 → 12, 13 → 1, etc.

        const timeNow = `${hours} ${suffix}`;
        return timeNow;
    }
    return (
        <>
            <div className="flex flex-col snap-center items-center" id={isActive ? "active" : ""}>
                <p className={`font-poppins font-light text-[12px] ${isActive ? "text-blue-500" : "dark:text-white text-ftGray"}`}> {time || "12 PM"}</p>
                <p className={`font-poppins font-medium text-[14px] ${isActive ? "text-blue-500" : "dark:text-white text-black"}`}>21°/24°</p>
                <p className={`font-poppins font-light text-[12px] ${isActive ? "text-blue-500" : "dark:text-white text-black"}`}>Celsius</p>
            </div >
        </>
    )
}