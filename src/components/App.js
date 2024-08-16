import React, {useState, useEffect} from "react";
import Student from "./Student/Student";
import Test from "./Student/Test";
import Home from "./Home" 
import {Routes, Route, useNavigate} from "react-router-dom";
import tests from "./testdisparr"
import Teacher from "./Teacher";
import Create from "./Create"

function App() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [allTests, changeTests] = useState(()=>{
    const storedTests = window.localStorage.getItem('allTs');
    if (storedTests != null) {
        try {
            return JSON.parse(storedTests);
        } catch (error) {
            console.error("Failed to parse stored testVal:", error);
        }
    }
    return tests;
  });

  const addTest = (arr) =>{
    const newTest = {index: allTests.length+1, ...arr};
    changeTests([...allTests, newTest]);
    console.log(allTests);
    navigate("/Teacher");
  }

  useEffect(() => {
    if (allTests) {
        window.localStorage.setItem('allTs', JSON.stringify(allTests));
    }
  }, [allTests]);

  const view = () =>{
    console.log(allTests);
  }

  const removeTest = (test) =>{
    const testIndex = allTests.findIndex((t)=>(t.id===test.id));
    changeTests([...allTests.slice(0, testIndex), {...allTests[testIndex], notCompleted:false}, ...allTests.slice(testIndex+1)]);
  }

  const navigate = useNavigate();

  const handleTestClick = (test)=>{
    setSelectedTest(test);
    navigate("/TestScreen");
  }

  const handleTestView = (test)=>{
    setSelectedTest(test);
    navigate("/ViewTest")
  }

  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Student" element={<Student view={view} name="Shivani" onTestClick={handleTestClick} tests={allTests}/>}></Route>
        <Route path="/Teacher" element={<Teacher tests={allTests} onView={handleTestView}/>}></Route>
        <Route path="/TestScreen" element={<Test test={selectedTest} onComplete={removeTest} stud={true}/>} />
        <Route path="/ViewTest" element={<Test test={selectedTest} stud={false}/>}></Route>
        <Route path="/CreateTest" element={<Create addTest={addTest}/>}></Route>
      </Routes>
  );
}

export default App;