import { Link, Outlet } from "react-router-dom";

const Clothing = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm center" style={{ height: "40px",alignItems:"center",textAlign:"center" }}>
        <div className="container-fluid">
         
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white fw-bold" to="men">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="ladies">
                Ladies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="kid">
                Kids
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      
      <Outlet />
    </div>
  );
};

export default Clothing;

// new useContext