import React from 'react';
import Image from "react-bootstrap/Image";
import Stack from 'react-bootstrap/Stack';
  
 function image(props) {
  return (

     <Stack>
      <Image
        width ={600}
        height={500}
        src={props.src}
      />
     </Stack>

  );
}

export default image;