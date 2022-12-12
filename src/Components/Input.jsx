import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

function Input(props) {
  const [message, setMessage] = useState("");
  const [fontSize, setFontSize] = useState(20);
  const [fontFamily, setFontFamily] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const convertTextToUpperCase = () => {
    let caps = message.toUpperCase();
    setMessage(caps);
  };
  const increaseFontSize = () => {
    setFontSize(fontSize + 1);
  };
  const decreaseFontSize = () => {
    if (fontSize > 15) {
      setFontSize(fontSize - 1);
    }
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value)
  };
  return (
    <>
      <InputGroup>
        <Form.Control
          className={fontFamily}
          type="text"
          aria-label="With textarea"
          placeholder={props.placeholder}
          value={message}
          onChange={handleChange}
          style={{ fontSize: `${fontSize}px` }}
        />

        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={convertTextToUpperCase}
        >
          All Caps
        </Button>
        <Button variant="outline-secondary" id="" onClick={increaseFontSize}>
          +
        </Button>
        <Button variant="outline-secondary" id="" onClick={decreaseFontSize}>
          -
        </Button>
      </InputGroup>
      <Form.Select size="sm" onChange={handleFontFamilyChange}>
        <option value="">Change Font</option>
        <option value={"rubik-spray-font"}>Rubik Spray</option>
        <option value={"ruluko-font"}>Ruluko</option>
        <option value={"unbounded-font"}>unbounded</option>
      </Form.Select>
    </>
  );
}

export default Input;
