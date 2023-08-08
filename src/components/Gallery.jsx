import Article from './Article';

function Gallery({jsonData}) {
    return (
      <div className="gallery">
         {jsonData.map((imageData) => (
        <Article key={imageData.id} title={imageData.title} cover={imageData.cover} />
      ))}
      </div>
    );
  }
  
  export default Gallery;