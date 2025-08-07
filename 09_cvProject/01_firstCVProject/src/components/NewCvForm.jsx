import React from "react";
import data from "../data/data.js";
import CvInput from "./CvInput.jsx";

const NewCvForm = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>CV Application</h1>
      </div>
      <form action="" className="px-4 pb-4">
        {data.map((item) => (
          <>
            <h3>{item.section}</h3>
            {item.fields.map((each) => (
              <CvInput data={each} />
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
