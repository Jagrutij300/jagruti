 import Todo from "./Components/Todo"
import { useEffect,useState } from "react";


function App(){
 //let arr =["task 1","task 2","task 3"]
  // normal eriable change in state variable
let temparr=[]

useEffect(()=>{
  fetch("https://dummyjson.com/todos")
  .then(async(res)=>{
    let temp = await res.json();
    setArr(temp.todos)
    // console.log(temparr);
  })
  .catch(
    err=>{
      console.log(err);
    }
  )
},[]

)
 

const [arr , setArr] = useState(temparr)
  return(
    <div style={{border:"5px solid red", width:"500px",height:"400px",  backgroundColor: "pink"  }}>
    <Todo task={arr} setArr={setArr}/>
    </div>
  )
}

export default App;