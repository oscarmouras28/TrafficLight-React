import { useState } from 'react';
import './App.css';

function App() {
  const [Color, setColor] = useState("TrafficLight orange red green")
  return (
    <div className="App">
      <div>
        <ul className={Color}>
          <li onClick={()=>{setColor("TrafficLight orange redSelected green")}}></li>
          <li onClick={()=>{setColor("TrafficLight orangeSelected red green")}}></li>
          <li onClick={()=>{setColor("TrafficLight orange red greenSelected")}}></li>
        </ul>
        <div style={{clear: "both"}}></div>
      </div>
    </div>
  );
}

export default App;
