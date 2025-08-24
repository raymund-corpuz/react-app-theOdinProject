import React, { useState } from "react";
import { data } from "./data.js";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleAccordion(id) {
    return setIsOpen((prev) => (prev === id ? false : id));
  }
  return (
    <div>
      {data.map((item) => {
        return (
          <div style={{ border: "1px solid black" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 1rem",
                borderBottom: "1px solid gray",
              }}
              key={item.id}
              onClick={() => handleAccordion(item.id)}
            >
              <h1>{item.title}</h1>
              <span style={{ fontSize: "1.5rem" }}>
                {isOpen === item.id ? "+" : "-"}
              </span>
            </div>
            <div
              style={{
                padding: "0 1rem",
                display: isOpen === item.id ? "flex" : "none",
              }}
              key={item.id}
            >
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
