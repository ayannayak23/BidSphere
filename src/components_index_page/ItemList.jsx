import { useState } from "react";
import Item from "./Item";
import MenuTitle from "../components/MenuTitle";
import MenuCategories from "../components/MenuCategories";
import { data } from "./items-data";

const { items } = data;
const tempCategories = items.map((item) => {
    return item.category;
});

const categories = ['all', ...new Set(tempCategories.flat())];

const ItemList = () => {
    const [itemList, setItemList] = useState(items);

    // console.log(tempCategories.flat());

    const filterItems = (category) => {
        if (category === 'all') {
            setItemList(items);
            return;
        }
        
        const newItems = items.filter((item) => {
            if (Array.isArray(item.category)) {
                return item.category.includes(category);
            }
            return item.category === category;
        });
        setItemList(newItems);
    }

    return (
        <>
            <MenuTitle title="Items List" />
            <MenuCategories categories={categories} filterItems={filterItems} />
            <section className="item-list">
                {itemList.map((item) => {
                    const itemInfo = {
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        rating: item.rating,
                        id: item.id
                    };
                    return <Item {...itemInfo } key={item.id} />
                })}
            </section>
        </>
    );
}

export default ItemList;
