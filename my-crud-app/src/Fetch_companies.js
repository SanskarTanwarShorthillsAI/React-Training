import Axios from "axios"


const Companies = () => {
    const fetchData = () =>{
        Axios.get("https://103b-116-74-59-5.ngrok-free.app/api/v1/companies/").then((res) =>{
            console.log(res.data);
        })
    }
    
    return ( 
        <div className="companies">
            <button onClick={fetchData}>Click</button>
        </div>
     );
}
 
export default Companies;