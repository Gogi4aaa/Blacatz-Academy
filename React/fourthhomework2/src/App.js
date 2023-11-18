import { useState } from 'react';
import './App.css';
import Login from './components/login';
import FirstPage from './components/FirstPage';
import About from './components/About';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  function checkEmail(email){
    setEmail(email);
    if(password !== ''){
      setIsLogged(true);
    }
  }
  function checkPassword(password){
    setPassword(password);
    if(email !== ''){
      setIsLogged(true);
    }
  }
  return (
    <div>
      
      {!isLogged ? <Login isEmailCorrect={(email)=>checkEmail(email)} isPasswordCorrect={(password)=>checkPassword(password)}/> :<FirstPage />}
    </div>
  );
}
