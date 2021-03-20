import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// components
import Button from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  }
  const closeModalMenu = () => {
    setClick(false);
  }
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else{
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/myapp" className='navbar-logo' >
            TRAV <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'  } />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/myapp" className='nav-link' onClick={closeModalMenu} >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/myapp/contact" className='nav-link' onClick={closeModalMenu} >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
