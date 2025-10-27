const ProductDetails = ({ item }) => {
    return (
        <>
            <div className="product-details">
                <h3>Item Details</h3>
                <div className="details-grid">
                    <div className="detail-item">
                        <strong>Condition:</strong>
                        <span>{item.condition || 'Used - Good'}</span>
                    </div>
                    <div className="detail-item">
                        <strong>Seller:</strong>
                        <span>{item.seller || 'BidSphere User'}</span>
                    </div>
                    <div className="detail-item">
                        <strong>Location:</strong>
                        <span>{item.location || 'Norwich'}</span>
                    </div>
                    <div className="detail-item">
                        <strong>Shipping:</strong>
                        <span>{item.shipping || 'Free shipping'}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;