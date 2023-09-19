import Axios from "axios";
import { useEffect, useState } from "react";

const FetchAge = () => {

    const [name, setName] = useState("");
    const [ageValue, setAgeValue] = useState(null);
    const fetchData = () =>{
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>{
            setAgeValue(res.data);
        });
    };

    return ( 
        <div className="App">
            <input placeholder="Ex: Sanskar..."
                onChange={(event) =>{
                    setName(event.target.value);
                }}
            />
            <button onClick={fetchData}>Predict Age</button>
            <h1>Name: {ageValue?.name}</h1>
            <h1>Predicted Age: {ageValue?.age}</h1>
            <h1>Entries: {ageValue?.count}</h1>
        </div>
     );
}
 
export default FetchAge;