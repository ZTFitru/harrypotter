import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import mainLogo from '../../assets/home-logo.jpg'

const Navbar = ({ hasSeenDoor })=> {



    return (
        <header className='nav-cont'>
            <nav className='navbar'>
                <Link to={hasSeenDoor ? '/home' : '/'} >
                    <img src={mainLogo} alt='Harry Potter Logo' />
                </Link>
                <div className='nav-right'>
                <ul className={`icon-links `}>
                    <li><NavLink to={'/mylist'} className={'nav-a'}>3 Vs. 3</NavLink></li>
                    <li><NavLink to={'/gryffindor'} className={'nav-g'}>Gryffindor</NavLink></li>
                    <li><NavLink to={'/hufflepuff'} className={'nav-h'}>Hufflepuff</NavLink></li>
                    <li><NavLink to={'/ravenclaw'} className={'nav-r'}>Ravenclaw</NavLink></li>
                    <li><NavLink to={'/slytherin'} className={'nav-s'}>Slytherin</NavLink></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
