import { useEffect, useRef, useState } from 'react';
import { NavLink } from "react-router-dom";


function Nav() {
    const links = [
        { 
            name: "Home",
            link: "/"
        },
        {
            name : 'About',
            link : '/about'
        },
        {
            name : 'History',
            link : '/history'
        },
        {
            name : 'Author',
            link : '/author'
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
            <a className="logo" href="/"><h1>MAX <i className="fa-solid fa-bolt"></i> </h1></a>
            <div className={`links ${isNavActive && 'active'}`}> 
                <ul>
                    {links.map((link, index) => (
                        <li key={index} >
                            <NavLink to={link.link} className={'nav-link'} >{link.name}</NavLink>
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

