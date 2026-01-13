import AddCart from "./AddCart";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="header">
    <div className="logo">MyShop</div>
    <nav className="nav-links">
        
    <ul>
      <li>
      <Link to="/">Home</Link>
    </li>
      <li>
        <a href="#">Products</a>
      </li>
    </ul>
  <AddCart/>
    </nav>
 
  </header>
    )

}
export default Header;