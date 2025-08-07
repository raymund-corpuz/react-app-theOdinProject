import React from "react";
import { useState, useEffect } from "react";
import NewCvForm from "../components/NewCvForm";
import data from "../data/data.js";
import CvOutput from "../components/CvOutput.jsx";

const CvBuilder = () => {
  const initialState = {
    fullName: "",
    profession: "",
    email: "",
    phoneNumber: "",
    address: "",
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
    role: "",
  };
  const [user, setUser] = useState(initialState);
  const [userCollection, setUserCollection] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { ...user, id: Date.now() };
    setUserCollection([...userCollection, newUser]);
    setUser(initialState); //Reset to initial
  }

  useEffect(() => {
    console.log("User: ", user);
    console.log("User Collection :", userCollection);
  }, [user, userCollection]);
  return (
    <div className="container">
      <h1>CV Builder</h1>
      <NewCvForm
        data={data}
        onChange={handleChange}
        onSubmit={handleSubmit}
        user={user}
      />
      {Object.entries(user).map(([key, value]) => (
        <CvOutput key={key} name={key} value={value} />
      ))}
    </div>
  );
};

export default CvBuilder;
