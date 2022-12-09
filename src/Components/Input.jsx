import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function input(props) {
    return ( 
        <InputGroup>
        {/* <InputGroup.Text>With textarea</InputGroup.Text> */}
        <Form.Control as="textarea" aria-label="With textarea" placeholder={props.placeholder}/>
      </InputGroup>
     );
}

export default input;