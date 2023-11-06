import ListaProductos from "../principal/productos";
import { Carrito } from "../carrito/carrito";
import { useState } from "react";


export default function Eshop(){
    const [selectedItems, setSelectItem] = useState([]);

    return(
        <div className="container d-flex">
            <ListaProductos setSelectItem={setSelectItem}></ListaProductos>
            <Carrito selectedItems={selectedItems}></Carrito>
        </div>
    )
}