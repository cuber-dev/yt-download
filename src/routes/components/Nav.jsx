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
    return ( <>
        <nav className="nav">
            <a className="logo" href="/"><h1>MAX <i className="fa-solid fa-bolt"></i> </h1></a>
            <div className="links"> 
                <ul>
                    {links.map((link, index) => (
                        <li key={index} >
                            <NavLink to={link.link} className={'nav-link'} >{link.name}</NavLink>
                        </li>
                    ))}
                </ul> 
            </div>
        </nav>
    </> );
}

export default Nav;

