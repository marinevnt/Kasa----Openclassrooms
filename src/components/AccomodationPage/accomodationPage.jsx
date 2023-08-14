import Header from '../Header/Header';
import logoHeader from '../../Resources/logo-header.png';
import Footer from '../Footer/Footer';
import logoFooter from '../../Resources/logo-footer.png';
import { Link } from 'react-router-dom';

import dbJson from '../../data/db.json';

function AccomodationPage(props) {
    const selectedAccomodation = dbJson.find (item => item.id === props.id);

    return (
        <div >
            <Header li1= {<Link to="/">Accueil</Link>} li2= {<Link to="/about">A propos</Link>} img={logoHeader} />
            <div className="carrousel-content">
                <img src={selectedAccomodation.pictures} className="img--carrousel" alt="images" />
            </div>
            <div className='accomodation-properties'>
                <h1>{selectedAccomodation.title}</h1>
                <h2>{selectedAccomodation.location}</h2>
                <p>{selectedAccomodation.tags}</p>
                <p>{selectedAccomodation.host}</p>
                <p>{selectedAccomodation.rating}</p>
            </div>
            <Footer text = "© 2020 Kasa. All rights reserved" img={logoFooter}/>
        </div>
    );
  }
  
  export default AccomodationPage;