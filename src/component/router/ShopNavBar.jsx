// import { Link, Outlet } from "react-router-dom";
// import { useContext } from "react";
// import { ShopContext } from "../../App";

// const ShopNavBar = () => {
//    const{cart} = useContext(ShopContext);

//   return (
//     <div>
//       <nav className="bg-light p-3 shadow d-flex justify-content-between">
//         <ul className="d-flex gap-4 list-unstyled mb-0">
//           <li>
//             <Link className="text-dark text-decoration-none fw-bold" to="/">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className="text-dark text-decoration-none fw-bold" to="elec">
//               Electronic
//             </Link>
//           </li>
//           <li>
//             <Link className="text-dark text-decoration-none fw-bold" to="cloths">
//               Clothing
//             </Link>
//           </li>
//         </ul>
//         <ul className="navbar-nav">
//           <li className='nav-item'>
//             <Link className="nav-link text-dark text-decoration-none fw-bold" to="login_register">
//               Login/Register
//             </Link>

//           </li>
         
//         </ul>
//         <ul className="navbar-nav">
//         <li>
//             <Link title="view cart" className="nav-link text-dark position-relative" to='cart'>Cart
//             <span className="badge position-absolute top-0 start-100 bg-success rounded-circle translate-middle p-1 border border-light">{cart.length}</span>
//             </Link>
            
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// export default ShopNavBar;
import { Link, Outlet } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { ShopContext } from "../../App";

const ShopNavBar = () => {
  const { cart } = useContext(ShopContext);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white p-2 shadow-sm sticky-top">
        <div className="container-fluid">
          {/* Brand Logo */}
          <Link className="navbar-brand fw-bold text-primary mx-3" to="/">
            <span className="d-none d-lg-inline">ShopEase</span>
            <i className="bi bi-shop d-lg-none fs-4"></i>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <i className="bi bi-list fs-2"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Left Navigation - Categories */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown mx-1">
                <Link
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  to="#"
                  id="categoriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-grid-fill me-1"></i>
                  <span className="d-none d-lg-inline">Categories</span>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                  <li>
                    <Link className="dropdown-item" to="elec">
                      <i className="bi bi-laptop me-2"></i> Electronics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="cloths">
                      <i className="bi bi-tshirt me-2"></i> Clothing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="phon">
                      <i className="bi bi-phone me-2"></i> Phones
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-house-gear me-2"></i> Home & Kitchen
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-1 d-none d-lg-block">
                <Link className="nav-link" to="deals">
                  <i className="bi bi-lightning-charge me-1"></i> Deals
                </Link>
              </li>
              <li className="nav-item mx-1 d-none d-lg-block">
                <Link className="nav-link" to="newarri">
                  <i className="bi bi-star me-1"></i> New Arrivals
                </Link>
              </li>
            </ul>

            {/* Centered Search Bar */}
            <div 
              className={`navbar-search mx-3 ${searchExpanded ? "expanded" : ""}`}
              ref={searchRef}
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-end-0"
                  placeholder="Search for products..."
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchExpanded(true)}
                />
                <button className="btn btn-primary" type="button">
                  <i className="bi bi-search"></i>
                  <span className="ms-1 d-none d-md-inline">Search</span>
                </button>
                {searchExpanded && searchQuery && (
                  <div className="search-suggestions shadow">
                    <div className="suggestion-item">
                      <i className="bi bi-clock-history me-2"></i>
                      "Laptop" in Electronics
                    </div>
                    <div className="suggestion-item">
                      <i className="bi bi-clock-history me-2"></i>
                      "T-Shirt" in Clothing
                    </div>
                    <div className="suggestion-item">
                      <i className="bi bi-tag me-2"></i>
                      Popular: "Smartphone"
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Navigation - User & Cart */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* User Account Dropdown */}
              <li className="nav-item dropdown mx-1">
                <Link
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  to="#"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <div className="user-avatar">
                    <i className="bi bi-person-circle fs-4"></i>
                  </div>
                  <span className="d-none d-lg-inline ms-1">Account</span>
                </Link>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li>
                    <h6 className="dropdown-header">Welcome to ShopEase!</h6>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="login_register">
                      <i className="bi bi-box-arrow-in-right me-2"></i> Login/Register
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-person-plus me-2"></i> Create Account
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-heart me-2"></i> Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-list-check me-2"></i> Orders
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Shopping Cart */}
              <li className="nav-item mx-1">
                <Link
                  className="nav-link position-relative d-flex align-items-center"
                  to="cart"
                  title="View Cart"
                >
                  <i className="bi bi-cart3 fs-4"></i>
                  {cart.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                      <span className="visually-hidden">items in cart</span>
                    </span>
                  )}
                  <span className="d-none d-lg-inline ms-1">Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Add this CSS to your stylesheet */}
      <style jsx>{`
        .navbar-search {
          flex-grow: 0.5;
          transition: all 0.3s ease;
          position: relative;
        }
        .navbar-search.expanded {
          flex-grow: 1;
        }
        .search-suggestions {
          position: absolute;
          width: 100%;
          background: white;
          z-index: 1000;
          border-radius: 0 0 8px 8px;
          padding: 10px 0;
          margin-top: -1px;
        }
        .suggestion-item {
          padding: 8px 15px;
          cursor: pointer;
        }
        .suggestion-item:hover {
          background: #f8f9fa;
        }
        .user-avatar {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-link {
          transition: all 0.2s ease;
          border-radius: 8px;
          padding: 8px 12px !important;
        }
        .nav-link:hover {
          background: rgba(13, 110, 253, 0.1);
        }
        .dropdown-menu {
          border: none;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-radius: 10px;
        }
      `}</style>

      <Outlet />
    </div>
  );
  
};

export default ShopNavBar;