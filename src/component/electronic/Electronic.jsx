// const Electronic = () => {
//   return (
//     <div>
//       <h1>Electronic</h1>
//     </div>
//   );
// };
// export default Electronic;

// import { Link, Outlet } from "react-router-dom";


import { Link, Outlet, useNavigate } from "react-router-dom";

const Electronic = () => {
  const navigate=useNavigate();
  return (
    <div>
      
      <div>
      <button className="btn btn-light me-2" onClick={()=>navigate(-1)}>Back</button>
      </div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style={{ height: "40px" }}>
        <div className="container-fluid">
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="mobile">Mobile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="laptop">Laptop</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet /> 
    </div>
  );
};

export default Electronic;