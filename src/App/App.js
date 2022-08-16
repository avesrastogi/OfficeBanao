import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Body from './Body/Body';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Body />
      </div>
    </Router>
  );
}

export default App;
