import { Outlet } from "react-router-dom";

const Kid = () => {
    return (
        <div className="kid-section">
            <h1>Kids' Collection</h1>
            <Outlet/>
        </div>
    );
};

export default Kid;