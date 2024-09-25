import { useEffect, useState } from 'react';
import defaultImage from '../../assets/default.jpg'
import './Titlepage.css';
import { Link } from 'react-router-dom';
import searchLogo from '../../assets/search.png'
import PropTypes from 'prop-types'
import Pagination from '../Pagination/Pagination';



const Titlepage = ({ apiData, error }) => {
    const [userInput, setUserInput] = useState('');
    const [filteredChar, setFilteredChar] = useState([]);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const charPerPage = 40;
    const [userFont, setUserFont] = useState('harry-potter')

    const searchIconClicked = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    useEffect(() => {
        if (apiData) {
            const result = apiData.filter(char =>
                char.name.toLowerCase().includes(userInput.toLowerCase().trim())
            );
            setFilteredChar(result);
            setCurrentPage(1)
        }
    }, [userInput, apiData]);

    const indexOfLastChar = currentPage * charPerPage;
    const indexOfFirstChar = indexOfLastChar - charPerPage;
    const currentChars = filteredChar.slice(indexOfFirstChar, indexOfLastChar);

    const paginate = (number) => {
        setCurrentPage(number)
    }

    const chnageFont = (userFont)=> {
        // setUserFont(userFont)
        setUserFont(prevFont => (prevFont === 'harry-potter' ? 'arial' : 'harry-potter'))
    }

    return (
        <div className={`out-cont ${userFont}`} >
            {error && <p className='error-message'>{error}</p>}
            <div className='search-container'>
                <img src={searchLogo} alt='search icon' className='search-icon' onClick={searchIconClicked} />
                {isSearchVisible && (
                    <div className='search-box'>
                        <form>
                            <label htmlFor='input-search'>
                                <input
                                    type='text'
                                    className='input-search'
                                    placeholder='Search Character...'
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                />
                            </label>
                        </form>
                    </div>
                )}
            </div>

            <div className='font-selector'>
                <button onClick={chnageFont}>Toogle Font</button>
                {/* <button onClick={() => chnageFont('arial')}>Arial</button> */}
            </div>
            <div className='char-list'>
                {currentChars.length > 0 ? (
                    currentChars.map((char) => (
                        <Link to={`/character/${char.id}`} className='char' key={char.id}>
                            <img src={char.image || defaultImage} alt={`Headshot of ${char.name}`} />
                            <p>{char.name}</p>
                        </Link>
                    ))
                ) : (
                    <h1 className='no-char-message'>Sorry, can't find that character.</h1>
                )}
            </div>
            <Pagination 
                charPerPage={charPerPage} 
                total={filteredChar.length} 
                paginate={paginate} 
                currentPage={currentPage} 
            />
        </div>
    );
};

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