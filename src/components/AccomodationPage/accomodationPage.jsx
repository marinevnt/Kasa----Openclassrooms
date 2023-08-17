import Header from '../Header/Header';
import logoHeader from '../../Resources/logo-header.png';
import Footer from '../Footer/Footer';
import logoFooter from '../../Resources/logo-footer.png';
import { Link} from 'react-router-dom';
import SlideShow from '../SlideShow/SlideShow';

function AccomodationPage() {
    return (
        <div >
            <Header li1= {<Link to="/">Accueil</Link>} li2= {<Link to="/about">A propos</Link>} img={logoHeader} />
            
            <SlideShow />

            <Footer text = "© 2020 Kasa. All rights reserved" img={logoFooter}/>
        </div>
    );
  }
  
  export default AccomodationPage;