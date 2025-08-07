import React from "react";

const CvForm = () => {
  return (
    <div className="container mx-auto ">
      <div className="text-center my-4">
        <h1>CV Application - The Odin Project</h1>
      </div>

      <form action="" className="px-4 pb-4   ">
        <h3>Personal Information</h3>
        {/* FULL Name */}
        <div className="mb-1  ">
          <label htmlFor="" className="form-label">
            Name:
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Professional Title */}
        <div className="mb-1  ">
          <label htmlFor="" className="form-label">
            Address:
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Email Address */}
        <div className="mb-1  ">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" />
        </div>
        {/* Phone Number */}
        <div className="mb-1  ">
          <label htmlFor="" className="form-label">
            Phone Number
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Address */}
        <div className="mb-1  ">
          <label htmlFor="" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Personal Summary Bio */}
        <div className="mb-1  ">
          <label htmlFor="" className="form-label">
            Summary
          </label>
          <input type="text" className="form-control" />
        </div>

        <h3>Work Experience</h3>
        {/* Job Title */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Job Title
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Company Name */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Company Name
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Location  */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Location
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Start Date */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Start Date
          </label>
          <input type="date" className="form-control" />
        </div>
        {/* End Date */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            End Date
          </label>
          <input type="date" className="form-control" />
        </div>
        {/* Job description */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Job Description
          </label>
          <input type="text" className="form-control" />
        </div>

        <h3>Education</h3>
        {/* Degree */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Degree
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* School / University Name */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            School / University Name
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Location */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Location
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Start Date */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Start Date
          </label>
          <input type="date" className="form-control" />
        </div>
        {/* End Date */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            End Date
          </label>
          <input type="date" className="form-control" />
        </div>

        <h3>Projects / Portfolio</h3>
        {/* Project Title */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Project Title
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Project Description */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Project Description
          </label>
          <input type="text" className="form-control" />
        </div>
        {/* Project Role */}
        <div className="mb-1">
          <label htmlFor="" className="form-label">
            Role
          </label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CvForm;
