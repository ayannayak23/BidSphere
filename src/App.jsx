import { useState } from 'react';
import ItemList from './items/ItemList';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className='heading'>
        <h1 className="header-title">BidSphere</h1>
        <a className='hamburger' onClick={toggleNav}>
          <i className="fa-solid fa-bars"></i>
        </a>
        <nav className={isNavOpen ? 'nav-open' : ''}>
          <ul>
            <li><a href="#home">TBD</a></li>
            <li><a href="#about">TBD</a></li>
            <li><a href="#contact">TBD</a></li>
          </ul>
        </nav>
      </div>
      <ItemList />
    </>
  )
}

export default App;
