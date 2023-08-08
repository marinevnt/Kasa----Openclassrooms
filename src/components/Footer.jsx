function Footer(props) {
    return (
      <div className="footer">
        <img src={props.img} className="logo--footer" alt="logo" />
        <p>{props.text}</p>
      </div>
    );
  }
  
  export default Footer;