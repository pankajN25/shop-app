// // import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

// const MobileCard = ({ mobile }) => {
//   return (
//     <Link to={`/mobiles/${mobile.id}`} className="text-decoration-none"> {/* Link to details page */}
//       <div className="card shadow-sm p-2" style={{ width: "18rem" }}>
//         <img
//           className="card-img-top"
//           src={mobile.image}
//           alt={mobile.name}
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//         <div className="card-body text-center">
//           <h4 className="card-title">{mobile.brand} {mobile.name}</h4>
//           <h5 className="card-subtitle text-muted">&#8377; {mobile.price}</h5>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default MobileCard;
const MobileCard = ({ mobile }) => {
  return (
    <div className="card shadow-sm p-2" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={mobile.image}
        alt={mobile.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h4 className="card-title">{mobile.brand} {mobile.name}</h4>
        <h5 className="card-subtitle text-muted">&#8377; {mobile.price}</h5>
      </div>
    </div>
  );
};
export default MobileCard;