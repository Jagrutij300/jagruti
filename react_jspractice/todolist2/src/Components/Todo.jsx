import React from "react"

const Todo=(props) =>{

   let inputval="";

    return (
    <div style={{border:"spx solid blue",backgroundColor:"gray",display:"flex",justifyContent:"center",alignItems:"center",height:"300px",width:"300px",}}> 
     
<input onChange={function(event){
    inputval = event.target.value
}}/>
<button onClick={function(event){
    props.setArr([...props.task,inputval])
}}>Add</button>
<div>
    {props.task.map(function(ele){
    return <p style={{marginLeft:"20px",color:"black",fontWeight:"900",fontSize:"20px"}}>
        {ele.id}
    {ele.todos}
    </p>
    })}
</div>

    </div>                                                                                                                                          
    )
}
export default Todo;