import './App.css'
import ButtonCard from "./assets/components/ButtonCard.jsx";
import ProductCard from "./assets/components/ProductCard.jsx";
import Tile from "./assets/components/Tile.jsx";


const toTheCollection = () => {
    console.log('Naar de collectie geklikt');
};

const shopAllBags = () => {
    console.log('shop all bags geklikt');
};

const preOrders = () => {
    console.log('pre orders geklikt');
};


function App() {
    return (<>


        <h1>Handbags & Purses</h1>

        <nav>
            <ButtonCard onClick={toTheCollection}
                        buttonText="to the collection"/>

            <ButtonCard onClick={shopAllBags}
                        buttonText="shop all bags"/>

            <ButtonCard onClick={preOrders}
                        disabled={true}
                        buttonText="pre-orders"/>
        </nav>


        <main>
            <ProductCard
                BestSeller={"Best seller"}
                imgSrc={"src/assets/bag_1.png"}
                imgAlt={"bag"}
                ProductTitle={"The handy bag"}
                ProductPrice={"€400,-"}
            />

            <ProductCard
                BestSeller={"Best seller"}
                imgSrc={"src/assets/bag_2.png"}
                imgAlt={"bag"}
                ProductTitle={"The stylish bag"}
                ProductPrice={"€250,-"}
            />
            <ProductCard
                BestSeller={"Best seller"}
                imgSrc={"src/assets/bag_3.png"}
                imgAlt={"bag"}
                ProductTitle={"The simple bag"}
                ProductPrice={"€300,-"}
            />

            <ProductCard
                BestSeller={"Best seller"}
                imgSrc={"src/assets/bag_4.png"}
                imgAlt={"bag"}
                ProductTitle={"The trendy bag"}
                ProductPrice={"€150,-"}
            />

        </main>

        <footer>

            <Tile
                title="The brand"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, assumenda blanditiis consectetur dignissimos distinctio dolores enim facilis fuga illum maiores maxime molestiae officia praesentium repellat reprehenderit suscipit veritatis voluptatibus!"
            />

            <Tile
                imageUrl="src/assets/brand.png"
                imgAlt="Brand logo"
            />

            <Tile
                imageUrl="src/assets/our_story.png"
                imgAlt="Our story but visualized"
            />

            <Tile
                title="Our Story"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores, assumenda blanditiis consectetur dignissimos distinctio dolores enim facilis fuga illum maiores maxime molestiae officia praesentium repellat reprehenderit suscipit veritatis voluptatibus!"
            />
        </footer>

    </>);
}

export default App
