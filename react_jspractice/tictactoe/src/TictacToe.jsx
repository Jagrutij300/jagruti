import React, { useState } from "react";
import "./Tictactoe.css"
const Tictactoe = () =>{
    let arr =[".",".",".",".",".",".",".",".",".",]
    
    

    const [stateArr, setStateArr] = useState(arr);
    const [player, setplayer] = useState("x")
    return(
<div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
    {stateArr.map(function(ele,ind){
        return <button 
            onClick={function(){
            console.log("function working");
           
           stateArr[ind]= player;
           setplayer(player==="x"?"o":"x")
            setStateArr([...stateArr])
       
       
       }}
        
        
        >{ele}
        </button>
    })}


</div>
    )
}
export default Tictactoe