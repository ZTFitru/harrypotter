import { useParams } from 'react-router-dom';
import './Loyalty.css'
import { useEffect, useState } from 'react';
// import {sortedByGroup} from '../ApiCalls'

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
        <div>
            <div className='sort-list'>
                {apiCharacters.map((char, index)=> {
                    return <div key={index}>
                        <img src={char.image} alt='' />
                        <p>{char.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Loyalty;