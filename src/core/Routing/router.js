import App from "../../App";
import Products from "../../components/products/Products";
import UnknownPath from "../../components/UnknownPath";
import ProductDetails from "../../components/productDetails/ProductDetails"
import BuyProducts from "../../components/buyProducts/BuyProducts";

const routes = [
    {
        exact: true,
        path: "/",
        component: Products
    },
    {
        exact: true,
        path: "/details/:productId",
        component: ProductDetails
    },
    {
        exact: true,
        path: "/buyProducts",
        component: BuyProducts
    },
    {
        component: UnknownPath
    }
]

export default routes;