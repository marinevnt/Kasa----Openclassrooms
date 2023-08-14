import Header from '../Header/Header';
import logoHeader from '../../Resources/logo-header.png';
import Footer from '../Footer/Footer';
import logoFooter from '../../Resources/logo-footer.png';
import { Link } from 'react-router-dom';


function Error() {
    return (
        <div>
            <Header li1= {<Link to="/">Accueil</Link>} li2= {<Link to="/about">A propos</Link>} img={logoHeader} />
            <div className="error-content">
                <h1>404</h1>
                <h2>Oups ! La page que vous demandez n'existe pas.</h2>
                <p>
                    <Link to="/">Retourner sur la page d'accueil</Link>
                </p>
            </div>
            <Footer text = "© 2020 Kasa. All rights reserved" img={logoFooter}/>
        </div>
    )
}
 
export default Error