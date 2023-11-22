function Tile({ title, description, imageUrl, imgAlt}) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageUrl} alt={imgAlt} />
        </section>
    );
}
export default Tile