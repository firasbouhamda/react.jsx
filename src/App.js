import react from 'react';
import './App.css';
import { stayel } from "./stayel.jsx";


function App() {
  return (
    <div className="App">
      <h1 className="titelRed">My Name is Firas </h1>
      <div stayel={{border:'solid 1px',}}/>
                    <img src="./component/javascript.png" alt="js"/>
            <img src="./component/nod.png" alt="nod"/>

            <p>hello</p>
      <video width="320" height="240" controls >
      <source src="..Videos/video1.mp4" type="video/mp4"/> </video>


    </div>

  );
}

export default App;
