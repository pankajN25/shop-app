import { Link } from "react-router-dom";
import menWear from "../../../database/clothing/menWear";
import MenCard from "./MenCard";

const MenGallery = () => {
    console.log("MenWear data:", menWear); // Debugging
    
    if(!menWear || menWear.length === 0){
        return <h2>No Men's Clothes available</h2>;
    }

    return (
        <div className="container">
            <div className="row gap-3">
                {menWear.map((item) => (
                    <div className="col" key={item.id}>
                        <Link 
                            to={`/cloths/men/${item.id}`} 
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <MenCard menwear={item} />
                        </Link>
                        <p>Generated Link: /menClothes/{item.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenGallery;