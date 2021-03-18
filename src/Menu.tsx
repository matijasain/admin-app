import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <NavLink to={'/users'} activeClassName="active">
        Users
      </NavLink>
      <NavLink to={'/posts'} activeClassName="active">
        Posts
      </NavLink>
      <div>
        <Link to={'/'}>Logout</Link>
      </div>
    </div>
  );
};

export default Menu;
