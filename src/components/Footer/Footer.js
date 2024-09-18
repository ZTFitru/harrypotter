import './Footer.css'
import logo from '../../assets/mainLogo-main.png'

const Footer = ()=> {

    return (
        <div className='footer-cont'>
            <div className='footer'>
                <img src={logo} alt={`Website logo`} />
            </div>
        </div>
    )
}

export default Footer;