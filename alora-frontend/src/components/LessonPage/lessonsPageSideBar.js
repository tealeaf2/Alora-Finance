import React from 'react';
import plant2 from '../../images/plants/plant2.png';
import water_progress_avatar from '../../images/Water_Droplet.png';

export default function Sidebar() {
    return(

        <div className="sticky top-0 left-0 max-h-screen bg-gray-100 lg:px-8 md:px-6 px-2 py-10 w-1/4 lg:w-1/5 border-r-4 border-gray-500 overflow-y-auto">
            {/* Name */}
            <div className="text-lg font-semibold text-logo-green text-center">
                [NAME]
            </div>

            {/* Progress */}
            <div className="flex flex-col w-full">
                {/* ==> PLACEHOLDER PROGRESS IMAGE <== */}
                <div>
                    <img 
                        src={plant2}
                        className="w-full"
                    />
                </div>
                {/* progress bar */}
                <div className="w-full h-10 border-4 border-button-blue rounded-full">
                    {/* ==> PLACE HOLDER PROGRESS <== */}
                    <div className={`h-8 bg-button-blue rounded-full border-2 border-button-blue ${"w-1/2"}`}></div>
                </div>
                {/* progress avatar and number */}
                <div className="w-full flex items-center justify-center mt-5">
                    <img
                    src={water_progress_avatar}
                    className="w-1/2"
                    />
                    <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-button-blue">
                        {/* ==> PLACE HOLDER PROGRESS <== */}
                        {"50%"}
                    </div>
                </div>
            </div>

            {/* Box PLACEHOLDER */}
            <div className="w-full h-56 mt-10 bg-gray-200 rounded-xl p-3">
                text
            </div>
        </div>

    )
}