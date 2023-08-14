import React, { useState } from 'react';

function Collapse(props) {
    const [isContentVisible, showContent] = useState(false);
    const [isRotated, arrowRotated] = useState(false);

    const dropContent = () => {
        showContent(!isContentVisible);
        arrowRotated(!isRotated);
      };

    return (
      <div className="dropdown-content">
        <div>
          <h2>{props.text}</h2>
          <img onClick={dropContent} src={props.img} className={`arrow ${isRotated ? 'rotate' : ''}`} alt="arrow" />
        </div>
        <div className='text-content'> 
          {isContentVisible && <p>{props.content}</p>}
        </div>
      </div>
    );
  }
  
  export default Collapse;