import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../components_index_page/items-data';
import '../ProductPage.css';
import Product from '../components_product_page/Product';
import BidHistory from '../components_product_page/BidHistory';
import ProductDetails from '../components_product_page/ProductDetails';

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bidAmount, setBidAmount] = useState('');
    const [timeLeft, setTimeLeft] = useState({});
    const [currentBid, setCurrentBid] = useState(0);
    const [bids, setBids] = useState([]);

    useEffect(() => {
        // Find the item by ID
        const foundItem = data.items.find(item => item.id === parseInt(id));
        
        if (foundItem) {
            setItem(foundItem);
            setCurrentBid(foundItem.price);
            setBids([
                { id: 1, bidder: 'Starting Bid', amount: foundItem.price, time: 'Initial' }
            ]);
            
            const endTime = new Date();
            endTime.setHours(endTime.getHours() + 24);
            localStorage.setItem(`auction_end_${id}`, endTime.toISOString());
        } else {
            setItem(null);
        }
        setLoading(false);
    }, [id]);

    useEffect(() => {
        if (!item) return;

        const timer = setInterval(() => {
            const endTime = new Date(localStorage.getItem(`auction_end_${id}`));
            const now = new Date();
            const difference = endTime - now;

            if (difference <= 0) {
                setTimeLeft({ expired: true });
                clearInterval(timer);
                return;
            }

            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0'),
                expired: false
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [item, id]);

    const handleBidSubmit = (e) => {
        e.preventDefault();
        
        if (!bidAmount || parseFloat(bidAmount) <= currentBid) {
            alert(`Bid must be higher than current bid of $${currentBid}`);
            return;
        }

        const newBid = {
            id: bids.length + 1,
            bidder: 'You',
            amount: parseFloat(bidAmount),
            time: new Date().toLocaleTimeString()
        };

        setBids([newBid, ...bids]);
        setCurrentBid(parseFloat(bidAmount));
        setBidAmount('');
        
        alert(`Bid placed successfully! Your bid: $${bidAmount}`);
    };

    const handleBuyNow = () => {
        alert(`Congratulations! You've purchased ${item.title} for $${item.buyNowPrice || (item.price * 2)}`);
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!item) {
        return (
            <div className="error-page">
                <h2>Item Not Found</h2>
                <p>The item you're looking for doesn't exist.</p>
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
        );
    }

    return (
        <div className="product-page">
            <button className="back-button" onClick={() => navigate(-1)}>
                ← Back
            </button>

            <Product
                item={item}
                timeLeft={timeLeft}
                currentBid={currentBid}
                bidAmount={bidAmount}
                setBidAmount={setBidAmount}
                handleBidSubmit={handleBidSubmit}
                handleBuyNow={handleBuyNow}
            />

            <BidHistory bids={bids} />

            <ProductDetails item={item} currentBid={currentBid} />
        </div>
    );
};

export default ProductPage;