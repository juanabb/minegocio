import {productosIniciales} from "../Componentes/ItemListContainer/ItemListContainer";

export const getProductosById = (id) => {

    return productosIniciales.find(productos => productos.id === id);
        }

