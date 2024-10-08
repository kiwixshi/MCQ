import React from "react";
import TestDisplay from "./TestDisplay.js"


function Student({view, name, onTestClick, tests}) {
  return (
    <div>
        <nav className="bg-sky-200 dark:bg-gray-900 dark:border-gray-700 border-neutral-900">
            <h3 className="p-8">Student Display</h3>
        </nav>
        <h2 className="pt-8 pl-8 text-3xl">Welcome, {name}</h2>
        <h3 className="pt-8 pl-8 text-2xl">Your Tests</h3>
        <div className="p-8 flex md:flex-row sm:flex-col flex-wrap gap-6 max-h-screen">
            {tests.map(test => test.notCompleted&&(<TestDisplay key={test.id} test={test} onClick={onTestClick} teach={false}/>) )};
        </div>
        <button onClick={view}>view</button>
    </div>
    
  );
}

export default Student;
