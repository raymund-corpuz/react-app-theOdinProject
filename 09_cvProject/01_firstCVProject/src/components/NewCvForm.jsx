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
    setUser({
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
    });
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
        <h3>Personal Information</h3>
        <div className="mb-1">
          <label htmlFor="">Full Name</label>
          <input
            value={user.fullName}
            onChange={handleChange}
            name="fullName"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Professional</label>
          <input
            value={user.profession}
            onChange={handleChange}
            name="profession"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Email Address</label>
          <input
            value={user.email}
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Phone Number</label>
          <input
            value={user.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Address</label>
          <input
            value={user.address}
            onChange={handleChange}
            name="address"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Personal Summary</label>
          <input
            value={user.personalSummary}
            onChange={handleChange}
            name="personalSummary"
            type="text"
            className="form-control"
          />
        </div>
        <h3>Work Experience</h3>
        <div className="mb-1">
          <label htmlFor="">Job Title</label>
          <input
            value={user.jobTitle}
            onChange={handleChange}
            name="jobTitle"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Company Name</label>
          <input
            value={user.company}
            onChange={handleChange}
            name="company"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Location</label>
          <input
            value={user.companyLocation}
            onChange={handleChange}
            name="companyLocation"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Start Date</label>
          <input
            value={user.companyStart}
            onChange={handleChange}
            name="companyStart"
            type="date"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">End Date</label>
          <input
            value={user.companyEnd}
            onChange={handleChange}
            name="companyEnd"
            type="date"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Job Description</label>
          <input
            value={user.jobDescription}
            onChange={handleChange}
            name="jobDescription"
            type="text"
            className="form-control"
          />
        </div>
        <h3>Education</h3>
        <div className="mb-1">
          <label htmlFor="">Degree</label>
          <input
            value={user.degree}
            onChange={handleChange}
            name="degree"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">School / University</label>
          <input
            value={user.school}
            onChange={handleChange}
            name="school"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Location</label>
          <input
            value={user.schoolLocation}
            onChange={handleChange}
            name="schoolLocation"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Start Date</label>
          <input
            value={user.schoolStart}
            onChange={handleChange}
            name="schoolStart"
            type="date"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">End Date</label>
          <input
            value={user.schoolEnd}
            onChange={handleChange}
            name="schoolEnd"
            type="date"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Additional Info</label>
          <input
            value={user.additionalInfo}
            onChange={handleChange}
            name="additionalInfo"
            type="text"
            className="form-control"
          />
        </div>

        <h3>Projects</h3>
        <div className="mb-1">
          <label htmlFor="">Project Title</label>
          <input
            value={user.projectTitle}
            onChange={handleChange}
            name="projectTitle"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Project Description</label>
          <input
            value={user.projectDescription}
            onChange={handleChange}
            name="projectDescription"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Techinologies used</label>
          <input
            value={user.technologiesUsed}
            onChange={handleChange}
            name="technologiesUsed"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="">Role</label>
          <input
            value={user.role}
            onChange={handleChange}
            name="role"
            type="text"
            className="form-control"
          />
        </div>

        {/* submit */}
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCvForm;
