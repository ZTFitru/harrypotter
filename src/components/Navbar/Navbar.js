import './Navbar.css'
import logo from '../../assets/mainLogo-main.png'

const Navbar = ()=> {

    return (
        <header className='nav-cont'>
            <nav className='navbar'>
                <div>
                    <img src={logo} alt='Harry Potter Logo' />
                </div>
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