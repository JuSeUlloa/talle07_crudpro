import { Routes, Route } from "react-router-dom";
import { Inicio } from "../components/contendor/Inicio";
import { Error } from "../components/contendor/Error";
import { ProductoListar } from "../components/producto/ProductoListar";
import { ProductoCrear } from "../components/producto/ProductoCrear";
import { ProductoAdmin } from "../components/producto/ProductoAdmin";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="*" element={<Error />} />

            <Route path="/list" element={<ProductoListar />} />
            <Route path="/add" element={<ProductoCrear />} />
            <Route path="/admin" element={<ProductoAdmin />} />

        </Routes>

    );
}