const LadiesCard = ({ ladiesWear }) => {  // Changed from ladieswear to ladiesWear
    return (
        <div className="cart shadow-sm border border-2 m-2 p-2" 
             style={{width:"200px",height:"350px", cursor: "pointer"}}>
            <img className="card-img-top"
                src={ladiesWear?.image || '/path/to/default-image.jpg'}
                alt={ladiesWear?.name || 'Product image'}
                style={{height:"200px",objectFit:"cover"}} 
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/path/to/default-image.jpg';
                }}
            />
            <div className="card-body text-center">
                <h4 className="cart-title">
                    {ladiesWear?.brand || 'Brand'} {ladiesWear?.name || 'Product Name'}
                </h4>
                <h5 className="cart-subtitle text-muted">
                    &#8377;{ladiesWear?.price || '00'}
                </h5>
            </div>
        </div>
    )
}

export default LadiesCard;