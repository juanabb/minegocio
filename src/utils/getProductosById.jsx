
export const getProductosById = ({id,productosIniciales}) => {

    return productosIniciales.find(productos => productos.id === id);
        }

