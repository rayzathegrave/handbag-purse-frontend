function ProductCard({ProductTitle, ProductPrice, imgSrc, BestSeller, imgAlt}) {
    return (
        <article>
            <span>{BestSeller}</span>
            <img src={imgSrc} alt={imgAlt}/>
            <p>{ProductTitle}</p>
            <h4>{ProductPrice}</h4>
        </article>
    );
}

export default ProductCard;