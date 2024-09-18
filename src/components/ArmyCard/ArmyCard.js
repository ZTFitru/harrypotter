import { useEffect, useState } from 'react';
import './ArmyCard.css'

const ArmyCard = ()=> {

    const [list, setList] = useState([])

    useEffect(()=> {
        const userList = JSON.parse(localStorage.getItem('characterList'));
        if(userList) {
            setList(userList)
        }
    }, [])

    return (
        <div className='army-outter'>
            <h1>Somthing something</h1>
            {list.map((char, index)=> {
                return <div className='army-list' key={index}>
                    <img src={char.image} alt='' />
                    <p>{char.name}</p>
                </div>
            })}
        </div>
    )
}

export default ArmyCard;