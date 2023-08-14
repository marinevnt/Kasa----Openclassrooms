import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import bannerImg from '../../Resources/banner-img.png';
import logoHeader from '../../Resources/logo-header.png';
import Footer from '../Footer/Footer';
import logoFooter from '../../Resources/logo-footer.png';
import Gallery from '../Gallery/Gallery';
import jsonData from '../../data/db.json';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div className="home">
      <Header li1= {<Link to="/">Accueil</Link>} li2= {<Link to="/about">A propos</Link>} img={logoHeader} />
      <Banner text="Chez vous, partout et ailleurs" img={bannerImg} />
    
      <Gallery jsonData={jsonData} />

      <Footer text = "© 2020 Kasa. All rights reserved" img={logoFooter}/>
    </div>
  );
}

export default Home;
