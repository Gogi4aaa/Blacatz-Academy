import Dashboard from './components/Dashboard.js'
import './App.css';
import Graphic from './components/Graphic.js'
import Deposits from './components/Deposits.js'
import Orders from './components/Orders.js';
import Copyright from './components/Copyrights.js';
function App() {
  return (
    <>
      <div>
        <Dashboard />
      </div>
      <div className='all-graphics'>
        <div className='first-second-graphics'>
          <Graphic />
          <Deposits />
        </div>
        <div className='third-graphic'>
            <Orders />
        </div>
      </div>
      <div>
          <Copyright />
      </div>
    </>
  );
}

export default App;
