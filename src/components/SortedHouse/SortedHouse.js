import { useEffect, useState } from 'react';
import './SortedHouse.css'
import { Link, useParams } from 'react-router-dom';
import defaultImage from '../../assets/default.jpg'
import {sortedByHouseCall} from '../ApiCalls'

const houseColors = {
    gryffindor: '#ae0001',
    hufflepuff: '#ecb939',
    ravenclaw: '#222f5b',
    slytherin: '#2a623d'
}

const SortedHouse = ()=> {

    const { house } = useParams()
    const [apiHouse, setApiHouse] = useState([]);
    const [error, setError] = useState('')
    const [userFont, setUserFont] = useState('harry-potter')
    const [charSearch, setCharSearch] = useState('')

    useEffect(()=> {
        sortedByHouseCall(house)
        .then(data => setApiHouse(data))
        .catch(error => setError('Sorry, something went wront'))
    }, [house])

    if(error) {
        (
            <div className='error-message'>
            <h2>{error}</h2>
            <p>Please try refreshing the page</p>
        </div>
        )
    }

    const chnageFont = (userFont)=> {
        setUserFont(prevFont => (prevFont === 'harry-potter' ? 'arial' : 'harry-potter'))
    }

    const searchForChar = (event)=> {
        setCharSearch(event.target.value)
    }

    const filteredChar = apiHouse.filter(student => 
        student.name.toLowerCase().includes(charSearch.toLowerCase())
    )

    return (
        <div className={`data-container ${userFont}`} style={{backgroundColor: houseColors[house]}}>
            <h1>{house.toUpperCase()}</h1>
            <div className='font-selector'>
                <button onClick={chnageFont}>Toogle Font</button>
            </div>
            <div className='search-box-house'>
                <form>
                    <label htmlFor='input-search'>
                        <input
                            type='text'
                            className='input-search'
                            placeholder='Search Character...'
                            value={charSearch}
                            onChange={searchForChar}
                        />
                    </label>
                </form>
            </div>
            <div className='house-container'>
                {filteredChar.length > 0 ? (
                    filteredChar.map(student => (
                        <Link to={`/character/${student.id}`} key={student.id} className="card">
                            <img src={student.image || defaultImage} alt={`Headshot of ${student.name}`} />
                            <h2>{student.name}</h2>
                        </Link>
                        ))
                    ) : (
                        <p>No students found for this house.</p>
                    )}
            </div>
        </div>
    )
}

export default SortedHouse;