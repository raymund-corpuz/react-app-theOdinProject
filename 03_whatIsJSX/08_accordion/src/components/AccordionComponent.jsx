import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useState } from "react";

const AccordionComponent = () => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.",
    },
    {
      id: 2,
      title: "What is Material-UI?",
      content:
        "Material-UI (MUI) is a popular React UI framework that implements Google's Material Design guidelines.",
    },
    {
      id: 3,
      title: "How does Conditional Rendering work?",
      content:
        "Conditional rendering in React allows you to render components or elements based on certain conditions, using JavaScript operators like if, ternary, &&, etc.",
    },
    {
      id: 4,
      title: "What is a Hook in React?",
      content:
        "Hooks are functions that let you 'hook into' React state and lifecycle features from function components.",
    },
    {
      id: 5,
      title: "Why use Props in React?",
      content:
        "Props are used to pass data from parent components to child components in React. They make components reusable and configurable.",
    },
  ];

  function handleAccordion(id) {
    setOpenAccordion((prev) => {
      console.log(prev);
      return prev === id ? false : id;
    });
  }

  return (
    <div style={{ width: "720px", margin: "2rem auto" }}>
      <Typography variant="h3">Accordion </Typography>

      {accordionData.map((item) => {
        return (
          <Accordion key={item.id} expanded={openAccordion === item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id={`panel-header-${item.id}`}
              onClick={() => handleAccordion(item.id)}
            >
              <Typography component="span">{item.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography component="span">{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionComponent;
