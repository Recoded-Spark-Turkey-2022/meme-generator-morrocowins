import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from 'react';


function Input(props) {
    const [message, setMessage] = useState('');
    const [font, setFontSize] = useState(20);
    
    const handleChange = (event) => {
        event.preventDefault();
      setMessage(event.target.value);
    };

    const convertTextToUpperCase = () => {
        let caps = message.toUpperCase()
        setMessage(caps);
      };
    const increaseFontSize = () => {
        setFontSize(font + 1);
      };
    const decreaseFontSize = () => {
        if (font > 15) {
            setFontSize(font - 1);
          }
      };
    return ( 
        <InputGroup>
        <Form.Control type='text' aria-label="With textarea"
         placeholder={props.placeholder}
         value={message} 
         onChange={handleChange}
         style={{"fontSize" : `${font}px`}} />

        <Button variant="outline-secondary" id="button-addon2" onClick={convertTextToUpperCase}>All Caps</Button>
        <Button variant="outline-secondary" id="" onClick={increaseFontSize}>+</Button>
        <Button variant="outline-secondary" id="" onClick={decreaseFontSize}>-</Button>

      </InputGroup>
     );
}

export default Input;