import React from "react"
import "../Style/Main.css"

const Main = () => {
    return (
        <div className="Main_Container">
            <h1 className="heading1_Main">I Am James Anderson </h1>
            <h1>And I Am a Web developer</h1>
            <h5>this is from <span style={{color:"green"}}>color lib</span></h5>
            {/* here only change color lib colour using span and giv here style */}

        </div>
    )
}
export default Main