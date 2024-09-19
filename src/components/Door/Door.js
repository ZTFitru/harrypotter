import { useState } from 'react'
import './Door.css'
import { Link } from 'react-router-dom'

const Door = ()=> {
    const [isOpen, setIsOpen] = useState(false)
    const [showBtn, setShowBtn] = useState(false)

    const doorStatus = ()=> {
        if(!isOpen) {
            setIsOpen(true)
            setTimeout(()=> setShowBtn(true), 500)
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
                <div className='btn-cont'>
                    <Link to={'/home'}>
                    <button>
                        <div className='fancy'></div>
                        <span className='text'>Enter</span>
                    </button>
                    </Link>
                </div>
            )}
            <h1>OPEN THE DOOR TO ENTER</h1>
        </section>
    )
}

export default Door