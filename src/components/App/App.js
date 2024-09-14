import { useEffect, useState } from 'react';
import './App.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import defaultImage from '../../assets/default.jpg'

const App = ()=> {

    const [apiData, setApiData] = useState([])

    useEffect(()=> {
        fetch('https://harry-potter-api-gray.vercel.app/api/v1/characters')
        .then(response => response.json())
        .then(data => setApiData(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <section className='out-cont'>
            <Navbar />
            <div className='char-list'>
                {apiData.map((char, index)=> {
                    return <div key={index} className='char'>
                        <img src={char.image || defaultImage} alt={`${char.name}`} />
                        <p>{char.name}</p>
                    </div>
                })}
            </div>
            <Footer />
        </section>
    )
}

export default App;