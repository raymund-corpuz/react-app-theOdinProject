import { useState } from "react";
import data from "../data/data.js";

export default function Form() {
  const [step, setStep] = useState(0);

  const initialState = {};
  data.forEach((section) => {
    section.fields.forEach((field) => {
      initialState[field.name] = "";
    });
  });
  const [user, setUser] = useState(initialState);
  const [profile, setProfile] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function handleNext(e) {
    e.preventDefault();
    setStep((nextState) => nextState + 1);
  }

  function handlePrev(e) {
    e.preventDefault();
    setStep((prevState) => prevState - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (step > data.length - 1) {
      console.log("next");
    } else {
      confirm("Do you want to submit the form?");
    }
    const newUser = { ...user };
    setProfile([...profile, newUser]);
    setIsSubmitted(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleEdit() {
    setIsEdit(true);
    setIsSubmitted(false);
  }

  return (
    <div className="container ">
      {!isSubmitted ? (
        <div className="form-section col-12 justify-content-center ">
          <div className="d-flex justify-content-center my-2 ">
            {" "}
            <h1>Form</h1>
          </div>
          <FormSection
            section={data[step]}
            user={user}
            step={step}
            onNext={handleNext}
            onSubmit={handleSubmit}
            onPrevious={handlePrev}
            onChange={handleChange}
            isSubmitted={isSubmitted}
            isEdit={isEdit}
            profile={profile}
          />
        </div>
      ) : (
        <div className="output-section col-12 mt-4">
          <Edit onEdit={handleEdit} />

          <div>
            {Object.entries(user).map(([key, value]) => (
              <DisplayCV name={key} value={value} onEdit={handleEdit} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FormSection({
  section,
  user,
  step,
  onNext,
  onSubmit,
  onPrevious,
  onChange,
  isSubmitted,
  isEdit,
  profile,
}) {
  return (
    <form>
      <h3>{section.section}</h3>

      {section.fields.map((field) => (
        <FormInput
          field={field}
          user={user}
          key={`${field.title}`}
          onChange={onChange}
          isEdit={isEdit}
          profile={profile}
        />
      ))}

      {step >= data.length - 1 ? (
        <div className="d-flex justify-content-end">
          <Back onPrevious={onPrevious} />
          {!isSubmitted ? (
            <Submit onSubmit={onSubmit} isEdit={isEdit} />
          ) : (
            <button className="btn btn-danger">Edit</button>
          )}
        </div>
      ) : (
        <div className="d-flex justify-content-end">
          {step !== 0 && <Back onPrevious={onPrevious} />}
          <Next onNext={onNext} />
        </div>
      )}
    </form>
  );
}

function FormInput({ field, user, onChange }) {
  return (
    <div key={field.name} className="my-2">
      <label>{field.title}</label>
      <input
        className={field.input}
        type={field.type}
        name={field.name}
        value={user[field.name] || ""}
        onChange={onChange}
      />
    </div>
  );
}

function Next({ onNext }) {
  return (
    <button className="btn btn-primary justify-content-end" onClick={onNext}>
      Next
    </button>
  );
}

function Submit({ onSubmit, isEdit }) {
  return (
    <button className="btn btn-primary" onClick={onSubmit}>
      {!isEdit ? "Submit" : "Save"}
    </button>
  );
}

function Edit({ onEdit }) {
  return (
    <div className="d-flex justify-content-between">
      <h1>The Odin Project: CV Application</h1>
      <button className="btn btn-outline-primary btn-sm px-4" onClick={onEdit}>
        Edit
      </button>
    </div>
  );
}

function Back({ onPrevious }) {
  return (
    <button className="btn btn-secondary mx-4" onClick={onPrevious}>
      Previous
    </button>
  );
}

function DisplayCV({ name, value }) {
  const result = name.replace(/([a-z])([A-Z])/g, "$1 $2");
  const fResult = result.charAt(0).toUpperCase() + result.slice(1);
  return (
    <div>
      {fResult}: {value}
    </div>
  );
}
