import { useEffect, useState } from 'react';
import './SortedHouse.css'
import { Link, useParams } from 'react-router-dom';


const houseColors = {
    gryffindor: '#ae0001',
    hufflepuff: '#ecb939',
    ravenclaw: '#222f5b',
    slytherin: '#2a623d'
}

const SortedHouse = ()=> {

    const { house } = useParams()
    const [apiHouse, setApiHouse] = useState([]);

    useEffect(()=> {
        fetch(`https://harry-potter-api-gray.vercel.app/api/v1/characters/house/${house}`)
        .then(response => response.json())
        .then(data => setApiHouse(data))
        .catch(err => console.log(err))
    }, [house])
    return (
        <div className='data-container' style={{backgroundColor: houseColors[house]}}>
            <h1>{house.toUpperCase()}</h1>
            <div className='house-container'>
                {apiHouse.map((student)=> (
                    <Link to={`/character/${student.id}`}
                        key={student.id}
                        className='card'
                        >
                        <img src={student.image  } alt={student.name} />
                        <h2>{student.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SortedHouse;