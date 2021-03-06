import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css';
// components
import Button from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  }
  const closeMobileMenu = () => {
    setClick(false);
  }
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);


  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* <Link to='/myapp/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link> */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <AnchorLink offset='800' href="#home" className='nav-links' onClick={closeMobileMenu}>
                Home
              </AnchorLink>
            </li>
            <li className='nav-item'>
              <AnchorLink
                href='#about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </AnchorLink>
            </li>
            <li className='nav-item'>
              <AnchorLink
                href='#works'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Works
              </AnchorLink>
            </li>

            <li>
              <AnchorLink
                href='#contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar
