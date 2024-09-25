import { useEffect, useState } from 'react';
import './ArmyCard.css'
import { Link } from 'react-router-dom';
import defaultImage from '../../assets/default.jpg'
import { getCharacters } from '../ApiCalls'

const ArmyCard = ()=> {

    const [list, setList] = useState([])
    const [userFont, setUserFont] = useState('harry-potter')
    const [challengeChar, setChallengeChar] = useState([])
    const [resultMessage, setResultMessage] = useState('')
    const [hint, setHint] = useState(false)

    const requiredCharIds = ['9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8', '3569d265-bd27-44d8-88e8-82fb0a848374', '4c7e6819-a91a-45b2-a454-f931e4a7cce3']

    const winningChar = 'Molly Weasley'

    const getChallengerChar = async ()=> {
        try {
            const data = await getCharacters()
            const requiredChar = data.filter(char => 
                requiredCharIds.includes(char.id)
            )
            setChallengeChar(requiredChar)
        } catch (error) {
            console.error('Error fetching characters: ', error)
        }
    }

    useEffect(()=> {
        const userList = localStorage.getItem('army')
        if(userList) {
            setList(JSON.parse(userList))
        }

    }, [])

    useEffect(()=> {
        getChallengerChar();
    })

    const chnageFont = (userFont)=> {
        setUserFont(prevFont => (prevFont === 'harry-potter' ? 'arial' : 'harry-potter'))
    }


    const deleteCharacterBtn = (id)=> {
        const removedChar = list.filter(char => char.id !== id)
        setList(removedChar)
        localStorage.setItem('army', JSON.stringify(removedChar))
    }

    const userChallenge = (challenger)=> {
        if(list.some(char => char.name === winningChar)) {
            setResultMessage(`You defeated ${challenger.name}`)
        } else {
            setResultMessage(`You lost to ${challenger.name}`)
        }
    }

    const hintFuntion = ()=> {
        setHint(!hint)
    }

    return (
        <div className={`army-outter ${userFont}`}>
            <h1>Add Up To 3 Characters To Battle</h1>
            <div className='font-selector'>
                <button onClick={chnageFont}>Toogle Font</button>
            </div>
            <button onClick={hintFuntion} className='hint-btn'>
                {hint ? 'Hide Hint' : 'Show Hint'}
            </button>
            {hint && <p className='hint'>Hint: Must have Sister to Fabian and Gideon</p>}
            {list.length > 0 ? (
                <ul className='army-cont'>
                    <div className='army-display'>
                    {list.map((char)=> (
                        <li key={char.id} className='army-list'>
                            <Link to={`/character/${char.id}`} className='army-list'>
                                <img src={char.image || defaultImage} alt={`Headshot of ${char.name}`} />
                                <p>{char.name}</p>
                            </Link>
                            <button onClick={()=> deleteCharacterBtn(char.id)}>Remove</button>
                        </li>
                    ))}
                    </div>
                    <div className='outter-chal'>
                        <h2>Challenge a Character</h2>
                        <div className='challenge-container'>
                            {challengeChar.map(challenger => (
                                <div key={challenger.id} className='challenger-card'>
                                    <img src={challenger.image || defaultImage} alt={`Headshot of ${challenger.name}`} />
                                    <p>{challenger.name}</p>
                                    <button onClick={() => userChallenge(challenger)}>Challenge</button>
                                </div>
                            ))}
                        </div>
                        {resultMessage && <h3 className='result-message'>{resultMessage}</h3>}
                    </div>
                </ul>
            ) : (
                <h2 className='empty-message'>No characters in your list</h2>
            )}
        </div>
    )
}

export default ArmyCard;