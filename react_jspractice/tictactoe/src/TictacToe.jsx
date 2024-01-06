import React, { useState } from "react";
import "./Tictactoe.css"
import checkWinner from "./utilites/checkWinner";

const Tictactoe = () =>{
    let arr =[".",".",".",".",".",".",".",".",".",]}
    
    

    const [stateArr, setStateArr] = useState(arr);
    const [player, setplayer] = useState("x");
    const [Win, setWin]= useState(false);
  
    return (
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
    {stateArr.map(function(ele,ind)
      {
       return Win === false ? <button 
            onClick={function(){
            console.log("function working")
            let result =false;
            if(stateArr[ind]===".")
            {
           stateArr[ind]= player;
            result = checkWinner(player, stateArr);
            setWin(result);
           setplayer(player==="x"?"o":"x")
            }

         
          
            setStateArr([...stateArr])
           
        }}
        
        
        >{ele}
        </button>:<button>{ele}</button>
   })}
   {Win===true?<p>player{player === "x"?"o":"x"}has won the match</p>:<></>}


</div>
    )
}

export default Tictactoe;