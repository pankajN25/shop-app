import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../../App";
import ladiesWear from "../../../database/clothing/ladiesWear";

const LadiesDetails = () => {
  const { addItemToCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const { ladies_id } = useParams();

  const ladiesItem = ladiesWear?.find(item => item.id.toString() === ladies_id);

  if (!ladiesItem) {
    return (
      <div className="container mt-4">
        <h2>Product not found! (ID: {ladies_id})</h2>
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate("/cloths/ladies")}
        >
          Back to Ladies Collection
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={ladiesItem.image} 
            alt={ladiesItem.name} 
            className="img-fluid rounded"
            style={{ maxHeight: "500px" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/path/to/default-image.jpg';
            }}
          />
        </div>
        <div className="col-md-6">
          <h2>{ladiesItem.brand} {ladiesItem.name}</h2>
          <p className="h4 text-primary">Price: ₹{ladiesItem.price}</p>
          
          <div className="my-3">
            <button 
              className="btn btn-primary" 
              onClick={() => addItemToCart(ladiesItem)}
            >
              Add to Cart
            </button>
          </div>

          <h4>Specifications:</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Fabric:</strong> {ladiesItem.specification?.fabric || "Not specified"}
            </li>
            <li className="list-group-item">
              <strong>Fit:</strong> {ladiesItem.specification?.fit || "Not specified"}
            </li>
            <li className="list-group-item">
              <strong>Color:</strong> {ladiesItem.specification?.color || "Not specified"}
            </li>
            <li className="list-group-item">
              <strong>Available Sizes:</strong> {ladiesItem.specification?.size?.join(', ') || "Not specified"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LadiesDetails;