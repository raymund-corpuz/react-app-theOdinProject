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
      alert("Form Submitted");
    }
  }

  function handleCancel(e) {
    e.preventDefault();
    setStep(0);
  }

  return (
    <div className="container-fluid">
      <h1>Form</h1>
      <FormSection
        section={data[step]}
        user={user}
        step={step}
        onNext={handleNext}
        onSubmit={handleSubmit}
        onPrevious={handlePrev}
        onCancel={handleCancel}
      />
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
  onCancel,
}) {
  return (
    <form className="col-5">
      <h3>{section.section}</h3>

      {section.fields.map((field) => (
        <div key={field.name} className="my-2">
          <label>{field.title}</label>
          <input
            className={field.input}
            type={field.type}
            value={user[field.name] || ""}
          />
        </div>
      ))}

      {step >= data.length - 1 ? (
        <div className="d-flex justify-content-end">
          <Cancel onCancel={onCancel} />
          <Submit onSubmit={onSubmit} />
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

function FormInput() {
  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" />
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

function Submit({ onSubmit }) {
  return (
    <button className="btn btn-primary" onClick={onSubmit}>
      Submit
    </button>
  );
}

function Back({ onPrevious }) {
  return (
    <button className="btn btn-secondary mx-4" onClick={onPrevious}>
      Previous
    </button>
  );
}

function Cancel({ onCancel }) {
  return (
    <button className="btn btn-secondary mx-4" onClick={onCancel}>
      Cancel
    </button>
  );
}
