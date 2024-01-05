import React from "react";
import "../Style/Bio.css";

const Bio  = () =>{
    return ( 
        <div className="Bio_Container">
        <img  style ={{width:"40vw"}} src="https://w.forfun.com/fetch/49/49d60f5e9e3d49a372f7134fd3f1c01d.jpeg?w=300" alt="imageofuser"/>
       <div style ={{width:"40vw"}}>
        <h1>My Bio</h1>
        <p>
            A simple paragraph is a group of related sentences that discuss one main idea. Here's an example: 
        </p>
        <p>
            "The sun was shining brightly in the clear blue sky as the birds chirped happily in the trees.
        </p>
       </div>
       
       
        </div>
    )
}
export default Bio;