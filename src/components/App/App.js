import { useEffect, useState } from 'react';
import './App.css'

const App = ()=> {

    const [apiData, setApiData] = useState([])

    useEffect(()=> {
        fetch('https://harry-potter-api-gray.vercel.app/api/v1/characters')
        .then(response => response.json())
        .then(data => setApiData(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <main className='out-cont'>
            <div className='char-list'>
                {apiData.map((char, index)=> {
                    return <div key={index} className='char'>
                        <img src={char.image} alt='' />
                        <p>{char.name}</p>
                    </div>
                })}
            </div>
        </main>
    )
}

export default App;