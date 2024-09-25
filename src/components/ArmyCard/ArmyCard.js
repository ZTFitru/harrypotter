import { useEffect, useState } from 'react';
import './ArmyCard.css'
import { Link } from 'react-router-dom';
import defaultImage from '../../assets/default.jpg'

const ArmyCard = ()=> {

    const [list, setList] = useState([])
    const [userFont, setUserFont] = useState('harry-potter')


    useEffect(()=> {
        const userList = localStorage.getItem('army')
        if(userList) {
            setList(JSON.parse(userList))
        }
    }, [])

    const chnageFont = (userFont)=> {
        setUserFont(userFont)
    }

    const deleteCharacterBtn = (id)=> {
        const removedChar = list.filter(char => char.id !== id)
        setList(removedChar)
        localStorage.setItem('army', JSON.stringify(removedChar))
    }

    return (
        <div className={`army-outter ${userFont}`}>
            <h1>Your Army</h1>
            <div className='font-selector'>
                <button onClick={()=> chnageFont('harry-potter')}>Harry Potter</button>
                <button onClick={() => chnageFont('arial')}>Arial</button>
            </div>
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