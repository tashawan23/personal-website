import './NavigationBar.css';
import {Link} from 'react-scroll'

function NavigationBar() {
    return(
        <nav className="nav-bar">
            <div className="nav-name">Tasha Wan</div>
            <ul className="nav-menu">
                <li className="nav-links">
                    <Link to="experience" spy={true} smooth={true}>Experience</Link>
                </li>
                <li className="nav-links">
                    <Link to="projects" spy={true} smooth={true}>Projects</Link>
                </li>
                <li className="nav-links">
                <Link to="skills" spy={true} smooth={true}>Skills</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar