import './App.css';
import RenderNames from './components/RenderNames';
import Button from './components/Button';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import CurrentTime from './components/CurrentTime';
import RouteSettings from './routes/RouteSettings';
export default function App() {
  const color = "red";
  return (
    <div>
      <p style={{color: color}}>--- 1 Exercise ---</p>
      <Button label="submit"/>

      <p style={{color: color}}>--- 2 Exercise ---</p>
      <Counter />

      <p style={{color: color}}>--- 3 Exercise ---</p>
      <LoginForm />
      
      <p style={{color: color}}>--- 4 Exercise ---</p>
      <RenderNames />

      <p style={{color: color}}>--- 5 Exercise ---</p>
      <CurrentTime />

      <p style={{color: color}}>--- 6 Exercise ---</p>
      <p style={{color: "green"}}>Type in url "/for-us" or "/contacts" and see the difference</p>
      <RouteSettings />
    </div>
  );
}


