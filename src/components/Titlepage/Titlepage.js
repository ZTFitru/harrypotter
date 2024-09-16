import { useEffect, useState } from 'react';
import { getCharacters } from '../ApiCalls';
import defaultImage from '../../assets/default.jpg'
import './Titlepage.css';
import { Link } from 'react-router-dom';


const Titlepage = ()=> {

    const [apiData, setApiData] = useState([])

    useEffect(()=> {
        getCharacters()
        .then(data => setApiData(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <section className='out-cont'>
            <div className='char-list'>
                {apiData.map((char)=> (
                    <Link to={`/character/${char.id}`} className='char' key={char.id}>
                        <img src={char.image || defaultImage} alt={`Image of ${char.name}`} />
                        <p>{char.name}</p>
                    </Link>
                ))}
                {/* {apiData.map((char, index)=> {
                    return <div key={index} className='char'>
                        <img src={char.image || defaultImage} alt={`${char.name}`} />
                        <p>{char.name}</p>
                    </div>
                })} */}
            </div>
        </section>
    )
}

export default Titlepage;