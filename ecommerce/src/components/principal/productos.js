import React from 'react'
import imagenes from './imagenes'
import './styloPrincipal.css'

//import { useEffect, useState } from "react";

function ElementosProductos(props){
    
    function addToCart() {
        props.add((arrayViejito) => [
          ...arrayViejito,
          { titulo: props.titulo, precio: props.precio, descripcion: props.descripcion },
        ]);
      }
      return (
        <div class="card col-3 m-4">
          <img src={props.imagen} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.titulo}</h5>
            <p class="card-text">{props.descripcion}</p>
          </div>
          <div className="botones d-flex justify-content-around col-12 align-items-end">
              <button class="btn btn-secondary">{props.precio}</button>
              <button type="button" class="btn btn-outline-warning" onClick={addToCart}>
                Comprar
              </button>
          </div>
          
        </div>
      );
    }
export default function ListaProductos(props){

 //   const [productos, setproductos] = useState([]);

     let products =[
         {
             imagen:imagenes[0],
             titulo:"Martillo",
             descripcion:"Martillo de Uña, Mango en Madera",
             precio:20000
         },
         {
             imagen:imagenes[1],
             titulo:"Destornilladores",
             descripcion:"Combo de 2 Destornilladores marca stanly",
             precio:15000
         },
         {
             imagen:imagenes[2],
             titulo:"Alicate",
             descripcion:"Alicate de mango de goma marca force",
             precio:18000
         },
         {
             imagen:imagenes[3],
             titulo:"Taladro",
             descripcion:"Taladro Percutor 1/2-pulg 800W 2600RPM",
             precio:500000
         },
         {
             imagen:imagenes[4],
             titulo:"Sierra",
             descripcion:"Sierra Circular Eléctrica de 7-1/4 Pulgadas 185 mm de 1800W",
             precio:600000
         },
         {
             imagen:imagenes[5],
             titulo:"Pulidora",
             descripcion:"Pulidora 9-pulg 2'200W + Pulidora 4-1/2 pulg 700W",
             precio:450000
         },
         {
             imagen:imagenes[6],
             titulo:"Llaves",
             descripcion:"Todo tipo de llaves para el hogar de excelente calidad",
             precio:10000
         },
         {
             imagen:imagenes[7],
             titulo:"Cerradura",
             descripcion:"Chapa Fortaleza Derecha Bronce con 4 llaves",
             precio:80000
         }
     ]
//    let pokemons = ["charmander", "pikachu", "ditto", "squirtle", "metapod", "venusaur","charmeleon","blastoise","weedle"];

    // useEffect(() => {
    //     pokemons.map((pokemon) => {
    //       fetch("https:pokeapi.co/api/v2/pokemon/" + pokemon, {
    //         headers: {
    //         accept: "application/json",
    //         },
    //         method: "GET",
    //         mode: "cors",
    //       })
    //         .then((response) => response.json())
    //         .then((data) => {
    //           console.log(data);
    //           setproductos((arrayViejito) => [
    //             ...arrayViejito,
    //             {
    //               titulo: data.name,
    //               precio: data.weight * 100,
    //               descripcion: `cuenta con ${data.moves.length} movimientos`,
    //               img: data.sprites.front_default,
    //             },
    //           ]);
    //         })
    //         .catch((event) => console.log(event));     
    //     });
    //   },[]);

    return(
        <div>
            
        
            <div className="col-10 d-flex flex-wrap justify-content-around">
           
            {products.map((product) => {
        return (
            <ElementosProductos
                imagen={product.imagen}
                precio={product.precio}
                descripcion={product.descripcion}
                add={props.setSelectItem}
            ></ElementosProductos>
        );
      })}
    </div>
    </div>
  );
}