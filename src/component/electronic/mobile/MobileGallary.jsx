
// import mobiles from "../../../database/electronic/mobile_data";

// import { Link } from "react-router-dom";
// import MobileCard from "./MobileCard";
// const MobileGallary = ()=>{
//     const mobileCardlist = mobiles.map(mbl=><div className="col" key={mbl.id}>
        
//         <MobileCard mobile={mbl}/>
//         <Link to ={"detail"+mbl.id}>
//         <MobileCard mobile={mbl}/>
//         </Link>
//     </div>);
//     return(
//         <div className="row">
//             {mobileCardlist}
//         </div>
//     )
    
// };
// export default MobileGallary;
import mobiles from "../../../database/electronic/mobile_data";
import MobileCard from "./MobileCard";
import { Link } from "react-router-dom";

const MobileGallary = () => {
  console.log("Mobiles data:", mobiles); // Debugging

  if (!mobiles || mobiles.length === 0) {
    return <h2>No mobiles available</h2>;
  }

  return (
    <div className="container">
      <div className="row gap-3 ">
        {mobiles.map((mbl) => (
          <div className="col" key={mbl.id}>
            <Link to={`/elec/mobile/mobiles/${mbl.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <MobileCard mobile={mbl} />
            </Link>
            <p>Generated Link: /mobiles/{mbl.id}</p> {/* Debugging */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileGallary;

