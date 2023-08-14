function Banner(props) {
  return (
    <div className="banner">
      <img src={props.img} className="banner--img" alt="banner" />
      <p>{props.text}</p>
    </div>
  );
}

export default Banner;
