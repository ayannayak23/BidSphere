const MenuCategories = ({categories, filterItems}) => {
    return (
        <div className="header">
            <h2>Filter by Category: </h2>
            <div className="categories">
                {categories.map((category, index) => {
                    return (
                        <button key={index} onClick={() => filterItems(category)}>
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default MenuCategories;