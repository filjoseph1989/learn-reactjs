import './App.css';
import {useState} from 'react';
import SourceList from './components/SourceList.js';

const sourceData = [];

function App() {
    const [title, setTitle] = useState({title: ''});

    const titleHandler = (event) => {
        setTitle({title: event.target.value});
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        sourceData.push(title);
        setTitle({title: ''});
    }

    return (
        <div className="App">
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={title.title} onChange={titleHandler} />
                <button type="submit" value="submit">Submit</button>
            </form>
            <ul>
                <SourceList sourceData={sourceData} />
            </ul>
        </div>
    );
}

export default App;
