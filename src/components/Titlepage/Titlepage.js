import { useEffect, useState } from 'react';
import defaultImage from '../../assets/default.jpg'
import './Titlepage.css';
import { Link } from 'react-router-dom';
import searchLogo from '../../assets/search.png'
import PropTypes from 'prop-types'


const Titlepage = ({apiData, error})=> {

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
        <div className='out-cont'>
            {error && <p className='error-message'>{error}</p>}
            <div className='search-container'>
                <img src={searchLogo} alt='search icon' className='search-icon' onClick={searchIconClicked} />
                {isSearchVisiable && (
                    <div className='search-box'>
                        <form>
                            <label htmlFor='input-search'>
                                <input 
                                    type='text'
                                    className='input-search'
                                    placeholder='Search Character...'
                                    value={userInput}
                                    onChange={(e)=> setUserInput(e.target.value)}
                                />
                            </label>
                        </form>
                    </div>
                )}
                
            </div>
            <div className='char-list'>
                {filteredChar.length > 0 ? (
                    filteredChar.map((char)=> (
                        <Link to={`/character/${char.id}`} className='char' key={char.id}>
                            <img src={char.image || defaultImage} alt= {`Headshot of ${char.name}`} />
                            <p>{char.name}</p>
                        </Link>
                    ))
                ) : (
                    <h1 className='no-char-message'>Sorry, can't find that character.</h1>
                )}
            </div>
        </div>
    )
}

Titlepage.propTypes = {
    apiData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            house: PropTypes.string.isRequired,
            loyalty: PropTypes.arrayOf(PropTypes.string).isRequired,
            image: PropTypes.string.isRequired
        })
    )
}

export default Titlepage;