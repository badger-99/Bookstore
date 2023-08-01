import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <NavLink className="link" to="/">Books</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/categories">Categories</NavLink>
      </li>
    </ul>
  </nav>
);
export default Navigation;
