import { Link } from "react-router-dom"
import "./Menu.css"


function HeaderMenu () {

    return (
        
        <header className="formato">
        
       <nav className="Link">

        <Link to="/"> Home </Link>
        <Link to="/sobre"> Sobre </Link>
        <Link to="/contato"> Contato </Link>
       </nav>
      
       </header>
    )
}

export default HeaderMenu;