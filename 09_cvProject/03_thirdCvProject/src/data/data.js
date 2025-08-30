const data = [
  {
    section: "Personal Information",
    fields: [
      {
        name: "fullName",
        title: "Full Name",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "profession",
        title: "Professional Title",
        label: "form-label",
        input: "form-control",
        type: "text",
      },

      {
        name: "email",
        title: "Email Address",
        label: "form-label",
        input: "form-control",
        type: "email",
      },
      {
        name: "phoneNumber",
        title: "Phone Number",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "address",
        title: "Address",
        label: "form-label",
        input: "form-control",
        type: "text",
      },

      {
        name: "personalSummary",
        title: "Personal Summary",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
    ],
  },
  {
    section: "Work Experience",
    fields: [
      {
        name: "jobTitle",
        title: "Job Title",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "company",
        title: "Company Name",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "companyLocation",
        title: "Location",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "companyStart",
        title: "Start Date",
        label: "form-label",
        input: "form-control",
        type: "date",
      },
      {
        name: "companyEnd",
        title: "End Date",
        label: "form-label",
        input: "form-control",
        type: "date",
      },
      {
        name: "jobDescription",
        title: "Job Description",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
    ],
  },
  {
    section: "Education",
    fields: [
      {
        name: "degree",
        title: "Degree",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "school",
        title: "School/University Name",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "schoolLocation",
        title: "Location",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "schoolStart",
        title: "Start Date",
        label: "form-label",
        input: "form-control",
        type: "date",
      },
      {
        name: "schoolEnd",
        title: "End Date",
        label: "form-label",
        input: "form-control",
        type: "date",
      },
      {
        name: "additionalInfo",
        title: "Additional Info",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
    ],
  },
  {
    section: "Projects / Portfolio",
    fields: [
      {
        name: "projectTitle",
        title: "Project Title",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "projectDescription",
        title: "Project Description",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "technologiesUsed",
        title: "Technologies Used",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "projectURL",
        title: "Project URL",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
      {
        name: "role",
        title: "Role / Responsibilities",
        label: "form-label",
        input: "form-control",
        type: "text",
      },
    ],
  },
];

export default data;

const newData = [
  {
    additionalInfo: "Additional info",
    address: "Nama Rd",
    company: "sumi",
    companyEnd: "2025-07-28",
    companyLocation: "Binalonan",
    companyStart: "2025-07-28",
    degree: "",
    email: "raymund@gmail.com",
    fullName: "Raymund Corpuz",
    jobDescription: "every goo boy does file",
    jobTitle: "Project Planner",
    personalSummary: "Be able to create a website",
    phoneNumber: "09636318880",
    profession: "Fron End Developer",
    projectDescription: "portfolio description",
    projectTitle: "Porfolio title",
    projectURL: "another URL",
    role: "manager",
    school: "DMMMSU",
    schoolEnd: "2025-07-28",
    schoolLocation: "Agoo",
    schoolStart: "2025-07-28",
    technologiesUsed: "React",
  },
];

const final = Object.entries(newData).map(([key, value]) => {
  return key, value;
});

console.log(final);
