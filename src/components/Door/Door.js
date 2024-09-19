import { useState } from 'react'
import './Door.css'
import { useNavigate } from 'react-router-dom';


const Door = ()=> {
    const [isOpen, setIsOpen] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const navigate = useNavigate()

    const doorStatus = ()=> {
        if(!isOpen) {
            setIsOpen(true)
            setTimeout(()=> {
                navigate('/home')
            }, 800)
        } else {
            setIsOpen(false)
            setShowBtn(false)
        }
    }
    return (
        <section className='door-cont'>
            <div className='backDoor'>
                <div className={`door ${isOpen ? 'doorOpen' : ''}`} onClick={doorStatus}></div>
                <div className={`new-door ${isOpen ? 'new-doorOpen' : ''}`} onClick={doorStatus}></div>
            </div>
            {showBtn && (
                <div className='img-cont' onClick={doorStatus}>
                </div>
            )}
            <h1>OPEN THE DOOR TO ENTER</h1>
        </section>
    )
}

export default Door