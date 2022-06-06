import React, { useState } from "react";

function EducationForm(props) {
  const [education, setEducation] = useState(props.education);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setEducation(education);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 py-2">
        <label>School</label>
        <input
          name="school"
          onChange={handleChange}
          value={education.school}
          className="border-solid border-2 rounded"
        ></input>
      </div>
      <div className="grid grid-cols-2 py-2">
        <label>Degree</label>
        <input
          name="degree"
          onChange={handleChange}
          value={education.degree}
          className="border-solid border-2 rounded"
        ></input>
      </div>
      <div className="grid grid-cols-2 py-2">
        <label>Start Date</label>
        <input
          name="start"
          type="date"
          onChange={handleChange}
          value={education.start}
          className="border-solid border-2 rounded"
        ></input>
      </div>
      <div className="grid grid-cols-2 py-2">
        <label>End Date</label>
        <input
          name="end"
          type="date"
          onChange={handleChange}
          value={education.end}
          className="border-solid border-2 rounded"
        ></input>
      </div>
      <div className="flex justify-center mb-8 mt-2">
        <input
          type="submit"
          value="Save"
          className="bg-gray-400 rounded text-white w-1/3 py-2"
        ></input>
      </div>
    </form>
  );
}

export default EducationForm;
