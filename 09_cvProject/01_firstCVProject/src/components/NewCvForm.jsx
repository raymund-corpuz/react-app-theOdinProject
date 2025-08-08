const NewCvForm = ({ data, onSubmit, onChange, user }) => {
  return (
    <div className="container">
      <div className="text-center">
        <h1>CV Application Project</h1>
      </div>
      <form className="px-4 pb-4" onSubmit={onSubmit}>
        {data.map((section, index) => (
          <div key={index}>
            <h3>{section.section}</h3>
            {section.fields.map((each, index) => (
              <div key={index}>
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

            {/* <div className="d-flex justify-content-end m-2">
              <button className="btn btn-secondary mx-2 ">Edit</button>
              <button className="btn btn-danger" onClick={() => onDelete(id)}>
                Delete
              </button>
            </div> */}
          </div>
        ))}

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCvForm;
