// import { useParams } from "react-router-dom";
// import laptops from "../../../database/electronic/laptop_data";
// // import laptops from "../../../database/electronic/laptop_data";

// const LaptopDetails = () => {
//   const { id } = useParams();
//   const laptop = laptops.find((item) => item.id === id);

//   if (!laptop) {
//     return <h2>Laptop not found</h2>;
//   }

//   return (
//     <div className="container mt-4">
//       <h2>{laptop.name}</h2>
//       <img src={laptop.image} alt={laptop.name} className="img-fluid" />
//       <ul className="list-group mt-3">
//         <li className="list-group-item"><strong>Brand:</strong> {laptop.brand}</li>
//         <li className="list-group-item"><strong>Price:</strong> ₹{laptop.price}</li>
//         <li className="list-group-item"><strong>Processor:</strong> {laptop.specification.processor}</li>
//         <li className="list-group-item"><strong>RAM:</strong> {laptop.specification.ram}</li>
//         <li className="list-group-item"><strong>Storage:</strong> {laptop.specification.storage}</li>
//         <li className="list-group-item"><strong>Display:</strong> {laptop.specification.display}</li>
//         <li className="list-group-item"><strong>Battery:</strong> {laptop.specification.battery}</li>
//       </ul>
//     </div>
//   );
// };

// export default LaptopDetails;
import { useParams } from "react-router-dom";
import laptops from "../../../database/electronic/laptop_data";

const LaptopDetails = () => {
  const { id } = useParams();
  console.log("Laptop ID from URL:", id); // Debugging

  // Convert id to number before searching
  const laptop = laptops.find((item) => item.id === parseInt(id, 10));

  console.log("Laptops Data:", laptops); // Debugging
  console.log("Found Laptop:", laptop); // Debugging

  if (!laptop) {
    return <h2>Laptop not found</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>{laptop.name}</h2>
      <img src={laptop.image} alt={laptop.name} className="img-fluid" />
      <ul className="list-group mt-3">
        <li className="list-group-item"><strong>Brand:</strong> {laptop.brand}</li>
        <li className="list-group-item"><strong>Price:</strong> ₹{laptop.price}</li>
        <li className="list-group-item"><strong>Processor:</strong> {laptop.specification.processor}</li>
        <li className="list-group-item"><strong>RAM:</strong> {laptop.specification.ram}</li>
        <li className="list-group-item"><strong>Storage:</strong> {laptop.specification.storage}</li>
        <li className="list-group-item"><strong>Display:</strong> {laptop.specification.display}</li>
        <li className="list-group-item"><strong>Battery:</strong> {laptop.specification.battery}</li>
      </ul>
    </div>
  );
};

export default LaptopDetails;

