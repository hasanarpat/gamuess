import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='navbar'>
      <nav>
        <div className='logo gradient-text'>
          <NavLink to='/'>
            <h1>Gamuess</h1>
          </NavLink>
        </div>
        <div className='menu-icon'>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 512 512'
            xmlns='http://www.w3.org/2000/svg'
            className='hamburger'
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <path d='M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z'></path>
          </svg>
          <div className={openMenu ? 'menu open' : 'menu'}>
            <div className='wrapper'>
              <ul>
                <li onClick={() => setOpenMenu(false)}>
                  <NavLink to='/' className='gradient-text'>
                    Home
                  </NavLink>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                  <NavLink to='/classic' className='gradient-text'>
                    Classic
                  </NavLink>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                  <NavLink to='/infinite' className='gradient-text'>
                    Infinite
                  </NavLink>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                  <NavLink to='/art' className='gradient-text'>
                    Art
                  </NavLink>
                </li>
              </ul>
              <div onClick={() => setOpenMenu(false)} className='close'>
                x
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
