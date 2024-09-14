import { useEffect, useState } from 'react';
import { getCharacters } from '../ApiCalls';
import defaultImage from '../../assets/default.jpg'
import './Titlepage.css';


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