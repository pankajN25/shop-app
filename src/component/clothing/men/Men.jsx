import { Outlet } from "react-router-dom";
const Men = ()=>{
    return(
        <div className="men-section">
            <h1>Men's Collection</h1>
        <Outlet/>
        </div>
    )
    
}

export default Men;