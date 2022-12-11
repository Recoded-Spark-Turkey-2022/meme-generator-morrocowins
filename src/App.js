import './App.css';
import {useState, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"
import Stack from 'react-bootstrap/Stack';
import Input from './Components/Input';
import Image from './Components/Image';
import Button from './Components/button.jsx';


function App() {
  
 const [image, setImage] = useState([])


  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then((result) => {
      const random_number = Math.floor(Math.random() * 99) + 1;
      setImage(result.data.memes[random_number])})

  },[])
  console.log(image)
  return (
    <Container className="d-flex justify-content-between border align-self-center">
    <Image key={image.id} src={image.url}/>
    <Stack gap={5} className="mx-auto border">
      <Input placeholder="first"/>
      <Input placeholder="second"/>
    </Stack>
    <Button />

    </Container>
  );
}

export default App;
