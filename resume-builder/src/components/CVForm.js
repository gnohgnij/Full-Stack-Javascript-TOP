import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import WorkExpForm from "./WorkExpForm";

function CVForm(props) {
  let arr = props.workExp;

  function addMoreExp() {
    props.setWorkExp((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        company: "",
        position: "",
        description: "",
        start: "",
        end: "",
      },
    ]);
  }

  function deleteExp(id) {
    let newArr = arr.filter((work) => work.id !== id);
    props.setWorkExp(newArr);
  }

  let works = arr.map((work) => {
    return (
      <div key={work.id}>
        <WorkExpForm
          workExp={props.workExp}
          setWorkExp={props.setWorkExp}
          id={work.id}
        />
        <div className="flex justify-center mb-8">
          <button
            className="bg-red-600 rounded text-white w-1/3 py-2"
            onClick={() => {
              deleteExp(work.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white drop-shadow-xl rounded-lg p-8">
      <h3 className="font-bold text-xl text-left">PERSONAL INFORMATION</h3>
      <PersonalInfoForm
        personalInfo={props.personalInfo}
        setPersonalInfo={props.setPersonalInfo}
      />
      <h3 className="font-bold text-xl text-left">EDUCATION</h3>
      <EducationForm
        education={props.education}
        setEducation={props.setEducation}
      />
      <h3 className="font-bold text-xl text-left">WORK EXPERIENCE</h3>
      <div className="workExp">{works}</div>
      <div className="flex justify-center my-2">
        <button
          onClick={addMoreExp}
          className="bg-slate-700 rounded text-white w-1/3 py-2"
        >
          Add More Experience
        </button>
      </div>
    </div>
  );
}

export default CVForm;
