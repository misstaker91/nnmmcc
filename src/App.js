import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Narozeniny from './routes/Narozeniny/narozeniny';
import { UserAuthContextProvider } from './context/UserAuthContext';
import NavBar from './routes/NavBar/NavBar';


function App() {
  

 

  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='/narozeniny' element={<Narozeniny />} />
        </Route>
      </Routes>
    </UserAuthContextProvider>
   
  )
}

export default App;
