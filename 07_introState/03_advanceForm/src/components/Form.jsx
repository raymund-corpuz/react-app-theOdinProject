import React, { useEffect, useState } from "react";
import philState from "./PHLState";

const Form = () => {
  const [singleForm, setSingleForm] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    region: "",
    zipCode: "",
    phone: "",
    email: "",
    company: "",
    comments: "",
  });
  const [formCollection, setFormCollection] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newForm = {
      ...singleForm,
    };

    setFormCollection([...formCollection, newForm]);
    setSingleForm({
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      region: "",
      zipCode: "",
      phone: "",
      email: "",
      company: "",
      comments: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSingleForm({ ...singleForm, [name]: value });
  }

  useEffect(() => {
    console.log(formCollection);
  }, [formCollection]);
  return (
    <form action="" style={{ maxWidth: "100%" }} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        style={{ width: "75%" }}
        value={singleForm.firstName}
        name="firstName"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        style={{ width: "75%" }}
        value={singleForm.lastName}
        name="lastName"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Address Line 1"
        style={{ width: "75%" }}
        value={singleForm.addressLine1}
        name="addressLine1"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Address Line 2"
        style={{ width: "75%" }}
        value={singleForm.addressLine2}
        name="addressLine2"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="City"
        style={{ width: "75%" }}
        value={singleForm.city}
        name="city"
        onChange={handleChange}
      />
      <select
        name="region"
        id=""
        value={singleForm.region}
        onChange={handleChange}
      >
        {philState.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Zip Code"
        style={{ width: "75%" }}
        value={singleForm.zipCode}
        name="zipCode"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Phone"
        style={{ width: "75%" }}
        value={singleForm.phone}
        name="phone"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Email"
        style={{ width: "75%" }}
        value={singleForm.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Company"
        style={{ width: "75%" }}
        value={singleForm.company}
        name="company"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Comments or Questions"
        style={{ width: "75%" }}
        value={singleForm.comments}
        name="comments"
        onChange={handleChange}
      />

      <input type="submit" style={{ width: "75%" }} value="Submit Form" />
    </form>
  );
};

export default Form;
