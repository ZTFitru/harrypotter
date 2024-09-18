import { Link, useParams } from 'react-router-dom';
import './Loyalty.css'
import { useEffect, useState } from 'react';
import {sortedByGroup} from '../ApiCalls'
import defaultImage from '../../assets/default.jpg'

const sortedColors = {
    "Dumbledore's Army": '#0267bf',
    "Death Eaters": '#2F4F4F',
    "Order of the Phoenix": '#800000',
    "Hogwarts School of Witchcraft and Wizardry": '#f5bd02',
    "British Ministry of Magic": '#003300'
}

const sortedFonts = {
    "Dumbledore's Army": '#C0C0C0',
    "Death Eaters": '#02bf02',
    "Order of the Phoenix": '#FFD700',
    "Hogwarts School of Witchcraft and Wizardry": '#d6d2d2',
    "British Ministry of Magic": '#FFFFFF'
}

const Loyalty = () => {
    const { loyaltyGroup } = useParams()
    const [apiCharacters, setApiCharacters] = useState([])

    useEffect(()=> {
        sortedByGroup(loyaltyGroup)
        .then(data => {
            const sortedChar = data.filter(char => char.loyalty.includes(loyaltyGroup))
            setApiCharacters(sortedChar)
        })
        .catch(err => console.log('Error:', err))
    }, [loyaltyGroup])

    return (
        <div className='sort-outter' style={{backgroundColor: sortedColors[loyaltyGroup]}}>
            <h1>{loyaltyGroup}</h1>
            <div className='sort-list'>
                {apiCharacters.map((char)=> (
                     <Link to={`/character/${char.id}`} className='sort-char' key={char.id}>
                        <img src={char.image || defaultImage} alt={`Headshot of ${char.name}`} />
                        <h2 style={{color: sortedFonts[loyaltyGroup]}}>{char.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Loyalty;