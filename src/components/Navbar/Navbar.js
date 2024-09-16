import './Navbar.css'
import menuIcon from '../../assets/menu-logo.png'
import { Link, NavLink } from 'react-router-dom';
import mainLogo from '../../assets/home-logo.jpg'

const Navbar = ()=> {



    return (
        <header className='nav-cont'>
            <nav className='navbar'>
                <Link to={'/'} >
                    <img src={mainLogo} alt='Harry Potter Logo' />
                </Link>
                <div className='nav-right'>
                <ul role='tablist' id='icon-links'>
                    <NavLink to={'/gryffindor'} className={'nav-g'}>Gryffindor</NavLink>
                    <NavLink to={'/hufflepuff'} className={'nav-h'}>Hufflepuff</NavLink>
                    <NavLink to={'/ravenclaw'} className={'nav-r'}>Ravenclaw</NavLink>
                    <NavLink to={'/slytherin'} className={'nav-s'}>Slytherin</NavLink>
                </ul>
                <img className='nav-icon' src={menuIcon} alt='' />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;