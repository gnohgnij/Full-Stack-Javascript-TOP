import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    start: "",
    end: "",
  });

  const [workExp, setWorkExp] = useState([
    {
      id: uuidv4(),
      company: "",
      position: "",
      description: "",
      start: "",
      end: "",
    },
  ]);

  const [showPreview, setShowPreview] = useState(false);

  function handleShowPreview() {
    setShowPreview(!showPreview);
  }

  return (
    <div className="bg-gray-100 p-8 h-full">
      <div className="flex justify-between">
        <h2 className="text-3xl font-extrabold text-left">Resume Builder</h2>
        <button
          className="bg-slate-700 rounded w-1/12 text-white py-2"
          onClick={handleShowPreview}
        >
          {!showPreview ? `Preview` : `Form`}
        </button>
      </div>
      {!showPreview && (
        <CVForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          education={education}
          setEducation={setEducation}
          workExp={workExp}
          setWorkExp={setWorkExp}
        />
      )}
      {showPreview && (
        <CVPreview
          personalInfo={personalInfo}
          education={education}
          workExp={workExp}
        />
      )}
    </div>
  );
}

export default App;
