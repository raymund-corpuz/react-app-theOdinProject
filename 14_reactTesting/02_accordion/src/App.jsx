import * as React from "react";

function App() {
  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h2>FAQ</h2>
      <Accordion items={items} />
    </div>
  );
}

export default App;

class Accordion extends React.Component {
  state = { openIndex: 0 };
  setOpenIndex = (openIndex) => this.setState({ openIndex });
  render() {
    const { openIndex } = this.state;
    return (
      <div>
        {this.props.items.map((item, index) => (
          <>
            <button onClick={() => this.setOpenIndex(index)}>
              {item.title}
            </button>
            {index === openIndex ? (
              <AccordionContents>{item.contents}</AccordionContents>
            ) : null}
          </>
        ))}
      </div>
    );
  }
}

const AccordionContents = ({ children }) => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
};

const items = [
  {
    title: "What is React?",
    contents: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is an Accordion?",
    contents:
      "An accordion is a UI component that expands to reveal hidden content.",
  },
  {
    title: "Why use an Accordion?",
    contents: "Accordions help organize content and improve user experience.",
  },
];
