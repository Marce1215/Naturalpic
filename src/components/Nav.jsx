import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-success">
            <div className="container-fluid">

                <Link className="navbar-brand text-light" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <dic className="menu">
                        <ul className="navbar-nav justify-content-center">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/favorites">Favoritos</Link>
                            </li>
                        </ul>
                    </dic>
                </div>
            </div>
        </nav>
           
        
    )
}
export default Nav