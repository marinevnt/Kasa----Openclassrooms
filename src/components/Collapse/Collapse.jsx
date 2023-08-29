import React, { useRef, useState, useEffect } from 'react';

function Collapse(props) {
    const [isContentVisible, showContent] = useState(false);
    const [isRotated, arrowRotated] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [drodpownSize, setDropdownSize] = useState("0px"); // Header Size
    const refHeader = useRef();
    const refContent = useRef();


    useEffect(() => {
      // Fonction à exécuter lorsque la taille de l'écran change
      const handleResize = () => {
        const headerSize = refHeader.current.getBoundingClientRect().height;
        setDropdownSize(`${headerSize}px`);
      };
  
      // Attacher un écouteur d'événement "resize"
      window.addEventListener('resize', handleResize);
  
      // Appeler la fonction initiale
      handleResize();
  
      // Détacher l'écouteur d'événement lors du démontage du composant
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    const dropContent = () => {
        showContent(!isContentVisible);
        arrowRotated(!isRotated);
        setIsDropdownOpen(!isDropdownOpen);

        const headerSize = refHeader.current.getBoundingClientRect().height;
        const contentSize = refContent.current.getBoundingClientRect().height;
        const totalSize = headerSize + contentSize;

        if (!isContentVisible) {
          setDropdownSize(`${totalSize}px`);
          setTimeout(() => {
            setDropdownSize('auto');
          }, 200);
        } else {
          setDropdownSize(`${totalSize}px`);
          setTimeout(() => {
            setDropdownSize(`${headerSize}px`);
          }, 1);
        }
    };

    return (
      <div className={`dropdown ${props.className}`} style={{ height: drodpownSize }}>
        <div ref={refHeader} className="dropdown-header">
          <h2>{props.text}</h2>
          <img onClick={dropContent} src={props.img} className={`arrow ${isRotated ? 'rotate' : ''}`} alt="arrow" />
        </div>
        <ul ref={refContent} className={`dropdown-content ${isDropdownOpen ? 'dropdown-open-animation' : ''}`}>
          {props.content.map((item) => {return <li key={item}>{item}</li>})}
        </ul> 
      </div>
    );
  }

  export default Collapse;


 
 