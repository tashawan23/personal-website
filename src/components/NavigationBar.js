import './NavigationBar.css';
import {Link} from 'react-scroll'
import { useState, useEffect } from 'react';

function NavigationBar() {
    const [menu, setMenu] = useState(true)
    const showMenu = () => {
        if (window.innerWidth <= 767) {
          setMenu(false);
        } else {
          setMenu(true);
        }
      };
    
      useEffect(() => {
        showMenu();
      }, []);
    
      window.addEventListener('resize', showMenu);

    return(
        <nav className="nav-bar">
            <div className="nav-name">Tasha Wan</div>
            {menu && <ul className="nav-menu">
                <li className="nav-links">
                    <Link to="experience" spy={true} smooth={true}>Experience</Link>
                </li>
                <li className="nav-links">
                    <Link to="projects" spy={true} smooth={true}>Projects</Link>
                </li>
                <li className="nav-links">
                <Link to="skills" spy={true} smooth={true}>Skills</Link>
                </li>
            </ul>}
        </nav>
    )
}

export default NavigationBar