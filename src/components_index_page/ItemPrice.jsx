const ItemPrice = ({ price, rating }) => {
    return (
        <>
            <span>{(() => {
                        let stars = '';
                        for (let i = 0; i < 5; i++) {
                            stars += i < rating.rate ? '★' : '☆';
                        }
                        return `${stars} (${rating.count})` || "No rating available";
                    })()}</span>
            <h4>Price: £{price}</h4>
        </>
    );
}

export default ItemPrice;
