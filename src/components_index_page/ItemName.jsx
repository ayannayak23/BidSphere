const ItemName = ({ name, id }) => {
    return (
        <>
            <a href={`/item/${id}`} ><h3>{name}</h3></a>
        </>
    );
}

export default ItemName;