import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navigation = () => (
  <nav id="navigation">
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <NavLink className="link" to="/">Books</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/categories">Categories</NavLink>
      </li>
    </ul>
    <span id="userIcon">
      <ImUser />
    </span>
  </nav>
);
export default Navigation;
