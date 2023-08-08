import Header from './Header';
import Banner from './Banner';
import bannerImg from '../Resources/banner-img.png';
import logoHeader from '../Resources/logo-header.png';
import Footer from './Footer';
import logoFooter from '../Resources/logo-footer.png';
import Gallery from './Gallery';
import jsonData from '../data/db.json';



function Home() {
  return (
    <div className="home">
      <Header li1= "Accueil" li2= "A propos" img={logoHeader} />
      <Banner text="Chez vous, partout et ailleurs" img={bannerImg} />
    
      <Gallery jsonData={jsonData} />

      <Footer text = "© 2020 Kasa. All rights reserved" img={logoFooter}/>
    </div>
  );
}

export default Home;
