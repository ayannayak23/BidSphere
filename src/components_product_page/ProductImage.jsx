const ProductImage = ({ image, title }) => {
    return (
        <>
            <div className="product-images">
                <img src={image} alt={title} className="main-image" />
                <div className="image-thumbnails">
                    {/* Additional images will go here */}
                    <img src={image} alt={title} className="thumbnail" />
                </div>
            </div>
        </>
    );
}

export default ProductImage;