import './App.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Titlepage from '../Titlepage/Titlepage';
import SortedHouse from '../SortedHouse/SortedHouse';
import Card from '../Card/Card';

const App = ()=> {

    return (
        <main className='out-cont'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Titlepage />} />
                <Route path='/:house' element={<SortedHouse />} />
                <Route path='/character/:id' element={<Card />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App;