import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import bannerImg from '../../Resources/banner-apropos.png';
import logoHeader from '../../Resources/logo-header.png';
import Footer from '../Footer/Footer';
import logoFooter from '../../Resources/logo-footer.png';

import { Link } from 'react-router-dom';
import Collapse from '../Collapse/Collapse';
import Arrow from '../../Resources/arrow.png';



function About() {
    return (
      <div className="about">
        <Header li1= {<Link to="/">Accueil</Link>} li2= {<Link to="/about">A propos</Link>} img={logoHeader} />
        <Banner img={bannerImg} />
        <Collapse text= "Fiabilité" img={Arrow} content="Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
        <Collapse text= "Respect" img={Arrow} content= "La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Collapse text= "Service" img={Arrow} content= "La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Collapse text= "Sécurité" img={Arrow} content= "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        <Footer text = "© 2020 Kasa. All rights reserved" img={logoFooter}/>
      </div>
    );
  }
  
  export default About;