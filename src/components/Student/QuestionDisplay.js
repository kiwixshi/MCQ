import React from "react";

function createOption(options){
    return (
    <div class="flex items-center w-full ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{options}</label>
    </div>)
}


function viewOption(options){
    return (
    <div class="flex items-center w-full ps-4 border border-gray-200 rounded dark:border-gray-700">
        <div class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{options}</div>
    </div>)
}


function QuestionDisplay({object, teach}){
    return(
        <div class="flex flex-col gap-8 justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={object.img} alt=""></img>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{object.question}</h5>  
                {teach?(object.options.map(createOption)):(object.options.map(viewOption))}
            </div>
        </div>
    )
}

export default QuestionDisplay;