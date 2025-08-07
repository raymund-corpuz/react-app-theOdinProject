const NewCvForm = ({ data, onSubmit, onChange, user }) => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>CV Application Project</h1>
      </div>
      <form className="px-4 pb-4" onSubmit={onSubmit}>
        {data.map((section) => (
          <>
            <h3>{section.section}</h3>
            {section.fields.map((each) => (
              <div>
                <label htmlFor="" className={each.label}>
                  {each.title}
                </label>
                <input
                  type={each.type}
                  className={each.input}
                  name={each.name}
                  value={user[each.name] || ""}
                  onChange={onChange}
                />
              </div>
            ))}
          </>
        ))}

        {/* <h3>Personal Information</h3>
        <div className="mb-1">
          <label htmlFor="">Full Name</label>
          <input
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
            value={user.role}
            onChange={handleChange}
            name="role"
            type="text"
            className="form-control"
          />
        </div> */}

        {/* submit */}
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCvForm;
