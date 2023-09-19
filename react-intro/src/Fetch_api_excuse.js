import  Axios  from "axios";
import { useState } from "react";

const GenerateExcuse = () => {

    const [generateExcuse, setGenerateExcuse] = useState("");
    const fetchExcuse = (excuse) =>{
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) =>{
            setGenerateExcuse(res.data[0].excuse);
        })
    }

    return ( 
        <div className="App">
            <h1>Generate an excuse</h1><br/>
            <button onClick={()=>fetchExcuse("party")}>Party</button>
            <button onClick={()=>fetchExcuse("family")}>Family</button>
            <button onClick={()=>fetchExcuse("office")}>Office</button>
            <h2>{generateExcuse}</h2>
        </div>
     );
}
 
export default GenerateExcuse;