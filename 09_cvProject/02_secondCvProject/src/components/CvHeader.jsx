import React, { useEffect, useState } from "react";
import data from "../data/data.js";

export default function CvHeader() {
  const [step, setStep] = useState(0);

  // const initialState = {
  //   name: "",
  //   profession: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   personalSummary: "",
  // };

  const initialState = {};
  data.forEach((section) =>
    section.fields.forEach((field) => {
      initialState[field.name] = "";
    })
  );

  const [user, setUser] = useState(initialState);
  const [profile, setProfile] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleNext(e) {
    e.preventDefault();
    if (step < data.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Final form data:", user);
      alert("Form completed!");
    }
    // const newProfile = { ...user, id: Date.now() };
    // setProfile([...profile, newProfile]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProfile = { ...user, id: Date.now() };
    setProfile([...profile, newProfile]);
    setUser(initialState);
  }

  function handleEdit(id) {
    const result = profile.find((item) => item.id === id);
    setUser(result);
    setEditId(id);
  }

  function handleChangeInput(e) {
    // const { name, value } = e.target;
    // const newProfile = setUser({ ...user, [name]: value });
    // setProfile([...profile, newProfile]);
    const { name, value } = e.target;
    const updatedUser = profile.map((item) =>
      item.id === editId ? { ...item, [name]: value } : item
    );
    console.log(updatedUser);
    setProfile(updatedUser);
  }

  function handleSave() {
    const updatedProfile = profile.map((item) =>
      item.id === editId ? { ...user, id: editId } : item
    );
    setProfile(updatedProfile);
    setEditId(null);
    setUser(initialState);
  }

  useEffect(() => {
    console.log(`User :`, user);
    console.log(`Profile :`, profile);
  }, [user, profile]);

  return (
    <div className="container mt-4">
      <h1>CV Builder Project</h1>
      <CvInput
        section={data[step]}
        user={user}
        onChange={handleChange}
        onNext={handleNext}
        isLast={step === data.length - 1}
      />

      {/* <CvInput user={user} onChange={handleChange} onSubmit={handleSubmit} /> */}

      {/* {data.map((item) => (
        <CvInput
          key={`${item.section}`}
          section={item.section}
          fields={item.fields}
          onChange={handleChange}
          onSubmit={handleSubmit}
          user={user}
        />
      ))} */}

      {profile.map((item) => (
        <CvRender
          //   key={`${item}-${profile}`}
          //   profile={profile}
          key={item.id}
          item={item}
          edit={editId === item.id}
          onEdit={handleEdit}
          onChange={handleChangeInput}
          onSave={handleSave}
        />
      ))}
    </div>
  );
}

function CvInput({ section, user, onChange, onNext, isLast }) {
  return (
    <>
      <form onSubmit={onNext}>
        <h3>{section.section}</h3>
        {section.fields.map((field) => (
          <div key={field.name} className="mb-3">
            {" "}
            <label className={field.label}>{field.title}</label>
            <input
              type={field.type}
              className={field.input}
              name={field.name}
              value={user[field.name] || ""}
              onChange={onChange}
            />
          </div>
        ))}

        <button className="btn btn-primary" type="submit">
          {isLast ? "Submit" : "Next"}
        </button>
      </form>
    </>
  );
}

function CvRender({ item, edit, onEdit, onChange, onSave }) {
  return (
    <>
      {Object.entries(item).map(([key, value]) => (
        <CvSection
          key={`${item.id}-${key}`}
          name={key}
          value={value}
          edit={edit}
          onChange={onChange}
        />
      ))}
      {!edit ? (
        <button onClick={() => onEdit(item.id)}>Edit</button>
      ) : (
        <button onClick={() => onSave(item.id)}>Save</button>
      )}
    </>
  );
}

function CvSection({ name, value, edit, onChange }) {
  // const editInput = (
  //   <input type="text" name={name} value={value || ""} onChange={onChange} />
  // );
  return (
    <div>
      <h3>
        {name} :<span>{value}</span>
        {/* {!edit ? <span>{value}</span> : editInput} */}
      </h3>{" "}
    </div>
  );
}
