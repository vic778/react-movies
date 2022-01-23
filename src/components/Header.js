import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header">
          <nav>
              <ul>
                  <NavLink 
                  to="/" 
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                    ><li>Home</li></NavLink>
                  <NavLink to="/like" 
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                  ><li>Favourites</li></NavLink>
              </ul>
          </nav>
          <h1>React movies</h1>
      </div>
    );
};

export default Header;