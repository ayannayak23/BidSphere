const ProductInfo = ({ title, description, category, rating}) => {
    return (
        <>
            <h1 className="product-title">{title}</h1>
                
            <div className="product-categories">
                {Array.isArray(category) ? (
                    item.category.map((cat, index) => (
                        <span key={index} className="category-tag">{cat}</span>
                    ))
                ) : (
                    <span className="category-tag">{category}</span>
                )}
                <div className="product-rating">
                    <span>{(() => {
                        let stars = '';
                        for (let i = 0; i < 5; i++) {
                            stars += i < rating.rate ? '★' : '☆';
                        }
                        return `${stars} (${rating.count})` || "No rating available";
                    })()}</span>
                </div>
            </div>


            <div className="product-description">
                <p>{description || "No description available for this item."}</p>
            </div>
        </>
    );
}

export default ProductInfo;