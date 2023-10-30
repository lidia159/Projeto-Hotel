import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "./Pages/Home/Home";
import Sobre from "./Pages/Sobre/Sobre";
import Contato from "./Pages/Contato/Contato";
import Quartos from "./Pages/Quartos/Quartos";

function  AppRoutes () {

    <BrowserRouter>
    <Routes>

        <Route patch="/" element={ <Home />} ></Route>
        <Route patch="/sobre" element={ <Sobre />} ></Route>
        <Route patch="/contato" element={ <Contato />} ></Route>
        <Route patch="/quartos" element={ <Quartos />} ></Route>

    </Routes>
    </BrowserRouter>
}

export default AppRoutes