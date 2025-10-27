const ItemImage = ({ src, alt, id }) => {
    return (
        <a href={`/item/${id}`}>
            <img src={src} alt={alt} />
        </a>
    );
}
    
export default ItemImage;