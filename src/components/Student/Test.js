import React, { useEffect, useState } from "react";
import Countdown from "react-countdown"
import QuestionI from "./QuestionI";

function Test({test, onComplete, stud}){
    const [testP, setTest] = useState(() => {
        const storedTestVal = window.localStorage.getItem('testVal');
        if (storedTestVal != null) {
            try {
                return JSON.parse(storedTestVal);
            } catch (error) {
                console.error("Failed to parse stored testVal:", error);
            }
        }
        return test || {};
    });

    useEffect(() => {
        if (test) {
            window.localStorage.setItem('testVal', JSON.stringify(test));
            setTest(test);
        }
    }, [test]);

    useEffect(() => {
        if (testP) {
            window.localStorage.setItem('testVal', JSON.stringify(testP));
        }
    }, [testP]);

    function handleComplete(){
        onComplete(testP);
    }

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          return (
            <a href="/Student" onClick={handleComplete} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go back to home screen
            </a>
          );
        }else{
            return (<h1>{hours}:{minutes}:{seconds}</h1>);
        }
    };

    return (
        <div className="w-screen">
            <nav className="flex flex-row justify-between w-screen gap-8 bg-sky-200 dark:bg-gray-900 dark:border-gray-700 border-neutral-900">
                <h3 className="p-8 text-2xl">{testP.testName}</h3>
                <div className="p-8">
                    {stud&&(<Countdown date={Date.now()+testP.testTime*60000} renderer={renderer}/>)}
                </div>
            </nav>
            <div className="flex flex-col m-8 gap-8 justify-center items-center">
                <QuestionI testContent={testP.testContent} teach={stud}/>
            </div>
        </div>
    );
};

export default Test;
