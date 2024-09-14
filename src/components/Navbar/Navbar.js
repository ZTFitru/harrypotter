import './Navbar.css'
import logo from '../../assets/mainLogo-main.png'
import { Link } from 'react-router-dom';

const Navbar = ()=> {

    return (
        <header className='nav-cont'>
            <nav className='navbar'>
                <Link to={'/'} >
                    <img src={logo} alt='Harry Potter Logo' />
                </Link>
                <ul role='tablist'>
                    <li className='nav-g'>Gryffindor</li>
                    <li className='nav-h'>Hufflepuff</li>
                    <li className='nav-r'>Ravenclaw</li>
                    <li className='nav-s'>Slytherin</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;