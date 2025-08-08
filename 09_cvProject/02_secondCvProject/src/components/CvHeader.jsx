import React, { useEffect, useState } from "react";

export default function CvHeader() {
  const initialState = {
    name: "",
    profession: "",
    email: "",
    phone: "",
    address: "",
    personalSummary: "",
  };
  const [user, setUser] = useState(initialState);
  const [profile, setProfile] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProfile = { ...user, id: Date.now() };
    setProfile([...profile, newProfile]);
    setUser(initialState);
  }

  function handleEdit(id) {
    const result = profile.find((item) => item.id === id);
    console.log(result);
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

    setProfile(updatedUser);
  }

  useEffect(() => {
    console.log(`User :`, user);
    console.log(`Profile :`, profile);
  }, [user, profile]);

  return (
    <div>
      <h1>CV Builder Project</h1>
      <CvInput user={user} onChange={handleChange} onSubmit={handleSubmit} />

      {profile.map((item) => (
        <CvRender
          //   key={`${item}-${profile}`}
          //   profile={profile}
          key={item.id}
          item={item}
          edit={editId === item.id}
          onEdit={handleEdit}
          onChange={handleChangeInput}
        />
      ))}
    </div>
  );
}

function CvInput({ user, onChange, onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>Personal Information</h3>
        <div>
          {" "}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={onChange}
            value={user.name}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="">Profession:</label>
          <input
            type="text"
            value={user.profession}
            onChange={onChange}
            name="profession"
          />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={onChange}
            name="email"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="">Phone Number:</label>
          <input
            type="text"
            value={user.phone}
            onChange={onChange}
            name="phone"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="">Address:</label>
          <input
            type="text"
            value={user.address}
            onChange={onChange}
            name="address"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="">Personal Summary:</label>
          <input
            type="text"
            value={user.personalSummary}
            onChange={onChange}
            name="personalSummary"
          />
        </div>
        <button>Next</button>
      </form>
    </>
  );
}

function CvRender({ item, edit, onEdit, onChange }) {
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
      <button onClick={() => onEdit(item.id)}>Edit</button>
    </>
  );
}

function CvSection({ name, value, edit, onChange }) {
  const editInput = (
    <input type="text" name={name} value={value || ""} onChange={onChange} />
  );
  return (
    <div>
      <h3>
        {name} : {!edit ? <span>{value}</span> : editInput}
      </h3>{" "}
    </div>
  );
}
