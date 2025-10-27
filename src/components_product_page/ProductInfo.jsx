const ProductInfo = ({ title, description, category}) => {
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
            </div>

            <div className="product-description">
                <p>{description || "No description available for this item."}</p>
            </div>
        </>
    );
}

export default ProductInfo;