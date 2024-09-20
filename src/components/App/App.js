import './App.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Titlepage from '../Titlepage/Titlepage';
import SortedHouse from '../SortedHouse/SortedHouse';
import Card from '../Card/Card';
import { getCharacters } from '../ApiCalls';
import { useState, useEffect } from 'react';
import Loyalty from '../Loyalty/Loyalty';
import ErrorHandling from '../ErrorHandling/ErrorHandling';
import ArmyCard from '../ArmyCard/ArmyCard';
import Door from '../Door/Door';

const App = ()=> {

    const [apiData, setApiData] = useState([])
    const [error, setError] = useState('')

    useEffect(()=> {
        getCharacters()
        .then(data => setApiData(data))
        .catch(error => setError('Sorry something went wrong, please try again', error))
    }, [])

    return (
        <main className='out-cont'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Door />} />
                <Route path='/home' element={<Titlepage apiData={apiData} error={error} /> } />
                <Route path='/:house' element={<SortedHouse />} />
                <Route path='/character/:id' element={<Card />} />
                <Route path='/loyalty/:loyaltyGroup' element={<Loyalty />} />
                <Route path='/mylist' element={<ArmyCard />} />
                <Route path='*' element={<ErrorHandling error={error}/>} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App;