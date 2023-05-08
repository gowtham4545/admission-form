import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form from './Components/Form/Form';
import View from './Components/View/View';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route index element={<Form />} />
                <Route path='/review' element={<View />} />
            </Routes>
        </div>
    );
}

export default App;
