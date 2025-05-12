import laptops from "../../../database/electronic/laptop_data";

import { Link } from "react-router-dom";
import LaptopCard from "./LaptopCard";

const LaptopGallary = () => {
  console.log("Laptops data:", laptops); // Debugging

  if (!laptops || laptops.length === 0) {
    return <h2>No laptops available</h2>;
  }

  return (
    <div className="container">
      <div className="row">
        {laptops.map((laptop) => (
          <div className="col" key={laptop.id}>
            <Link to={`detail/${laptop.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <LaptopCard laptop={laptop} />
            </Link>
            {/* <p>Generated Link: /laptops/{laptop.id}</p> Debugging */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaptopGallary;
