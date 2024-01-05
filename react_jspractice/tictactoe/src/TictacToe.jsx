import React, { useState } from "react";
import "./Tictactoe.css"
const Tictactoe = () =>{
    let arr =[".",".",".",".",".",".",".",".",".",]}
    
    

    const [stateArr, setStateArr] = useState(arr);
    const [player, setplayer] = useState("x")
    const [win, setWin]= useState(false)
   function checkWinner(player){
     //row 1
     if(stateArr[0]===player && stateArr[1]===player && stateArr[2]===player)
     {
        return true;
     }
     else if(stateArr[1]===player && stateArr[4]===player && stateArr[8]===player){
        return true;
     }
     else if (stateArr[6]===player && stateArr[7]===player && stateArr[8]===player){
        return true;
     }
     else if (stateArr[2]===player && stateArr[4]===player && stateArr[6]===player){
        return true;
     }
     else if (stateArr[0]===player && stateArr[3]===player && stateArr[6]===player){
        return true;
    }
    else if (stateArr[1]===player && stateArr[4]===player && stateArr[7]===player){
    return true;
    }
    else if (stateArr[2]===player && stateArr[5]===player && stateArr[8]===player){
        return true;
        }
   
   return(
<div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
    {stateArr.map(function(ele,ind){
        return win === false?
             <button 
            onClick={function(){
            console.log("function working");
            let result =false;
            if(stateArr[ind]===".")
           stateArr[ind]= player;
            result = checkWinner(player);
            setWin(result);
           setplayer(player==="x"?"o":"x")

         
          
            setStateArr([...stateArr])
           
        }}
        
        
        >{ele}
        </button>:<button>{ele}</button>
   })}
   {win===true?<p>player{player === "x"?"o":"x"}has won the match</p>:<></>}


</div>
    )
}

export default TictacToe;