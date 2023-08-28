import {useParams} from 'react-router-dom';
import dbJson from '../../data/db.json';
import Collapse from '../Collapse/Collapse';
import Arrow from '../../Resources/arrow.png';

import {Navigate} from 'react-router-dom';

function AccomodationInfos() {
    let { accomodationId } = useParams();
    const selectedAccomodation = dbJson.find(item => item.id === accomodationId);
    

    if (!selectedAccomodation) {
        // Rediriger vers une autre route
        return <Navigate to="/error"/>
    }

    const accomodationTitle = selectedAccomodation.title;
    const accomodationLocation = selectedAccomodation.location;
    const accomodationTags = selectedAccomodation.tags;
    const accomodationHost = selectedAccomodation.host;

    const hostName = accomodationHost.name
    const hostPicture = accomodationHost.picture;

    const accomodationRating = selectedAccomodation.rating;

    const accomodationDescription = [selectedAccomodation.description];
    const accomodationEquipement = selectedAccomodation.equipments;

    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;
      
        const stars = [];
      
        for (let i = 0; i < fullStars; i++) {
          stars.push(<i key={i} className="fa-solid fa-star full-star"></i>);
        }
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<i key={`empty-${i}`} className="fa-solid fa-star empty-star"></i>);
        }
      
        return stars;
      }

      
    return (
        <div>
            <div className='accomodation-infos'>
                <div className='accomodation-resume'>
                    <h1 className='title-accomodation'>{accomodationTitle}</h1>
                    <p>{accomodationLocation}</p>
                    <ul> {accomodationTags.map((tag, id) => (
                            <li key={id}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className='accomodation-host'>
                    <div className='host'>
                        <p>{hostName}</p>
                        <img src={hostPicture} alt={hostName} />
                    </div>
                    <div className="star-rating">
                        {generateStars(accomodationRating)}
                    </div>
                </div>
            </div>
            <div className='accomodation-specificities'>
                <Collapse text="Description" className="dropdown-accomodation" img={Arrow} content={accomodationDescription}/>
                <Collapse text="Equipements" className="dropdown-accomodation" img={Arrow} content={accomodationEquipement}/>
            </div>
        </div>
    );
  }
  
  export default AccomodationInfos;