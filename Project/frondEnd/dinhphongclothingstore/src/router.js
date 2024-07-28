import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/ProfilePage";
import ProductsPage from "./pages/users/productsPage";
import LoginPage from "../src/component/Login";

const renderUserRouter = () => {
    const userRouters = [
        {
            path:ROUTERS.USER.HOME,
            component: <HomePage></HomePage>
        },
        {
            path:ROUTERS.USER.PROFILE,
            component: <ProfilePage></ProfilePage>
        }
        ,
        {
            path:ROUTERS.USER.PRODUCTS,
            component: <ProductsPage></ProductsPage>
        },
        {
            path:ROUTERS.LOGIN,
            component: <LoginPage></LoginPage>
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component}></Route>
                ))}
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;