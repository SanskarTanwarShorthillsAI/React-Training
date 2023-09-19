import { useState } from "react";
//! 3 stages of React LifieCycle
// Mounting
// unMounting
// updating
const Lifecycle = () => {
    const [showText, setShowText] = useState(false)

    return ( 
        <div className="App">
            <button onClick={()=>{
                setShowText(!showText)
            }}>
                Show Text
            </button>

            {showText && <Text/>}
        </div>
     );
}
 
const Text = () =>{
    const [newText, setNewText] = useState("")
    const handleChange = (event) =>{
        setNewText(event.target.value);
    }
    return(
        <div className="showtext">
            <input type="text" onChange={ handleChange }/>
            <h1>{newText}</h1>
        </div>    
    );
}

export default Lifecycle;