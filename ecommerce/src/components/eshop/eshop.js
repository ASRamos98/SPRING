import ListaProductos from "../principal/productos";
import { Carrito } from "../carrito/carrito";
import { useState } from "react";


export default function Eshop(){
    const [itemSelecionado, setitemSelecionado] = useState([]);

    return(
        <div className="container d-flex">
            <ListaProductos setitemSelecionado={setitemSelecionado}/>
            <Carrito itemSelecionado={itemSelecionado} />
        </div>
    )
}