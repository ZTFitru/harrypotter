import './Navbar.css'
import menuIcon from '../../assets/menu-logo.png'
import closeIcon from '../../assets/close-btn.png'
import { Link, NavLink } from 'react-router-dom';
import mainLogo from '../../assets/home-logo.jpg'
import { useState } from 'react';

const Navbar = ()=> {
    // const [isOpen, setIsOpen] = useState(false)

    // const menuImageSelected = ()=> {
    //     console.log('hi')
    //     setIsOpen(open => !open)
    // }



    return (
        <header className='nav-cont'>
            <nav className='navbar'>
                <Link to={'/'} >
                    <img src={mainLogo} alt='Harry Potter Logo' />
                </Link>
                {/* <img className='nav-icon' src={isOpen ? menuIcon : closeIcon} alt='' onClick={menuImageSelected} /> */}
                <div className='nav-right'>
                <ul className={`icon-links `}>
                    <NavLink to={'/gryffindor'} className={'nav-g'}>Gryffindor</NavLink>
                    <NavLink to={'/hufflepuff'} className={'nav-h'}>Hufflepuff</NavLink>
                    <NavLink to={'/ravenclaw'} className={'nav-r'}>Ravenclaw</NavLink>
                    <NavLink to={'/slytherin'} className={'nav-s'}>Slytherin</NavLink>
                </ul>
                {/* <img className='nav-icon' src={isOpen ? menuIcon : closeIcon} alt='' onClick={menuImageSelected} /> */}
                {/* <img className='nav-icon' src={closeIcon} alt='' /> */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
