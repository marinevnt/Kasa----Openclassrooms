import {useParams} from 'react-router-dom';

import dbJson from '../../data/db.json';
import ArrowLeft from '../../Resources/arrow-left.png';
import ArrowRight from '../../Resources/arrow-right.png';

import { useState } from 'react';

function SlideShow () {
    let { accomodationId } = useParams();
    const selectedAccomodation = dbJson.find(item => item.id === accomodationId);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if(!selectedAccomodation)
    {
        return null;
    }

    const imageElements = selectedAccomodation.pictures.map((picture, id) => (
        <img key={id} src={picture} alt="images" className="carrousel-image"/>
    )) ;

    const showNextImage = () => {
        // setCurrentImageIndex(nextIndex);
        if (currentImageIndex < imageElements.length - 1)
        {
            setCurrentImageIndex(currentImageIndex + 1);
        }
        else {
            setCurrentImageIndex(0);
        }
    }

    const showPreviousImage = () => {
        if(currentImageIndex === 0)
        {
            setCurrentImageIndex(imageElements.length - 1)
        }
        else
        {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }

    return (
        <div className="carrousel">
            <div className="carrousel-content">
                {imageElements[currentImageIndex]}
            </div>
                <img src={ArrowLeft} className="arrow-left" onClick={showPreviousImage} 
                    style={{visibility: imageElements.length === 1 ? "hidden" : "none"}}/>
                <img src={ArrowRight} className="arrow-right" onClick={showNextImage}
                    style={{visibility: imageElements.length === 1 ? "hidden" : "none"}}/>
            
            {imageElements.length > 1 && (
                <p className='image-index'>{currentImageIndex + 1}/{imageElements.length}</p>
            )}
        </div>
)}
    
  export default SlideShow;