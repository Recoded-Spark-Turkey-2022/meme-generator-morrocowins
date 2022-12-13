import './App.css';
import {useState, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"
import Stack from 'react-bootstrap/Stack';
import Input from './Components/Input';
import Image from './Components/Image';
import GenerateButton from './Components/GenerateButton.jsx';


function App() {
  
 const [image, setImage] = useState([])
 const [text1, setText1] = useState("first")
 const [text2, setText2] = useState("second")
 const [fontFamily, setFontFamily] = useState("");
//  const [fontSize, setFontSize] = useState(20);



  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then((result) => {
      const random_number = Math.floor(Math.random() * 99);
      setImage(result.data.memes[random_number])})
  },[])
  
  console.log(image)
  return (
    <Container className="d-flex justify-content-between border align-self-center">
    <Image key={image.id} src={image}/>
    <Stack gap={5} className="mx-auto border">
      <Input text={text1} setText={setText1} placeholder="first" font={fontFamily} fontSet={setFontFamily}  />
      <Input text={text2} setText={setText2} placeholder="second" font={fontFamily} fontSet={setFontFamily} />
    </Stack>
    <GenerateButton 
    template_id={image.id}
    imgSrc={setImage}
    text1={text1}
    setText1={setText1}
    text2={text2}
    setText2={setText2}
    font={fontFamily} 
    fontSet={setFontFamily} />

    </Container>
  );
}

export default App;
