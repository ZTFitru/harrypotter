import './Navbar.css'
import logo from '../../assets/mainLogo-main.png'

const Navbar = ()=> {

    return (
        <header className='nav-cont'>
            <nav className='navbar'>
                <div>
                    <img src={logo} alt='Harry Potter Logo' />
                </div>
                <ul>
                    <li>Gryffindor</li>
                    <li>Hufflepuff</li>
                    <li>Ravenclaw</li>
                    <li>Slytherin</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;