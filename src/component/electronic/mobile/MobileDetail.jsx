import { useParams, useNavigate } from "react-router-dom";
import mobiles from "../../../database/electronic/mobile_data";
import { useContext} from "react";
import { ShopContext } from "../../../App";

const MobileDetail = () => {
  const{addItemToCart} = useContext(ShopContext)

  const navigate = useNavigate();
  const { mbl_id } = useParams();

  console.log("URL ID:", mbl_id); // Check the ID from URL
  console.log("All mobiles:", mobiles); // Verify data is loaded

  const mobileObj = mobiles.find((mbl) => mbl.id === parseInt(mbl_id));

  if (!mobileObj) {
    return (
      <div>
        <h2>Mobile not found! (ID: {mbl_id})</h2>
        <button onClick={() => navigate("/elec/mobile")}>Back</button>
      </div>
    );
  }

  return (
    <div>
      <img src={mobileObj.image} alt={mobileObj.name} />
      <h2>{mobileObj.brand} {mobileObj.name}</h2>
      <p>Price: ₹{mobileObj.price}</p>
       <div><button className="btn btn-primary" onClick={()=>addItemToCart(mobileObj)}>Add to Cart</button></div>
      <p>RAM: {mobileObj.specification.ram}</p>
      <p>Storage: {mobileObj.specification.storage}</p>
      <p>Primary Camera: {mobileObj.specification.camera.primary}</p>
      <p>Front Camera: {mobileObj.specification.camera.front}</p>
    </div>
  );
};

export default MobileDetail;


// import { useParams } from "react-router-dom";
// import mobiles from "../../../database/electronic/mobile_data";

// const MobileDetail = () => {
//   const { id } = useParams();
//   const mobile = mobiles.find((m) => m.id.toString() === id); // Ensure ID is matched correctly

//   if (!mobile) {
//     return <h2>Mobile not found</h2>;
//   }

//   return (
//     <div>
//       <h1>{mobile.brand} {mobile.name}</h1>
//       <img src={mobile.image} alt={mobile.name} style={{ height: "200px" }} />
//       <p>Price: ₹{mobile.price}</p>
//     </div>
//   );
// };

// export default MobileDetail;

// import { useParams } from "react-router-dom";
// import mobiles from "../../../database/electronic/mobile_data";

// const MobileDetail = () => {
//   const { id } = useParams();
//   const mobile = mobiles.find((m) => m.id.toString() === id); // Convert m.id to string

//   if (!mobile) {
//     return <h2>Mobile not found</h2>;
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}>
//       <h1>{mobile.brand} {mobile.name}</h1>
//       <img src={mobile.image} alt={mobile.name} style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
//       <p><strong>Price:</strong> ₹{mobile.price}</p>
//       <p><strong>RAM:</strong> {mobile.ram}</p>
//       <p><strong>Storage:</strong> {mobile.storage}</p>
//       <p><strong>Battery:</strong> {mobile.battery}</p>
//       <p><strong>Processor:</strong> {mobile.processor}</p>
//       <p><strong>Camera:</strong> {mobile.camera}</p>
//     </div>
//   );
// };

// export default MobileDetail;
