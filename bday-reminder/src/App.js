import react , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import List from './List';

function App() {

const [people,setPeople] = useState(data);


  return (
    <div className="container">
      <div className="card">
        <h3>{people.length} Birthday's today</h3>
        <List people={people}/>
        <button className="btn" onClick={() => setPeople([])}>Clear All</button>
      </div>      
    </div>
  );
}

export default App;
