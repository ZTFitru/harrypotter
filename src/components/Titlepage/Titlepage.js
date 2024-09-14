import { useEffect, useState } from 'react';
import { getCharacters } from '../ApiCalls';
import defaultImage from '../../assets/default.jpg'
import './Titlepage.css';


const Titlepage = ()=> {

    const [apiData, setApiData] = useState([])

    useEffect(()=> {
        // fetch('https://harry-potter-api-gray.vercel.app/api/v1/characters')
        // .then(response => response.json())
        getCharacters()
        .then(data => setApiData(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <section className='out-cont'>
            <div className='char-list'>
                {apiData.map((char, index)=> {
                    return <div key={index} className='char'>
                        <img src={char.image || defaultImage} alt={`${char.name}`} />
                        <p>{char.name}</p>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Titlepage;