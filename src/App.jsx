import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inspection from './pages/Inspection';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/Inspection" element={<Inspection /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;