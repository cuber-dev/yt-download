import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    const links = [
        {
            name : 'Author',
            link : 'https://github.com/cuber-dev'
        },
        {
            name : 'Contact',
            link : '#contact'
        }
    ]
    const [isNavActive,setIsNavActive] = useState(false);
    const toggleNavRef = useRef(null);
    const handleToggleClick = () => {
        if(window.innerWidth <= 425){
            setIsNavActive(!isNavActive);
        } 
    }

    return ( <> 
        <nav className="nav">
            <NavLink className="logo" to={"/"}><h1>MAX <i className="fa-solid fa-bolt"></i> </h1></NavLink>
            <div className={`links ${isNavActive && 'active'}`}> 
                <ul>
                    {links.map((link, index) => (
                        <li key={index} >
                            <a href={link.link} className={'nav-link'} >{link.name}</a>
                        </li>
                    ))}
                </ul> 
            </div>
            <button className="toggle-nav" ref={toggleNavRef} onClick={handleToggleClick}>
                <i className={ isNavActive ? `fa-solid fa-xmark` : `fa-solid fa-bars`}></i>
            </button>
        </nav>
    </> );
}

export default Nav;

