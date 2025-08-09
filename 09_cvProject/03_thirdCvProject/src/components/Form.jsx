import { useState } from "react";
import data from "../data/data.js";

export default function Form() {
  const initialState = {};
  data.forEach((section) => {
    section.fields.forEach((field) => {
      initialState[field.name] = "";
    });
  });
  const [step, setStep] = useState(0);
  const [user, setUser] = useState(initialState);

  return (
    <div>
      <h1>Form</h1>
      <FormSection section={data[step]} user={user} />
    </div>
  );
}

function FormSection({ section, user }) {
  return (
    <div>
      <h3>{section.section}</h3>

      {section.fields.map((field) => (
        <div key={field.name}>
          <label htmlFor="">{field.title}</label>
          <input type={field.type} value={user[field.name] || ""} />
        </div>
      ))}
    </div>
  );
}

function FormInput() {
  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  );
}
