import React from "react";
import TestDisplay from "./Student/TestDisplay";


function Teacher({tests, onView}) {
  return (
    <div>
        <nav className="bg-sky-200 dark:bg-gray-900 dark:border-gray-700 border-neutral-900">
            <h3 className="p-8">Teacher Display</h3>
        </nav>
        <div className="w-screen flex justify-center">
            <a href="/CreateTest" class="bg-teal-400 hover:bg-teal-600 text-gray-800 font-bold m-12 py-2 px-4 rounded gap-4 inline-flex items-center justify-center w-1/5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span>Add new quiz</span>
            </a>
        </div>
        <h3 className="font-bold text-lg p-8 py-0">Existing Tests</h3>
        <div className="p-8 flex md:flex-row sm:flex-col flex-wrap gap-6 max-h-screen">
            {tests.map(test => test.notCompleted&&(<TestDisplay key={test.id} test={test} onClick={onView} teach={true}/>) )};
        </div>
    </div>
)};

export default Teacher;