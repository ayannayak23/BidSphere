import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import BidInfo from './BidInfo';

const Product = ({ 
    item, 
    timeLeft, 
    currentBid, 
    bidAmount, 
    setBidAmount, 
    handleBidSubmit, 
    handleBuyNow 
}) => {
    return (
        <div className="product-container">
            <ProductImage image={item.image} title={item.title} />
            <div className="product-info">
                <ProductInfo title={item.title} description={item.description} category={item.category} rating={item.rating} />
                <BidInfo
                    item = {item}
                    timeLeft={timeLeft}
                    currentBid={currentBid}
                    bidAmount={bidAmount}
                    setBidAmount={setBidAmount}
                    handleBidSubmit={handleBidSubmit}
                    handleBuyNow={handleBuyNow}
                />
            </div>
        </div>
    );
};

export default Product;
