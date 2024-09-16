// import { useEffect, useState } from 'react';
// import { getCharacters } from '../ApiCalls';
import { useEffect, useState } from 'react';
import defaultImage from '../../assets/default.jpg'
import './Titlepage.css';
import { Link } from 'react-router-dom';
import searchLogo from '../../assets/search.png'


const Titlepage = ({apiData})=> {

    const [userInput, setUserInput] = useState('')
    const [filteredChar, setFilteredChar] = useState([])
    const [isSearchVisiable, setIsSearchVisiable] = useState(false)

    const searchIconClicked = ()=> {
        setIsSearchVisiable(!isSearchVisiable)
    }


    useEffect(()=> {
        if(apiData) {
            const result = apiData.filter(char => 
                char.name.toLowerCase().includes(userInput.toLowerCase().trim())
            )
            setFilteredChar(result)
        }
    }, [userInput, apiData])

    return (
        <section className='out-cont'>
            <div className='search-container'>
                <img src={searchLogo} alt='search icon' className='search-icon' onClick={searchIconClicked} />
                {isSearchVisiable && (
                    <div className='search-box'>
                        <label htmlFor='input-search'>
                            <input 
                                type='text'
                                className='input-search'
                                placeholder='Search Character...'
                                value={userInput}
                                onChange={(e)=> setUserInput(e.target.value)}
                            />
                        </label>
                    </div>
                )}
                
            </div>
            <div className='char-list'>
                {filteredChar.length > 0 ? (
                    filteredChar.map((char)=> (
                        <Link to={`/character/${char.id}`} className='char' key={char.id}>
                            <img src={char.image || defaultImage} alt= {char.name} />
                            <p>{char.name}</p>
                        </Link>
                    ))
                ) : (
                    <p className='no-char-message'>Sorry, can't find that character.</p>
                )}
            </div>
        </section>
    )
}

export default Titlepage;