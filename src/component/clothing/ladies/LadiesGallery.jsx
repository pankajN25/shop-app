import { Link } from "react-router-dom";
import ladiesWear from "../../../database/clothing/ladiesWear";
import LadiesCard from "./LadiesCard";

const LadiesGallery = () => {
    console.log("Ladies data:", ladiesWear); // Debugging
    
    if(!ladiesWear || ladiesWear.length === 0){
        return <h2>No ladies clothes available</h2>;
    }

    return (
        <div className="container">
            <div className="row gap-3">
                {ladiesWear.map((item) => (
                    <div className="col" key={item.id}>
                        <Link 
                            to={`/cloths/ladies/${item.id}`} 
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <LadiesCard ladiesWear={item} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LadiesGallery;