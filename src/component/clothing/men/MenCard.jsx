import menWear from "../../../database/clothing/menWear";

const MenCard = ({ menwear }) => {
    return (
        <div className="cart shadow-sm border border-2 m-2 p-2" 
             style={{width:"200px",height:"350px", cursor: "pointer"}}>
            <img className="card-img-top"
                src={menwear.image}
                alt={menwear.name}
                style={{height:"200px",objectFit:"cover"}} 
            />
            <div className="card-body text-center">
                <h4 className="cart-title">{menwear.brand} {menwear.name}</h4>
                <h5 className="cart-subtitle text-muted">&#8377;{menwear.price}</h5>
            </div>
        </div>
    )
}

export default MenCard;