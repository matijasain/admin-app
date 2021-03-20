import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import "./styles/menu.css";

const Menu:FC = () => {
  return (
    <div className="ui secondary  menu">
      <NavLink className="item" to={'/users'} activeClassName="active">
        Users
      </NavLink>
      <NavLink className="item" to={'/posts'} activeClassName="active">
        Posts
      </NavLink>
      <div className="right menu">
        <Link to={'/'}>Logout</Link>
      </div>
    </div>
  );
};

export default Menu;
