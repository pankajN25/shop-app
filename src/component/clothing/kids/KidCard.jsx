const KidCard = ({ kidWear }) => {
    return (
        <div className="cart shadow-sm border border-2 m-2 p-2" 
             style={{width: "200px", height: "350px", cursor: "pointer"}}>
            <img 
                className="card-img-top"
                src={kidWear?.image || '/default-kid-image.jpg'}
                alt={kidWear?.name || 'Kids product'}
                style={{height: "200px", objectFit: "cover"}}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/default-kid-image.jpg';
                }}
            />
            <div className="card-body text-center">
                <h4 className="cart-title">
                    {kidWear?.brand || 'Brand'} {kidWear?.name || 'Product'}
                </h4>
                <h5 className="cart-subtitle text-muted">
                    ₹{kidWear?.price || '00'}
                </h5>
            </div>
        </div>
    );
};

export default KidCard;