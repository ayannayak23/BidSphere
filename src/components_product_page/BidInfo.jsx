const BidInfo = ({item, timeLeft, currentBid, bidAmount, setBidAmount, handleBidSubmit, handleBuyNow}) => {
    return (
        <>
            <div className="auction-info">
                <div className="current-bid">
                    <h3>Current Bid</h3>
                    <p className="bid-amount">£{currentBid.toFixed(2)}</p>
                </div>

                {timeLeft.expired ? (
                    <div className="time-left expired">
                        <h3>Auction Ended</h3>
                        <p>This auction has concluded</p>
                    </div>
                ) : (
                    <div className="time-left">
                        <h3>Time Left</h3>
                        <p className="timer">
                            {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
                        </p>
                    </div>
                )}

                {item.buyNowPrice && (
                    <div className="buy-now-section">
                        <h3>Buy Now Price</h3>
                        <p className="buy-now-price">${item.buyNowPrice}</p>
                        <button className="buy-now-btn" onClick={handleBuyNow}>
                            Buy Now
                        </button>
                    </div>
                )}
            </div>

            {!timeLeft.expired && (
                <form className="bid-form" onSubmit={handleBidSubmit}>
                    <div className="bid-input-group">
                        <label htmlFor="bidAmount">Your Bid (£)</label>
                        <input
                            type="number"
                            id="bidAmount"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                            min={currentBid + 1}
                            step="0.01"
                            placeholder={`Min: £${(currentBid + 1).toFixed(2)}`}
                            required
                        />
                    </div>
                    <button type="submit" className="place-bid-btn">
                        Place Bid
                    </button>
                </form>
            )}
        </>
    );
}

export default BidInfo;