import ItemImage from "./ItemImage";
import ItemName from "./ItemName";
import ItemPrice from "./ItemPrice";

const Item = (info) => {
    const { title, price, image, rating, id } = info;
    return (
        <article className="item">
            <ItemImage src={image} alt={title} id={id} />
            <ItemName name={title} id={id} />
            <ItemPrice price={price} rating={rating} />
        </article>
    );
}

export default Item;
