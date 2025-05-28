import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../../App";
import kidWear from "../../../database/clothing/kidWear";

const KidDetails = () => {
    const { addItemToCart } = useContext(ShopContext);
    const navigate = useNavigate();
    const { kid_id } = useParams();

    console.log("URL ID:", kid_id);
    console.log("Kids wear data:", kidWear);

    const kidItem = kidWear?.find(item => 
        item.id.toString() ===kid_id
    );

    if (!kidItem) {
        return (
            <div className="container mt-5 text-center">
                <h2 className="text-danger">Product not found!</h2>
                <p>Requested ID: {kid_id}</p>
                <button 
                    className="btn btn-primary mt-3"
                    onClick={() => navigate("/cloths/kids")}
                >
                    Back to Kids Collection
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img 
                        src={kidItem.image} 
                        alt={kidItem.name}
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "500px" }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/default-kid-image.jpg';
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="mb-3">{kidItem.brand}</h1>
                    <h2 className="mb-2 text-muted">{kidItem.name}</h2>
                    <h3 className="text-primary mb-4">Price: ₹{kidItem.price}</h3>
                    
                    <button 
                        className="btn btn-primary mb-4"
                        onClick={() => addItemToCart(kidItem)}
                    >
                        Add to Cart
                    </button>

                    <div className="card">
                        <div className="card-header">
                            <h4>Specifications</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <strong>Age Group:</strong> {kidItem.specification?.ageGroup || "Not specified"}
                            </li>
                            <li className="list-group-item">
                                <strong>Material:</strong> {kidItem.specification?.material || "Not specified"}
                            </li>
                            <li className="list-group-item">
                                <strong>Color:</strong> {kidItem.specification?.color || "Not specified"}
                            </li>
                            <li className="list-group-item">
                                <strong>Sizes:</strong> {kidItem.specification?.size?.join(', ') || "Not specified"}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidDetails;