import { Link, useParams } from 'react-router-dom';
import './Loyalty.css'
import { useEffect, useState } from 'react';
// import {sortedByGroup} from '../ApiCalls'
import defaultImage from '../../assets/default.jpg'

const sortedColors = {
    "Dumbledore's Army": '#003366',
    "Death Eaters": '#2F4F4F',
    "Order of the Phoenix": '#800000',
    "Hogwarts School of Witchcraft and Wizardry": '#F0EAD6',
    "British Ministry of Magic": '#003300'
}

const sortedFonts = {
    "Dumbledore's Army": '#C0C0C0',
    "Death Eaters": '#006400',
    "Order of the Phoenix": '#FFD700',
    "Hogwarts School of Witchcraft and Wizardry": '#4B4B4B',
    "British Ministry of Magic": '#FFFFFF'
}

const Loyalty = () => {
    const { loyaltyGroup } = useParams()
    const [apiCharacters, setApiCharacters] = useState([])

    useEffect(()=> {
        // sortedByGroup(loyaltyGroup)
        fetch(`https://harry-potter-api-gray.vercel.app/api/v1/characters?loyalty=${loyaltyGroup}`)
        .then(res => res.json())
        .then(data => {
            const sortedChar = data.filter(char => char.loyalty.includes(loyaltyGroup))
            setApiCharacters(sortedChar)
        })
        .catch(err => console.log('Error:', err))
    }, [loyaltyGroup])

    return (
        <div className='sort-outter' style={{backgroundColor: sortedColors[loyaltyGroup]}}>
            <h1>Characters in {loyaltyGroup}</h1>
            <div className='sort-list'>
                {apiCharacters.map((char)=> (
                     <Link to={`/character/${char.id}`} className='sort-char' key={char.id}>
                        <img src={char.image || defaultImage} alt='' />
                        <h2 style={{color: sortedFonts[loyaltyGroup]}}>{char.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Loyalty;