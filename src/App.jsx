import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import EstadoCarroContexto from "./context/EstadoCarroContexto";

const App = () => {
    return (
        <BrowserRouter>
            <EstadoCarroContexto>
                <NavBar />
                <Banner />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route
                        exact
                        path="/familia/:familiaId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        exact
                        path="/producto/:productoId"
                        element={<ItemDetailContainer />}
                    />
                </Routes>
                <Footer />
            </EstadoCarroContexto>
        </BrowserRouter>
    );
};

export default App;
