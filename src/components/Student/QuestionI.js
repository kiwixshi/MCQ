import QuestionDisplay from "./QuestionDisplay";

function QuestionI({testContent, teach}){
    return (<>
    {testContent && testContent.map(
        (testqs)=>(<QuestionDisplay object={testqs} teach={teach}/>)
    )}
    </>)
}   

export default QuestionI;