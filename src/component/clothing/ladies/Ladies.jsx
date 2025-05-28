import { Outlet } from "react-router-dom";
const Ladies = ()=>{
    return(
        <div className="men-section">
            <h1>Ladies's Collection</h1>
        <Outlet/>
        </div>
    )
    
}

export default Ladies;