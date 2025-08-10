import React, { useState, useEffect} from 'react';
import Winner from './Winner';

const Dice = () => {
const[player1,setPlayer1]=useState(0);
const[player2,setPlayer2]=useState(0);
const[player1image,setPlayer1image]=useState("./images/dice1.png")
const[player2image,setPlayer2image]=useState("./images/dice1.png")
const[percent1,setPercent1]=useState(0);
const[percent2,setPercent2]=useState(0);
const[buvalu,setBuvalu]=useState(true);
const [showModal, setShowModal] = useState(false);
const [winner, setWinner] = useState("");



useEffect(()=>{
  if(percent1>=50){
    setWinner("Player 1");
    setShowModal(true);

  }else if(percent2>=50){
    setWinner("Player 2");
    setShowModal(true);
  }
},[percent1,percent2])

function handleReset() {
    setPlayer1(0);
    setPlayer2(0);
    setPlayer1image("./images/dice1.png");
    setPlayer2image("./images/dice1.png");
    setPercent1(0);
    setPercent2(0);
    setBuvalu(true);
    setWinner("");
    setShowModal(false);
  }

function handleClick1(){
  const value = Math.floor(Math.random()*6+1);
  setPlayer1(player1+value);
  setPercent1(percent1+value);
  setBuvalu(!buvalu);
  setPlayer1image(`./images/dice${value}.png`)

}
function handleClick2(){
  const value = Math.floor(Math.random()*6+1);
  setPlayer2(player2+value);
  setPercent2(percent2+value);
  setBuvalu(!buvalu);
  setPlayer2image(`./images/dice${value}.png`)
}

  return (
    <div>
      <Winner show={showModal} winner={winner} onReset={handleReset} />
    <div className="gridstyle">
      <div className="flestyle">
        <h2>Player1</h2>
         {buvalu ? <img src={player1image} height="auto" width="auto"/>:<img style={{
          filter: "blur(2px)"}}  src={player1image} height="auto" width="auto"/> }
         {buvalu ? <button onClick={handleClick1}>Roll</button>:<button style={{
          filter: "blur(2px)", // blur when disabled
          cursor: "not-allowed",
         }}>Roll</button> }
        </div>
      <div className="flestyle">
        <h2>Player2</h2>
        {buvalu?<img style={{
          filter: "blur(2px)"}} src={player2image} height="auto" width="auto"/>: <img src={player2image} height="auto" width="auto"/>}
        {buvalu ? <button style={{filter: "blur(2px)", // blur when disabled
          cursor: "not-allowed",}}>Roll</button>:<button onClick={handleClick2}>Roll</button> }
      </div>
    </div>

    <div>
      {/* Progress bar1 */}
      <div style={{
        width:"100%",
        height:"25px",
        borderRadius:"20px",
        marginTop:"10px",
        backgroundColor:"#c4919f",
        position:"relative"
        }}>
          <div style={{
            width:`${percent1*2}%`,
            height:"25px",
            borderRadius:"20px",
            backgroundColor:"red",
            transition: "width 0.3s ease-in-out"
          }}>
            <span
            style={{
              position:"absolute",
              top:"0",
              left:"50%",
              color:"black"
            }}
            >{percent1}</span>
          </div>
      </div>
    </div>

    {/* Progress bar2 */}
    <div style={{
        width:"100%",
        height:"25px",
        borderRadius:"20px",
        marginTop:"10px",
        backgroundColor:"#c4919f",
        position:"relative"
        }}>
          <div style={{
            width:`${percent2*2}%`,
            height:"25px",
            borderRadius:"20px",
            backgroundColor:"red",
            transition: "width 0.3s ease-in-out"
          }}>
            <span
            style={{
              position:"absolute",
              top:"0",
              left:"50%",
              color:"black"
            }}
            >{percent2}</span>
          </div>
      </div>

    </div>
  )
}

export default Dice
