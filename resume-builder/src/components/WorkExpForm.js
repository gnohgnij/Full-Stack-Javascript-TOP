import React, { useState } from "react";

function WorkExpForm(props) {
  const workExp = props.workExp;
  const workItem = workExp.find((work) => work.id === props.id);

  const [work, setWork] = useState(workItem);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWork((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const index = workExp.findIndex((element) => element.id === work.id);
    let arr = workExp;
    arr[index] = work;
    props.setWorkExp([...arr]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 py-2">
        <label>Company</label>
        <input
          name="company"
          onChange={handleChange}
          value={work.company}
          className="border-solid border-2 rounded"
        ></input>
      </div>
      <div className="grid grid-cols-2 py-2">
        <label>Position</label>
        <input
          name="position"
          onChange={handleChange}
          value={work.position}
          className="border-solid border-2 rounded"
        ></input>
      </div>
      <div className="grid grid-cols-2 py-2">
        <label>Description</label>
        <textarea
          name="description"
          onChange={handleChange}
          value={work.description}
          className="border-solid border-2 rounded"
        ></textarea>
      </div>
      <div className="grid grid-cols-2 py-2">
        <label>Start Date</label>
        <input
          name="start"
          type="date"
          onChange={handleChange}
          value={work.start}
          className="border-solid border-2 rounded"
        ></input>
      </div>
      <div className="grid grid-cols-2 py-2">
        <label>End Date</label>
        <input
          name="end"
          type="date"
          onChange={handleChange}
          value={work.end}
          className="border-solid border-2 rounded"
        ></input>
      </div>
      <div className="flex justify-center my-2">
        <input
          type="submit"
          value="Save"
          className="bg-gray-400 rounded text-white w-1/3 py-2"
        ></input>
      </div>
    </form>
  );
}

export default WorkExpForm;
