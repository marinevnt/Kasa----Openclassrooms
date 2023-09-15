import Banner from '../../components/Banner/Banner';
import bannerImg from '../../Resources/banner-img.png';
import Gallery from '../../components/Gallery/Gallery';
import jsonData from '../../data/db.json';


function Home() {
  return (
    <div className="home">
      <Banner text="Chez vous, partout et ailleurs" img={bannerImg} />
    
      <Gallery jsonData={jsonData} />
    </div>
  );
}

export default Home;
