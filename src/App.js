import logo from './logo.svg';
import './App.css';
import  spatula from './assets/CaHphgF.png';
import StripeContainer from './components/StripeContainer'
import { useState } from 'react';

function App() {
    const [showItem, setShowItem] = useState(false)

    return (
        <div className="App">
            <h1>The Spatula Store</h1>
            {showItem ? <StripeContainer /> : <>
                <h3>$10.00</h3>
                <img src={spatula} alt="Spaluta" />
                <button onClick={() => setShowItem(true)}>Purchased Spatula</button>
            </>}
        </div>
    );
}

export default App;
