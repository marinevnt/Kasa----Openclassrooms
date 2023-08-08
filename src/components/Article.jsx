function Article(props) {
    return (
      <div className="article">
        <img src={props.cover} className="img--gallery" alt="image" />
        <h2>{props.title}</h2>
      </div>
    );
  }
  
  export default Article;