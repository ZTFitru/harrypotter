import { useEffect, useState } from 'react';
import './ArmyCard.css'

const ArmyCard = ()=> {

    const [list, setList] = useState([])

    // useEffect(()=> {
    //     const userList = JSON.parse(localStorage.getItem('characterList'));
    //     if(userList) {
    //         setList(userList)
    //     }
    // }, [])
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
            <h1>Somthing something</h1>
            <div className='army-cont'>
                {list.map((char, index)=> {
                    return <div className='army-list' key={index}>
                        <img src={char.image} alt='' />
                        <p>{char.name}</p>
                        <button onClick={()=> deleteCharacterBtn(char.id)}>Remove</button>
                    </div>
                })}
            </div>
            {/* <button onClick={()=> deleteCharacterBtn(char.id)}>Remove</button> */}
        </div>
    )
}

export default ArmyCard;