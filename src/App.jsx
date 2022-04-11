import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [add,Setadd]=useState(76)
  const [addfor,Setaddfor]=useState(2);
  const [addsi,Setaddsix]=useState(50);


  const [addwiki,Setwiki]=useState(0);

  const [addballi,Setball]=useState(8.2)
const addrun=()=>{
Setadd(add+1);

}

const addfour=()=>{
Setaddfor(addfor+4)
}

const addsix=()=>{
  Setaddsix(addsi+6)
}


const addWicket=()=>{
  Setwiki(addwiki+1)
}


const addball=()=>{
  Setball(addballi+0.1)
}
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{[add+addfor+addsi]}
          <h1 className="scoreCount">
            {
              <h1 className='{(add+addfor+addsi)>100 ? "India Won" : "Fail"}'>{add+addfor+addsi}</h1>

              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{addwiki}
          <h1 className="wicketCount">
            {
              <h1> Wicket:{addwiki}</h1>
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{addballi}
          <h1 className="overCount">
            {

              <h1 className={addballi}>Ball Number is{addballi}</h1>
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
       
        <button className="addScore1" onClick={addrun}>Add 1</button>
        <button className="addScore4" onClick={addfour}>Add 4</button>
        <button className="addScore6" onClick={addsix}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={addWicket}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={addball}>Add 1</button>
      </div>

      <h1 className='{{add+addfor+addsi}>100 ? "India Won" : ""}'>India won </h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>

  );
}

export default App;
