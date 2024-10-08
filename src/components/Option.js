import React from "react";

function Option({index, updateOption}){

    const handleCheckChange = (e) => {
        updateOption(index, null, e.target.checked);
    }

    const handleTextChange = (e) => {
        updateOption(index, e.target.value, null);
    }

    return(
        <div className="flex flex-row gap-4 border-gray-500">
            <input onChange={handleCheckChange} id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <input onChange={handleTextChange} type="text" id="default-input" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
    )
}

export default Option;