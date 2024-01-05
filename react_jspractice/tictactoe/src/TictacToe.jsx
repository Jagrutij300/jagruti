import React from "react";
import "./Tictactoe.css"
const Tictactoe = () =>{
    let arr =[".",".",".",".",".",".",".",".",".",]
    return(
<div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
    {arr.map(function(ele){
        return <button>{ele}</button>
    })}


</div>
    )
}
export default Tictactoe