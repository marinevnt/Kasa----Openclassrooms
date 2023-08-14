import GalleryArticle from '../GalleryArticle/GalleryArticle';

function Gallery({jsonData}) {
    return (
      <div className="gallery">
         {jsonData.map((imageData) => (
            <GalleryArticle 
              key={imageData.id} 
              id={imageData.id}
              title={imageData.title}
              cover={imageData.cover} />
      ))}
      </div>
    );
  }
  
  export default Gallery;