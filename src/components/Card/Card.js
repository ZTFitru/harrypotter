import { useParams } from 'react-router-dom'
import './Card.css'
import { useEffect, useState } from 'react'


const Card = ()=> {
    const { id } = useParams()
    const [selectedChar, setSelectedChar] = useState([])


    useEffect(()=> {
        fetch(`https://harry-potter-api-gray.vercel.app/api/v1/characters/${id}`)
        .then(res => res.json())
        .then(data => setSelectedChar(data))
        .catch(err => console.log(err))
    }, [id])

    return (
        <div className='char-container'>
            <div className='char-card'>
            <div className='char-pro'>
                <img src={selectedChar.image} alt='' />
                <h1>{selectedChar.name}</h1>
            </div>
            <div className='char-details'>
                <p>{selectedChar.overview}</p>
                <p>{selectedChar.loyalty}</p>
            </div>
        </div>
        </div>
    )
}

export default Card