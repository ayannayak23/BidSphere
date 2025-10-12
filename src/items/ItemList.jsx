import Item from "./Item";
import { data } from "./items-data";

const { items } = data;

const ItemList = () => {
    return (
        <>
            <div className="header">
                <h2>Items List</h2>
            </div>
            <section className="item-list">
                {items.map((item) => {
                    const itemInfo = {
                        title: item.title,
                        price: item.price,
                        image: item.image
                    };
                    return <Item {...itemInfo } key={item.id} />
                })}
            </section>
        </>
    );
}

export default ItemList;
