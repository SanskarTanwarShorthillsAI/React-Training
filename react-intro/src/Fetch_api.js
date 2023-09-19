import Axios from "axios";
import { useEffect, useState } from "react";

const Fetching = () => {
    const [catFact, setCatFact] = useState("");
    // fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) =>{
    //     console.log(data);
    // });

    const fetchCatFact = () =>{
        Axios.get("https://catfact.ninja/fact").then((res) => {
        setCatFact(res.data.fact);
        });
    }

    useEffect(() => {
        fetchCatFact();        
    }, []);
    
    return ( 
        <div className="App">
            <button onClick={fetchCatFact}>Generate cat Fact</button>
            <p>{catFact}</p>
        </div>
     );
}
 
export default Fetching;