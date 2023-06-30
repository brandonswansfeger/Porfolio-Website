import React from "react";
import leftarrow from "../Components/img/leftarrow.PNG"; ;

function LeftArrow() {
  return (
    <div className="arrow-container">
      <div className="arrow has-text-weight-bold is-size-20" style={{width: '40px', height: '40px'}}> 
      <img className="ProjectImage GDPImage" src={leftarrow} alt="Project0" height="auto" width="95%" style={{ textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }} />
       </div>
    </div>
  );
}

export default LeftArrow;