import { Link, useParams } from 'react-router-dom'
import './Card.css'
import { useEffect, useState } from 'react'
import defaultImage from '../../assets/default.jpg'
import {getSingleCharacter} from '../ApiCalls'


const Card = ()=> {
    const { id } = useParams()
    const [selectedChar, setSelectedChar] = useState([])

    const [userList, setUserList] = useState(()=> {
        const savedCharacters = localStorage.getItem('army');
        return savedCharacters ? JSON.parse(savedCharacters) : []
    })

    const [addChar, setAddChar] = useState(false)

    const addCharacterBtn = ()=> {
        if(!userList.some(char => char.id === selectedChar.id)) {
            const list = [...userList, selectedChar]
            setUserList(list)
            localStorage.setItem('army', JSON.stringify(list))
            setAddChar(true)
        }
    }


    useEffect(()=> {
        getSingleCharacter(id)
        .then(data => setSelectedChar(data))
        .catch(err => console.log(err))
    }, [id])

    return (
        <div className='char-container'>
            <div className='char-card'>
                <div className='char-pro'>
                    <img src={selectedChar.image || defaultImage} alt={`Head shot of ${selectedChar.name}`} />
                    <h1>{selectedChar.name}</h1>
                </div>
                <div className='char-details'>
                    <p>{selectedChar.overview}</p>
                    <div className='sorted-list'>
                        {selectedChar.loyalty && selectedChar.loyalty.length > 0 ? (
                            <p>
                                {selectedChar.loyalty.map((group, index) => (
                                    <span key={index}>
                                        <Link to={`/loyalty/${group}`}>{group}</Link>
                                        {index < selectedChar.loyalty.length - 1 && ', '}
                                    </span>
                                ))}
                            </p>
                        ) : (
                            <p>No loyalty groups</p>
                        )}
                    </div>
                    {!addChar ? (
                        <button onClick={addCharacterBtn}>Add</button>
                    ) : (
                        <p>Character added to your army</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card