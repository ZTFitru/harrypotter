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

    useEffect(()=> {
        sortedByHouseCall(house)
        .then(data => setApiHouse(data))
        .catch(err => setError('Sorry, something went wront', err))
    }, [house])

    if(error) {
        (
            <div className='error-message'>
            <h2>{error}</h2>
            <p>Please try refreshing the page</p>
        </div>
        )
    }

    return (
        <div className='data-container' style={{backgroundColor: houseColors[house]}}>
            <h1>{house.toUpperCase()}</h1>
            <div className='house-container'>
                {apiHouse.length > 0 ? (
                    apiHouse.map(student => (
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