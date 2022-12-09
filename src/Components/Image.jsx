import React from 'react';
import Image from "react-bootstrap/Image";
  
 function image(props) {
  return (
    <div>
      <Image
        src={props.src}
      />
    </div>
  );
}

export default image;