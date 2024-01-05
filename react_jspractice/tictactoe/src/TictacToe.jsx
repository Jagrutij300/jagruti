import React, { useState } from "react";
import "./Tictactoe.css"
const Tictactoe = () =>{
    let arr =[".",".",".",".",".",".",".",".",".",]
    const [stateArr, setStateArr] = useState(arr);
    return(
<div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
    {stateArr.map(function(ele,ind){
        return <button 
        onClick={function(){
            console.log("function working");
            let temparr = stateArr;
            temparr[ind]= "x"
            setStateArr([...temparr])
        }}
        
        
        >{ele}
        </button>
    })}


</div>
    )
}
export default Tictactoe