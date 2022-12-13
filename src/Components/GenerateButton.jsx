/* eslint-disable no-undef */
import { useEffect } from "react";
import Button from "react-bootstrap/Button"

function GenerateButton(props) {
    // const [text1, setText1] = useState("")
    // const [text2, setText2] = useState("")

    console.log(props.template_id)
    const formData = new FormData();
    formData.append("template_id",props.template_id);
    formData.append("username", "moroco");
    formData.append("password", "bBmnm4Pn9Af4QEj");
    formData.append("text0", props.text1);
    formData.append("text1", props.text2);
    formData.append("font", props.font);

    useEffect(() => {
        (async () => {
            const rawResponse = await fetch('https://api.imgflip.com/caption_image', {
              method: 'POST',
              body: formData
            });
            const content = await rawResponse.json();
            props.imgSrc(content.data.url)
          })();  
    },[props.text1, props.text2, props.font, props.template_id, props])
  
function handleOnChange()
{
  props.setText1(()=>props.text1)
  props.setText2(()=>props.text2)
  props.fontSet(()=>props.font)

}
    return ( 
        <Button onClick={()=> handleOnChange() } variant="primary">Generate</Button>
     );
}

export default GenerateButton;