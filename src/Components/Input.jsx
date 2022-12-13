import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

function Input(props) {
  const [message, setMessage] = useState("");
  const [fontSize, setFontSize] = useState(20);
  const [fontFamily, setFontFamily] = useState("");
  const [fontColor, setFontColor] = useState("");
console.log(fontColor)
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

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value)
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
          style={{ fontSize: `${fontSize}px`, color: `${fontColor}`} }
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
      <Form.Select size="sm" onChange={handleFontColorChange}>
        <option value="">Change Color</option>
        <option value={"black"}>Black</option>
        <option value={"white"}>White</option>
        <option value={"red"}>Red</option>
      </Form.Select>
    </>
  );
}

export default Input;
