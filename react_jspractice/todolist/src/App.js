//How to create a component
//functional component
//First letter should be capital of a component
import "./App.css"
import Bio from "./Componenet/Bio";
import Navigation from "./Componenet/Navigation";
import Main from "./Componenet/Main";

function App(){
  //Const App()=>{} (arrow function)
  //JSX => javascript xml(simple language)
  //take one parent in that contain two componenet like h1 and img
  
  return(
    <div>
      {/* <h1>This is my Application</h1> */}
      <Navigation/>
      <Main/>
      <Bio/>
    </div>
    
  )
 
}
export default App;

