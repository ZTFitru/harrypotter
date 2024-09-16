import './Navbar.css'
import logo from '../../assets/mainLogo-main.png'
import { Link, NavLink } from 'react-router-dom';
import mainLogo from '../../assets/home-logo.jpg'

const Navbar = ()=> {

    return (
        <header className='nav-cont'>
            <nav className='navbar'>
                <Link to={'/'} >
                    <img src={mainLogo} alt='Harry Potter Logo' />
                </Link>
                <ul role='tablist'>
                    <NavLink to={'/gryffindor'} className={'nav-g'}>Gryffindor</NavLink>
                    <NavLink to={'/hufflepuff'} className={'nav-h'}>Hufflepuff</NavLink>
                    <NavLink to={'/ravenclaw'} className={'nav-r'}>Ravenclaw</NavLink>
                    <NavLink to={'/slytherin'} className={'nav-s'}>Slytherin</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;