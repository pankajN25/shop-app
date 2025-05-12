// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LaptopCard = ({ laptop }) => {
//   const navigate = useNavigate();

//   if (!laptop) {
//     return null;
//   }

//   // Function to handle card click
//   const handleCardClick = () => {
//     navigate(`/laptop/${laptop.id}`); // Redirect to the laptop details page
//   };

//   return (
//     <div className="card pt-2 mt-2" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
//       <img src={laptop.image} alt={laptop.name} className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title">{laptop.name}</h5>
//         <p className="card-text"><strong>Brand:</strong> {laptop.brand}</p>
//         <p className="card-text"><strong>Price:</strong> ₹{laptop.price}</p>
//         <p className="card-text"><strong>Processor:</strong> {laptop.specification.processor}</p>
//       </div>
//     </div>
//   );
// };

// export default LaptopCard;
import React from "react";
import { useNavigate } from "react-router-dom";

const LaptopCard = ({ laptop }) => {
  const navigate = useNavigate();

  if (!laptop) {
    return null;
  }

  // Function to handle button click
  const handleViewDetails = (e) => {
    e.stopPropagation(); // Prevents accidental card click event
    navigate(`/laptops/${laptop.id}`); // Ensure it matches the route path in ShopRouter.js
  };

  return (
    <div className="card pt-2 mt-2">
      <img src={laptop.image} alt={laptop.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{laptop.name}</h5>
        <p className="card-text"><strong>Brand:</strong> {laptop.brand}</p>
        <p className="card-text"><strong>Price:</strong> ₹{laptop.price}</p>
        <p className="card-text"><strong>Processor:</strong> {laptop.specification.processor}</p>

        {/* View Details Button */}
        <button className="btn btn-primary mt-2" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default LaptopCard;

