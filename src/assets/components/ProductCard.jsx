function ProductCard({ProductTitle, ProductPrice, imgSrc, BestSeller}) {
    return (
        <article>
            <span>{BestSeller}</span>
            <img src={imgSrc} alt={}/>
            <p>{ProductTitle}</p>
            <h4>{ProductPrice}</h4>
        </article>
    );
}

export default ProductCard;