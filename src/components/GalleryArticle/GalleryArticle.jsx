import { Link } from 'react-router-dom';

function GalleryArticle({id, title, cover}) {
    return (
      <Link to={`/accomodationpage/${id}`}>
        <div className="article">
          <img src={cover} className="img--gallery" alt="image" />
          <h2>{title}</h2>
        </div>
      </Link>
    );
  }
  
  export default GalleryArticle;