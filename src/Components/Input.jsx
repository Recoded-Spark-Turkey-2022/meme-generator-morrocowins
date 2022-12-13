import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

function Input(props) {
  const [message, setMessage] = useState("");
  // const [fontSize, setFontSize] = useState(20);
  // const [fontFamily, setFontFamily] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    props.setText(event.target.value);
  };

  const convertTextToUpperCase = () => {
    let caps = message.toUpperCase();
    setMessage(caps);
  };
  // const increaseFontSize = () => {
  //   props.fontSizeSet(props.fontSize + 1);
  // };
  // const decreaseFontSize = () => {
  //   if (props.fontSize > 15) {
  //     props.fontSizeSet(props.fontSize - 1);
  //   }
  // };

  const handleFontFamilyChange = (e) => {
    props.fontSet(e.target.value)
  };
  return (
    <>
      <InputGroup>
        <Form.Control
          className={props.font}
          type="text"
          aria-label="With textarea"
          placeholder={props.placeholder}
          value={props.text1}
          onChange={handleChange}
          // style={{ fontSize: `${props.fontSize}px` }}
        />

        {/* <Button
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
        </Button> */}
      </InputGroup>
      <Form.Select size="sm" onChange={handleFontFamilyChange}>
        <option value="">Change Font</option>
        <option value={"impact"}>Impact</option>
        <option value={"arial"}>Arial</option>
      </Form.Select>
    </>
  );
}

export default Input;
