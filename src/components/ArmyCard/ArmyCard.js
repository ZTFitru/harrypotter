import { useEffect, useState } from 'react';
import './ArmyCard.css'
import { Link } from 'react-router-dom';
import defaultImage from '../../assets/default.jpg'

const ArmyCard = ()=> {

    const [list, setList] = useState([])

    useEffect(()=> {
        const userList = localStorage.getItem('army')
        if(userList) {
            setList(JSON.parse(userList))
        }
    }, [])

    const deleteCharacterBtn = (id)=> {
        const removedChar = list.filter(char => char.id !== id)
        setList(removedChar)
        localStorage.setItem('army', JSON.stringify(removedChar))
    }

    return (
        <div className='army-outter'>
            <h1>Your Army</h1>
            {list.length > 0 ? (
                <ul className='army-cont'>
                    {list.map((char)=> (
                        <li key={char.id} className='army-list'>
                            <Link to={`/character/${char.id}`} className='army-list'>
                                <img src={char.image || defaultImage} alt={`Headshot of ${char.name}`} />
                                <p>{char.name}</p>
                            </Link>
                            <button onClick={()=> deleteCharacterBtn(char.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <h2 className='empty-message'>No characters in your list</h2>
            )}
        </div>
    )
}

export default ArmyCard;