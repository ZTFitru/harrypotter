import { useEffect, useState } from 'react'
import './Door.css'
import { useNavigate } from 'react-router-dom';


const Door = ({ onLandingPage })=> {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const doorStatus = ()=> {
        if(!isOpen) {
            setIsOpen(true)
            setTimeout(()=> {
                navigate('/home')
            }, 800)
        } else {
            setIsOpen(false)
        }
    }

    const openDoor = (e)=> {
        if(e.key === 'Enter') {
            doorStatus()
        }
    }

    const afterLandNav = ()=> {
        onLandingPage()
    }

    useEffect(()=> {
        onLandingPage()

        setTimeout(()=> {
            navigate('/home')
        }, 2000)
    }, [onLandingPage, navigate])


    return (
        <section className='door-cont'>
            <div role='tablist' className='backDoor'>
                <div role='button' tabIndex={0} className={`door ${isOpen ? 'doorOpen' : ''}`} onClick={doorStatus} onKeyDown={openDoor}></div>
                <div className={`new-door ${isOpen ? 'new-doorOpen' : ''}`} onClick={doorStatus}></div>
            </div>
            <div className='img-cont' 
                onClick={doorStatus}>
            </div>
            <h1>OPEN THE DOOR TO ENTER</h1>
            <button onClick={afterLandNav}></button>
        </section>
    )
}

export default Door