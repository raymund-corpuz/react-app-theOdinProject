import React, { useState, useEffect } from "react";
import data from "../data/data.js";
import CvInput from "./CvInput.jsx";

const NewCvForm = () => {
  const [user, setUser] = useState({
    fullName: "",
    profession: "",
    email: "",
    phone: "",
    address: "",
    linkedIn: "",
    gitHub: "",
    personalSummary: "",
    jobTitle: "",
    company: "",
    companyLocation: "",
    companyStart: "",
    companyEnd: "",
    jobDescription: "",
    degree: "",
    school: "",
    schoolLocation: "",
    schoolStart: "",
    schoolEnd: "",
    additionalInfo: "",
    projectTitle: "",
    projectDescription: "",
    technologiesUsed: "",
    projectURL: "",
    role: "",
  });
  const { name, value } = user;

  const [userCollection, setUserCollection] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { ...user, id: Date.now() };
    setUserCollection([...userCollection, newUser]);
    setUser({ ...user, id: "" });
  }

  useEffect(() => {
    console.log(user);
    console.log(userCollection);
  }, [user, userCollection]);
  return (
    <div className="container">
      <div className="text-center">
        <h1>CV Application</h1>
      </div>
      <form action="" className="px-4 pb-4" onSubmit={handleSubmit}>
        {data.map((item) => (
          <>
            <h3>{item.section}</h3>
            {item.fields.map((each) => (
              <CvInput data={each} onChange={handleChange} key={value} />
            ))}
          </>
        ))}

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCvForm;
