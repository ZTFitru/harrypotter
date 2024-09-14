import './Footer.css'
import logo from '../../assets/mainLogo-main.png'

const Footer = ()=> {

    return (
        <div className='footer-cont'>
            <div className='footer'>
                <img src={logo} alt='Harry Potter Logo' />
            </div>
        </div>
    )
}

export default Footer;