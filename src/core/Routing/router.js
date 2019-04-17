import App from "../../App";
import About from "../../components/About";
import UnknownPath from "../../components/unknownPath";

const routes = [
    {
        exact: true,
        path: "/",
        component: App
    },
    {
        exact: true,
        path: "/about",
        component: About
    },
    {
        component: UnknownPath
    }
]

export default routes;