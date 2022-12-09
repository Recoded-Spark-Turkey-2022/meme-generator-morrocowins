import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"
// import Image from 'react-bootstrap/Image'
import Input from './Components/Input';
import Image from './Components/Image';
import Button from './Components/button.jsx';


function App() {
  return (
    <Container className="d-flex justify-content-between border">
    <div className='flex-1'>
      <Image
        src= "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"/>
    </div>
    <div className="App flex-1">
      <Input bg = "secondary" placeholder="first"/>
      <Input placeholder="second"/>
      <Button></Button>
      </div>

    </Container>
  );
}

export default App;
