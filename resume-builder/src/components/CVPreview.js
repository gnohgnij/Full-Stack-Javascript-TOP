import React from "react";

function CVPreview(props) {
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let personalInfo = props.personalInfo;
  let education = props.education;
  let workExp = props.workExp;

  let eduStartYear;
  let eduStartMonth;
  let eduEndYear;
  let eduEndMonth;
  const eduStart = new Date(education.start);
  const eduEnd = new Date(education.end);
  if (!!eduStart.valueOf()) {
    eduStartMonth = months[eduStart.getMonth()];
    eduStartYear = eduStart.getFullYear();
  }
  if (!!eduEnd.valueOf()) {
    eduEndMonth = months[eduEnd.getMonth()];
    eduEndYear = eduEnd.getFullYear();
  }

  let work = workExp.map((exp, i) => {
    let workStartYear;
    let workStartMonth;
    let workEndYear;
    let workEndMonth;
    const workStart = new Date(exp.start);
    const workEnd = new Date(exp.end);
    if (!!workStart.valueOf()) {
      workStartMonth = months[workStart.getMonth()];
      workStartYear = workStart.getFullYear();
    }
    if (!!workEnd.valueOf()) {
      workEndMonth = months[workEnd.getMonth()];
      workEndYear = workEnd.getFullYear();
    }

    return (
      <div key={i} className="mb-4">
        <div className="flex justify-between">
          <p className="font-bold">{exp.position}</p>
          <p className="italic">{`${workStartMonth} ${workStartYear} - ${workEndMonth} ${workEndYear}`}</p>
        </div>
        <p>{exp.company}</p>
        <p>{exp.description}</p>
      </div>
    );
  });

  return (
    <div className="bg-white drop-shadow-xl rounded-lg p-8">
      <div className="mb-6">
        <h1 className="font-bold text-2xl text-center">
          {personalInfo.fullName.toUpperCase()}
        </h1>
        <div className="flex justify-center">
          <p>
            Email: {personalInfo.email} | Contact Number: {personalInfo.phone}
          </p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="font-bold text-xl text-left">EDUCATION</h2>
        <div className="flex justify-between">
          <p className="font-bold text-left">{education.degree}</p>
          <p className="italic">
            {`${eduStartMonth} ${eduStartYear} - ${eduEndMonth} ${eduEndYear}`}
          </p>
        </div>
        <p>{education.school}</p>
      </div>
      <div className="mb-6">
        <h2 className="font-bold text-xl text-left">WORK EXPERIENCE</h2>
        {work}
      </div>
    </div>
  );
}

export default CVPreview;
