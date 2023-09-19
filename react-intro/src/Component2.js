import { useState } from "react";
import "./App.css"

const Component2 = () => {
    const [textColor, setTextColor] = useState("black")
    
    return(
        <div className="App">
            <button onClick={() => {
                setTextColor(textColor === "black" ? "red" : "black");
            }}>change Color</button>
            <h1 style={{color: textColor}}>My name is sanskar</h1>
        </div>
    );
}
 
export default Component2;