import Items from "./Items";
import Tabs from "./Tabs";

interface ItemsPage {
    lang: string;
}

const ItemsPage = ({ lang } : ItemsPage) => {
    return (
        <div>
            <h2
            className="text-5xl font-medium text-center mb-8"
            >Items
            </h2>
            <Tabs />
            <Items/>
        </div>
    )
}

export default ItemsPage;