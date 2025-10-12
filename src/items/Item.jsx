import ItemImage from "./ItemImage";
import ItemName from "./ItemName";
import ItemPrice from "./ItemPrice";

const Item = (info) => {
    const { title, price, image } = info;
    return (
        <article className="item">
            <ItemImage src={image} alt={title} />
            <ItemName name={title} />
            <ItemPrice price={price} />
        </article>
    );
}

export default Item;
