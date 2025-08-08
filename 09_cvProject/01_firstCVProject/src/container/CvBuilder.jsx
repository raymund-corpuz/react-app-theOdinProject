import React from "react";
import { useState, useEffect } from "react";
import NewCvForm from "../components/NewCvForm";
import data from "../data/data.js";
import CvOutput from "../components/CvOutput.jsx";
import Edit from "../components/Edit.jsx";
import Save from "../components/Save.jsx";

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
  const [isOutput, setIsOutput] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editUser, setEditUser] = useState(user);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { ...user, id: Date.now() };
    setUserCollection([...userCollection, newUser]);
    setUser(initialState); //Reset to initial
    setIsOutput(true);
  }

  function handleEdit() {
    setIsEdit((prevStatus) => !prevStatus);
  }

  function handleSave() {
    // const saveUser = { ...userCollection };
    // setUserCollection([saveUser]);
    // setIsEdit((prevStatus) => !prevStatus);
    const updatedUser = userCollection.map((user) =>
      user.id === editUser.id ? editUser : user
    );
    setUserCollection(updatedUser);
    setIsEdit(false);
  }

  function handleEditChange(e) {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  }

  useEffect(() => {
    console.log("User: ", user);
    console.log("User Collection :", userCollection);
    console.log("Edit:", isEdit);
  }, [user, userCollection, isEdit]);

  return (
    <div className="container">
      <h1>CV Builder</h1>
      <NewCvForm
        data={data}
        onChange={handleChange}
        onSubmit={handleSubmit}
        user={user}
      />

      {userCollection.map((item) =>
        Object.entries(item).map(([key, value]) => (
          <CvOutput
            key={`${item.id}-${key}`}
            name={key}
            value={isEdit && item.id === editUser.id ? editUser[key] : value}
            isEdit={isEdit && item.id === editUser.id}
            onChange={handleEditChange}
          />
        ))
      )}

      {isOutput && (
        <Edit onEdit={handleEdit} isEdit={isEdit} onSave={handleSave} />
      )}
    </div>
  );
};

export default CvBuilder;
