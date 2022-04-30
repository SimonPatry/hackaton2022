import { Link } from "react-router-dom";
import logo from '../../assets/img/raisin.png';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" width="30" height="32" className="d-inline-block align-text-top mx-2"/>
                    Vign'UP
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/library" className="nav-link">Documentation</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/scoring" className="nav-link">Scoring</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;