import React from 'react'
//import imagenes from './imagenes'
import './styloPrincipal.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

function ElementosProductos(props){
    
    function addToCart() {
        props.add((arregloviejito) => [
            ...arregloviejito,
            { titulo: props.titulo, descripcion: props.descripcion, precio: props.precio },
        ]);
    }
    return (
        <div class="card col-3 m-4">
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.titulo}</h5>
        <p class="card-text">{props.descripcion}</p>
        <div className="d-flex justify-content-around col-12">
          <button class="btn btn-secondary">{props.precio}</button>
          <button type="button" class="btn btn-outline-warning" onClick={addToCart}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
export default function ListaProductos(papa){

    const [productos, setproductos] = useState([]);

    // let products =[
    //     {
    //         imagen:imagenes[0],
    //         titulo:"Martillo",
    //         descripcion:"Martillo de Uña, Mango en Madera",
    //         precio:20000
    //     },
    //     {
    //         imagen:imagenes[1],
    //         titulo:"Destornilladores",
    //         descripcion:"Combo de 2 Destornilladores marca stanly",
    //         precio:15000
    //     },
    //     {
    //         imagen:imagenes[2],
    //         titulo:"Alicate",
    //         descripcion:"Alicate de mango de goma marca force",
    //         precio:18000
    //     },
    //     {
    //         imagen:imagenes[3],
    //         titulo:"Taladro",
    //         descripcion:"Taladro Percutor 1/2-pulg 800W 2600RPM",
    //         precio:500000
    //     },
    //     {
    //         imagen:imagenes[4],
    //         titulo:"Sierra",
    //         descripcion:"Sierra Circular Eléctrica de 7-1/4 Pulgadas 185 mm de 1800W",
    //         precio:600000
    //     },
    //     {
    //         imagen:imagenes[5],
    //         titulo:"Pulidora",
    //         descripcion:"Pulidora 9-pulg 2'200W + Pulidora 4-1/2 pulg 700W",
    //         precio:450000
    //     },
    //     {
    //         imagen:imagenes[6],
    //         titulo:"Llaves",
    //         descripcion:"Todo tipo de llaves para el hogar de excelente calidad",
    //         precio:10000
    //     },
    //     {
    //         imagen:imagenes[7],
    //         titulo:"Cerradura",
    //         descripcion:"Chapa Fortaleza Derecha Bronce con 4 llaves",
    //         precio:80000
    //     }
    // ]
    let pokemons = ["charmander", "pikachu", "ditto", "squirtle", "metapod", "venusaur","charmeleon","blastoise","weedle"];

    useEffect(() => {
        pokemons.map((pokemon) => {
          fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon, {
            headers: {
            accept: "application/json",
            },
            method: "GET",
            mode: "cors",
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setproductos((arrayViejito) => [
                ...arrayViejito,
                {
                  titulo: data.name,
                  precio: data.weight * 100,
                  descripcion: `cuenta con ${data.moves.length} movimientos`,
                  img: data.sprites.front_default,
                },
              ]);
            })
            .catch((event) => console.log(event));     
        });
      },[]);

    return(
        <div>
            <Navegacion></Navegacion> 
        
            <div className="cards">
           
            {productos.map((producto)=>{
                return (
                    <ElementosProductos 
                    img={producto.img} 
                    titulo={producto.titulo} 
                    descripcion={producto.descripcion} 
                    precio={producto.precio}
                    add={papa.setitemSelecionado}
                />
                ); 
            })
            }
        </div>
        </div>
    );
}

function Navegacion(){
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <a className="navbar-brand" href="/">
                        <img src="https://i.pinimg.com/736x/9e/58/20/9e58204ad65a38c1fff02611324581a1.jpg" alt="Bootstrap" width="30" height="24"></img>
                    </a> 
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Electro Armed</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Pagina de inicio</a>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/carrito'>carrito</Link>
                        </li>
                    </ul>
                    
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="¿Que producto buscas?" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                </div>
                </div>
                </nav>
            </header>
            <h1 className='col-12 d-flex justify-content-center'>productos</h1>
        </div>
    )
}