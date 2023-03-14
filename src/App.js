
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Pokemon from './Pages/Pokemon';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokemon/:id" element={<Pokemon/>}/>
      
        
    
      </Routes>

    </BrowserRouter>
  );
}

export default App;
