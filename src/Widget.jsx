import CloudIcon from "./cloudIcon";
import NightIcon from "./nightIcon";
import SunIcon from "./sunIcon";
import Temperature from "./Temperature";

function Widget(props) {

    return (
        <div className="rounded-md shadow-md bg-white dark:bg-cardDark p-4 h-[500px] w-[400px] text-white">
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="text-black dark:text-paleWhite text-lg font-poppins font-medium">Nairobi, KE</h1>
                </div>
                <div className="flex flex-row gap-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        className={`dark:text-white text-black w-[20px] h-[30px]`}>
                        <path d="M 42.5,7.5 C 67.6626,6.15357 83.8293,17.4869 91,41.5C 93.4646,59.7311 87.2979,74.2311 72.5,85C 49.5303,96.6736 30.0303,92.5069 14,72.5C 9.00543,64.8561 7.00543,56.5228 8,47.5C 10,44.8333 12,44.8333 14,47.5C 16.3014,72.2167 29.8014,84.3834 54.5,84C 70.9871,80.8463 80.8204,71.0129 84,54.5C 84.8164,33.3233 74.9831,20.1566 54.5,15C 41.4224,13.686 30.7558,18.0194 22.5,28C 25.2263,28.1816 27.8929,28.6816 30.5,29.5C 31.9535,31.6439 31.6201,33.4773 29.5,35C 23.5,35.6667 17.5,35.6667 11.5,35C 11,34.5 10.5,34 10,33.5C 9.33333,27.5 9.33333,21.5 10,15.5C 11.5227,13.3799 13.3561,13.0465 15.5,14.5C 16.3184,17.1071 16.8184,19.7737 17,22.5C 23.968,14.6579 32.468,9.65786 42.5,7.5 Z" />
                        <path d="M 45.5,26.5 C 48.0792,26.0833 50.2458,26.75 52,28.5C 52.4997,36.1594 52.6664,43.8261 52.5,51.5C 57.7616,51.1953 62.9283,51.5286 68,52.5C 68.8632,54.7489 68.3632,56.5822 66.5,58C 59.5857,58.8112 52.7524,58.6445 46,57.5C 44.1692,47.2196 44.0025,36.8862 45.5,26.5 Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className={`dark:text-white text-black w-[20px] h-[30px]`}>
                        <path d="M 16 3 C 14.825282 3 13.651659 3.2109918 12.53125 3.6328125 A 1.0001 1.0001 0 0 0 12.013672 4.0761719 C 11.504591 4.9739148 11.103104 5.9105467 10.716797 6.8515625 C 9.7098046 6.7129928 8.6975684 6.5922723 7.6640625 6.5839844 A 1.0001 1.0001 0 0 0 6.7753906 7.1113281 C 5.1830476 8.516302 4.1080765 10.386931 3.6875 12.460938 A 1.0001 1.0001 0 0 0 3.6777344 13.496094 C 4.2031636 14.38368 4.8157805 15.19768 5.4394531 16 C 4.8159652 16.802575 4.2030783 17.617285 3.6777344 18.503906 A 1.0001 1.0001 0 0 0 3.6875 19.535156 C 4.1078295 21.611992 5.1823036 23.486488 6.7773438 24.892578 A 1.0001 1.0001 0 0 0 6.7792969 24.896484 A 1.0001 1.0001 0 0 0 7.6640625 25.416016 C 8.6975684 25.407716 9.7098046 25.287007 10.716797 25.148438 C 11.103104 26.089453 11.504591 27.026085 12.013672 27.923828 A 1.0001 1.0001 0 0 0 12.53125 28.367188 C 14.772068 29.210829 17.229885 29.210829 19.470703 28.367188 A 1.0001 1.0001 0 0 0 19.988281 27.923828 C 20.497334 27.026134 20.89691 26.0894 21.283203 25.148438 C 22.290814 25.287181 23.303729 25.407722 24.337891 25.416016 A 1.0001 1.0001 0 0 0 25.224609 24.888672 C 26.819004 23.481888 27.896996 21.6084 28.316406 19.53125 A 1.0001 1.0001 0 0 0 28.322266 18.503906 C 27.796799 17.616326 27.18422 16.80232 26.560547 16 C 27.184759 15.197317 27.797028 14.383365 28.322266 13.496094 A 1.0001 1.0001 0 0 0 28.3125 12.460938 C 27.892024 10.388068 26.817613 8.5179342 25.226562 7.1132812 A 1.0001 1.0001 0 0 0 24.337891 6.5839844 C 23.303729 6.5922776 22.290814 6.7128182 21.283203 6.8515625 C 20.89691 5.9106004 20.497334 4.9738658 19.988281 4.0761719 A 1.0001 1.0001 0 0 0 19.470703 3.6328125 C 18.350294 3.2109918 17.174718 3 16 3 z M 16 5 C 16.819881 5 17.632344 5.1820236 18.425781 5.4414062 C 18.924612 6.3601854 19.381477 7.2913254 19.740234 8.2539062 A 1.0001 1.0001 0 0 0 20.847656 8.890625 C 21.846266 8.7168085 22.881939 8.6469176 23.927734 8.6191406 C 25.17405 9.7252754 26.018177 11.195288 26.355469 12.828125 C 25.806856 13.716861 25.227335 14.576472 24.574219 15.359375 A 1.0001 1.0001 0 0 0 24.574219 16.640625 C 25.226939 17.424057 25.806816 18.283348 26.355469 19.171875 C 26.018177 20.804712 25.17405 22.274725 23.927734 23.380859 C 22.881939 23.353079 21.846266 23.283189 20.847656 23.109375 A 1.0001 1.0001 0 0 0 19.740234 23.746094 C 19.381477 24.708675 18.924612 25.639815 18.425781 26.558594 C 16.838906 27.077359 15.161094 27.077359 13.574219 26.558594 C 13.075409 25.639842 12.620465 24.708644 12.261719 23.746094 A 1.0001 1.0001 0 0 0 11.152344 23.109375 C 10.153811 23.283178 9.1199307 23.353074 8.0742188 23.380859 C 6.8278841 22.274707 5.9818124 20.804742 5.6445312 19.171875 C 6.1933083 18.283772 6.7747468 17.425216 7.4277344 16.640625 A 1.0001 1.0001 0 0 0 7.4277344 15.359375 C 6.7746768 14.575538 6.195366 13.715209 5.6464844 12.826172 C 5.9841156 11.194277 6.8285134 9.7247341 8.0742188 8.6191406 C 9.1199307 8.6469266 10.153811 8.7168216 11.152344 8.890625 A 1.0001 1.0001 0 0 0 12.261719 8.2539062 C 12.620465 7.2913556 13.075409 6.3601577 13.574219 5.4414062 C 14.367656 5.1820236 15.180119 5 16 5 z M 16 11 C 14.416667 11 13.101892 11.629756 12.251953 12.585938 C 11.402014 13.542118 11 14.777778 11 16 C 11 17.222222 11.402014 18.457881 12.251953 19.414062 C 13.101892 20.370244 14.416667 21 16 21 C 17.583333 21 18.898108 20.370244 19.748047 19.414062 C 20.597986 18.457881 21 17.222222 21 16 C 21 14.777778 20.597986 13.542119 19.748047 12.585938 C 18.898108 11.629755 17.583333 11 16 11 z M 16 13 C 17.083333 13 17.768559 13.370244 18.251953 13.914062 C 18.735347 14.457882 19 15.222222 19 16 C 19 16.777778 18.735347 17.542119 18.251953 18.085938 C 17.768559 18.629756 17.083333 19 16 19 C 14.916667 19 14.231441 18.629756 13.748047 18.085938 C 13.264653 17.542119 13 16.777778 13 16 C 13 15.222222 13.264653 14.457881 13.748047 13.914062 C 14.231441 13.370245 14.916667 13 16 13 z" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-row gap-x-3 items-center">
                <p className="text-cardDark dark:text-smoothGray font-poppins font-medium text-[12px]">Latitude: -15.213413</p>
                <p className="text-cardDark dark:text-smoothGray font-poppins font-medium text-[12px]">Longitude: -1.34523</p>
            </div>
            <div className="flex flex-row justify-around mt-4">
                <p className="text-black dark:text-paleWhite text-[14px] font-poppins font-medium">Sunny</p>
                <p className="text-black dark:text-paleWhite text-[14px] font-poppins font-medium">Current Conditions</p>
            </div>
            <div className="grid grid-cols-3 p-2 text-white">
                {/* Sunny Section */}
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl">
                    <div className="text-6xl">☀️</div>
                </div>

                {/* Precipitation */}
                <div className="flex flex-col items-center justify-center p-2  rounded-2xl">
                    <p className="text-[12px] font-poppins font-light">Precipitation</p>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        className='w-[20px] h-[20px] dark:text-white text-black'>
                        <NightIcon />
                    </svg>
                    <p className="text-[18px] font-poppins">80</p>
                    <p className="text-[10px] font-poppins font-extralight">mm</p>
                    <span className="mt-1 px-3 py-1 bg-green-600 rounded-full text-sm">Good</span>
                </div>

                {/* Wind */}
                <div className="flex flex-col items-center justify-center p-2  rounded-2xl">
                    <p className="text-[12px] font-poppins font-light">Wind</p>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        className='w-[20px] h-[20px] dark:text-white text-black'>
                        <NightIcon />
                    </svg>
                    <p className="text-[18px] font-poppins">20</p>
                    <p className="text-[10px] font-poppins font-extralight">km/h</p>
                    <span className="mt-1 px-3 py-1 bg-green-600 rounded-full text-sm">Good</span>
                </div>

                {/* Precipitation */}
                <div className="flex flex-col items-center justify-center p-2  rounded-2xl">
                    <p className="text-[12px] font-poppins font-light">Precipitation</p>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        className='w-[20px] h-[20px] dark:text-white text-black'>
                        <NightIcon />
                    </svg>
                    <p className="text-[18px] font-poppins">80</p>
                    <p className="text-[10px] font-poppins font-extralight">mm</p>
                    <span className="mt-1 px-3 py-1 bg-green-600 rounded-full text-sm">Good</span>
                </div>

                {/* Wind */}
                <div className="flex flex-col items-center justify-center p-2  rounded-2xl">
                    <p className="text-[12px] font-poppins font-light">Wind</p>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        className='w-[20px] h-[20px] dark:text-white text-black'>
                        <NightIcon />
                    </svg>
                    <p className="text-[18px] font-poppins">20</p>
                    <p className="text-[10px] font-poppins font-extralight">km/h</p>
                    <span className="mt-1 px-3 py-1 bg-green-600 rounded-full text-sm">Good</span>
                </div>

                {/* UV Index */}
                <div className="flex flex-col items-center justify-center p-2  rounded-2xl">
                    <p className="text-[12px] font-poppins font-light">UV Index</p>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        className='w-[20px] h-[20px] dark:text-white text-black'>
                        <NightIcon />
                    </svg>
                    <p className="text-[18px] font-poppins">25</p>
                    <p className="text-[10px] font-poppins font-extralight">mW/m2</p>
                    <span className="mt-1 px-3 py-1 bg-green-600 rounded-full text-sm">Good</span>
                </div>
            </div>

        </div>
    )
}
export default Widget;