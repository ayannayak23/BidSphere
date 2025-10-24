import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from './NavBarData';

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return(
        <>
            <div className='heading'>
                <h1 className="header-title">BidSphere</h1>
                <a className='hamburger' onClick={toggleNav}>
                    <i className="fa-solid fa-bars"></i>
                </a>
                <nav className={isNavOpen ? 'nav-open' : ''}>
                    <ul>
                        {links.map((link) =>{
                            const { id, url, text, className } = link;
                            return(
                                <li key={id}>
                                    <NavLink to={url} state={className}>{text}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default NavBar;