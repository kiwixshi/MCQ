import React, { useEffect, useState } from "react";
import Option from "./Option"
import FinishOpt from "./FinishOpt";

function CreateQuestion({getVals}){
    const [options, setOptions] = useState([{text:"", correct:false}]);
    const [moreOpt, change] = useState(true);
    const [imgURL, changeURL] = useState("");
    const [Qname, changeQ] = useState("");

    useEffect(()=>{
        const correctAnswers = options.map((opt, index)=>(opt.correct? index: null)).filter((index)=>index!==null);
        const optTexts = options.map(opt => opt.text);
        getVals({question: Qname, img: imgURL, options: optTexts, correct_answers: correctAnswers});
    }, [Qname, imgURL, options, getVals]);

    function updateQ(event){
        changeQ(event.target.value);
        console.log(Qname);
    }

    function addOption(){
        if(options.length<5){
            setOptions([...options, {key:"", correct:false}])
        }else{
            change(false);
        }
        console.log(options);
    }

    function updateOption(index, text, correct){
        const newOptions = [...options];
        if(text!==null){
            newOptions[index].text = text;
        }
        if(correct!=null){
            newOptions[index].correct = correct;
        }
        setOptions(newOptions);
    }

    function upImg(event){
        const file=event.target.files[0];
        if(file){
            const objectURL = URL.createObjectURL(file);
            changeURL(objectURL);
        }
    }

    return(
        <div>
            <div className="flex flex-col m-8 gap-8 justify-center items-center">
                <div className="flex flex-col gap-8 justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col m-4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                        <input onChange={upImg} class="mb-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
                        <img src={imgURL} alt="" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg"></img>
                    </div>
                    <div className="flex flex-col p-4 leading-normal gap-8">
                        <div className="flex flex-row gap-4 border-gray-500">
                            <label for="default-input" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Question: </label>
                            <input type="text" onChange={updateQ} id="default-input" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        </div>
                        {options.map((option, index)=>(<Option key={index} index={index} updateOption={updateOption}/>))}
                        {moreOpt&&<FinishOpt addOption={addOption}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateQuestion;