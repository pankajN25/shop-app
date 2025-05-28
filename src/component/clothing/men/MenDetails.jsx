import { useParams, useNavigate } from "react-router-dom";
import menWear from "../../../database/clothing/menWear";
import { useContext } from "react";
import { ShopContext } from "../../../App";

const MenDetails = () => {
  const { addItemToCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const { men_id } = useParams();

  console.log("URL ID:", men_id); // Check the ID from URL
  console.log("All men's wear:", menWear); // Verify data is loaded

  const menItem = menWear.find((item) => item.id === parseInt(men_id));

  if (!menItem) {
    return (
      <div className="container mt-4">
        <h2>Product not found! (ID: {men_id})</h2>
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate("/elec/men")}
        >
          Back to Men's Collection
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={menItem.image} 
            alt={menItem.name} 
            className="img-fluid rounded"
            style={{ maxHeight: "500px" }}
          />
        </div>
        <div className="col-md-6">
          <h2>{menItem.brand} {menItem.name}</h2>
          <p className="h4 text-primary">Price: ₹{menItem.price}</p>
          
          <div className="my-3">
            <button 
              className="btn btn-primary" 
              onClick={() => addItemToCart(menItem)}
            >
              Add to Cart
            </button>
          </div>

          <h4>Specifications:</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Fabric:</strong> {menItem.specification.fabric}
            </li>
            <li className="list-group-item">
              <strong>Fit:</strong> {menItem.specification.fit}
            </li>
            <li className="list-group-item">
              <strong>Color:</strong> {menItem.specification.color}
            </li>
            <li className="list-group-item">
              <strong>Available Sizes:</strong> {menItem.specification.size.join(', ')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenDetails;