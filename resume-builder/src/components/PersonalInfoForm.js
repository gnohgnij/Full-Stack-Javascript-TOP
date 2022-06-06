import React, { useState } from "react";

function PersonalInfoForm(props) {
  const [personalInfo, setPersonalInfo] = useState(props.personalInfo);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setPersonalInfo(personalInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 py-2">
        <label>Full Name</label>
        <input
          name="fullName"
          onChange={handleChange}
          value={personalInfo.fullName}
          className="border-solid border-2 rounded"
        ></input>
      </div>
      <div className="grid grid-cols-2 py-2">
        <label>Email</label>
        <input
          name="email"
          onChange={handleChange}
          value={personalInfo.email}
          className="border-solid border-2 rounded"
        ></input>
      </div>
      <div className="grid grid-cols-2 py-2">
        <label>Phone Number</label>
        <input
          name="phone"
          type="number"
          onChange={handleChange}
          value={personalInfo.phone}
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

export default PersonalInfoForm;
