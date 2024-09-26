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

    const requiredCharIds = ['efa802c8-ae18-4ae1-a524-49df21d05939', '6afb1960-febd-418d-b604-e50c1b59459b', 'f3c96d16-e0de-4417-9052-5259e6a8e781']

    const winningChars = ['Molly Weasley', 'Harry Potter', 'Hermione Granger']

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
        const allNeededChars = winningChars.every(charName => 
            list.some(char => char.name === charName)
        )
        if(allNeededChars) {
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
            <h1>Choose Wisely: You Need All Three!</h1>
            <div className='font-selector'>
                <button onClick={chnageFont}>Toogle Font</button>
            </div>
            <button onClick={hintFuntion} className='hint-btn'>
                {hint ? 'Hide Hint' : 'Show Hint'}
            </button>
            {hint && (
                <div>
                    <p className='hint'>Hint: Must have the heart of the Burrow!</p>
                    <p className='hint'>Hint: Must have the Wizard with a lightning scar!</p>
                    <p className='hint'>Hint: Must have the brightest witch of her age!</p>
                </div>
            ) }
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