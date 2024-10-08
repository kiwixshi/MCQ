import React from "react";

function Home(){
    return (<div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <div className="text-2xl font-semibold mb-8">Choose Option</div>
      <div className="flex space-x-8">
        <a href="/Student" className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:bg-gray-200" onMouseOver={console.log("clicked")}>
          <div className="text-lg hover:bg-#e2e8f0">
            Student
          </div>
        </a>
        <a href="/Teacher" className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:bg-gray-200">
          <div className="text-lg hover:bg-#e2e8f0">Teacher</div>
        </a>
      </div>
    </div>);
}

export default Home;