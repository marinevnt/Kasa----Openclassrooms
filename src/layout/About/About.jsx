import Banner from '../../components/Banner/Banner';
import bannerImg from '../../Resources/banner-apropos.png';

import Collapse from '../../components/Collapse/Collapse';
import Arrow from '../../Resources/arrow.png';



function About() {
    return (
      <div className="about">
        <Banner img={bannerImg} />
        <Collapse text= "Fiabilité" img={Arrow} className="dropdown-about" content={["Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."]} />
        <Collapse text= "Respect" img={Arrow} className="dropdown-about" content=  {["La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]}/>
        <Collapse text= "Service" img={Arrow} className="dropdown-about" content= {["La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
        <Collapse text= "Sécurité" img={Arrow} className="dropdown-about" content= {["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]} />
      </div>
    );
  }
  export default About;