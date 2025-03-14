import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import {Navbar} from "./component/navbar";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import Hoteles from "./component/listaHoteles";
import Branches from "./component/listaBranches";
import Maintenance from "./component/listaMaintenance";
import SignupHotel from "./pages/signuphotel";
import PrivateHotel from "./pages/privatehotel";   
import LoginHotel from "./pages/loginhotel";
import AuthHotel from "./component/authhotel";


const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Hoteles />} path="/hoteles" />
                        <Route element={<Hoteles />} path="/listaHoteles" />
                        <Route element={<Branches />} path="/listaBranches" />
                        <Route element={<Maintenance />} path="/listaMaintenance" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<PrivateHotel />} path="/privatehotel" />
                        <Route element={<SignupHotel />} path="/signuphotel" />
                        <Route element={<LoginHotel />} path="/loginhotel" />
                        <Route element={<AuthHotel />} path="authhotel"  />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>

                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
