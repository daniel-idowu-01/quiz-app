import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Quiz from './components/Quiz';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-teal-50 h-screen">
        <Nav />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/login' element={ <Login />} />
            <Route path='/signup' element={ <SignUp />} />
            <Route path='/quiz' element={ <Quiz />} />
          </Routes> 
    </div>
  );
}

export default App;
