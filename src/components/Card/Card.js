import { Link, useParams } from 'react-router-dom'
import './Card.css'
import { useEffect, useState } from 'react'
import defaultImage from '../../assets/default.jpg'
import {getSingleCharacter} from '../ApiCalls'
// import deathEaters from '../../assets/DeathEaters.jpg'
// import hogwartsSchool from '../../assets/HogwartsSchoolOfWitchcraftAndWizardry.jpg'
// import orderOfPhoenix from '../../assets/OrderOfThePhoenix.jpg'
// import dumbledoreArmy from '../../assets/dumbledoreArmy.webp'

// const loyalImages = {
//     "Death Eaters": deathEaters,
//     "Order of the Phoenix": orderOfPhoenix,
//     "Hogwarts School of Witchcraft and Wizardry": hogwartsSchool,
//     "Dumbledore's Army": dumbledoreArmy
// }


const Card = ()=> {
    const { id } = useParams()
    const [selectedChar, setSelectedChar] = useState([])
    const [userFont, setUserFont] = useState('harry-potter')

    const [userList, setUserList] = useState(()=> {
        const savedCharacters = localStorage.getItem('army');
        return savedCharacters ? JSON.parse(savedCharacters) : []
    })

    const [addChar, setAddChar] = useState(false)

    const addCharacterBtn = ()=> {
        if(userList.length < 3) {
            if(!userList.some(char => char.id === selectedChar.id)) {
                const list = [...userList, selectedChar]
                setUserList(list)
                localStorage.setItem('army', JSON.stringify(list))
                setAddChar(true)
            }
        } else {
            alert('You can only add 3 characters to your list.')
        }
    }


    useEffect(()=> {
        getSingleCharacter(id)
        .then(data => setSelectedChar(data))
        .catch(err => console.log(err))
    }, [id])

    const chnageFont = (userFont)=> {
        setUserFont(userFont)
    }

    return (
        <div className={`char-container ${userFont}`} >
            <div className='char-card'>
                <div className='char-pro'>
                    <img src={selectedChar.image || defaultImage} alt={`Head shot of ${selectedChar.name}`} />
                    <h1>{selectedChar.name}</h1>
                    <div className='font-selector'>
                        <button onClick={()=> chnageFont('harry-potter')}>Harry Potter</button>
                        <button onClick={() => chnageFont('arial')}>Arial</button>
                    </div>
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