import {productosIniciales} from '../catalogo/catalogo'

export const getProductosById = (id) => {

    return productosIniciales.find(productos => productos.id === id);
        }

