import { Link } from "react-router-dom";
import kidWear from "../../../database/clothing/kidWear";
import KidCard from "./KidCard";

const KidGallery = () => {
    console.log("Kids data:", kidWear);
    
    if(!kidWear || kidWear.length === 0) {
        return <h2>No kids clothes available</h2>;
    }

    return (
        <div className="container">
            <div className="row gap-3">
                {kidWear.map((item) => (
                    <div className="col" key={item.id}>
                        <Link 
                            to={`/cloths/kids/${item.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <KidCard kidWear={item} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KidGallery;