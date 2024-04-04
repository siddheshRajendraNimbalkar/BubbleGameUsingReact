import { useState, useEffect } from "react";

interface MainProp {
    boxval : Number,
    boxran : Number,
    setBoxran : Number,
    setScore : Number,
    score : Number,
    setTime: Number,
    time : Number
}
const Main = ({ boxval, boxran, setBoxran, setScore, score, setTime, time}: MainProp) => {
    
    return (
        <div className='w-full h-20 bg-black rounded-t-[15px] flex justify-between items-center p-4'>

            <div className="text-white flex gap-4">
                <div>Target</div>
                <div className="text-black bg-white pr-4 pl-4 rounded-md">
                    {`${boxran}`}
                </div>
            </div>
            <div className="text-white flex gap-4">
                <div>Time</div>
                <div className="text-black bg-white pr-4 pl-4 rounded-md">
                    {`${time}`}
                </div>
            </div>
            <div className="text-white flex gap-4">
                <div>Score</div>
                <div className="text-black bg-white pr-4 pl-4 rounded-md">
                    {`${score}`}
                </div>
            </div>
        </div>
    );
};

export default Main;
