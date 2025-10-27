const BidHistory = ({ bids }) => {
    return (
        <>
            <div className="bids-history">
                <h3>Bid History</h3>
                {bids.length === 0 ? (
                    <p>No bids yet. Be the first to bid!</p>
                ) : (
                    <div className="bids-list">
                        {bids.map((bid) => (
                            <div key={bid.id} className="bid-item">
                                <span className="bidder">{bid.bidder}</span>
                                <span className="bid-amount">£{bid.amount.toFixed(2)}</span>
                                <span className="bid-time">{bid.time}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default BidHistory;