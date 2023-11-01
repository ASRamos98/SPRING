import React from 'react'
import imagenes from './imagenes'
import './styloPrincipal.css'
import { Link } from 'react-router-dom'

function ElementosProductos(props){

    function addtocar(){
        props.setitemSelecionado((arregloviejito)=>[ ...arregloviejito, {titulo:props.titulo, descripcion:props.descripcion, precio:props.precio},
        ])
    }
    return (
        <div className="productos">
            <div className="card ">
                <img src={props.img} alt='martillo'></img>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                </div>
                <div className="card-footer">
                    <button className='boton_precio'>{props.precio}
                    </button>
                    <button type="button" className='boton_compra' onClick={addtocar}>Comprar <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0z"/></svg></button> 
                </div>
            </div>
        </div>
    )
}
export default function ListaProductos(props){

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
    return(
        <div>
            <Navegacion></Navegacion>
            {products.map((product)=>{
                return (
                <ElementosProductos 
                img={product.imagen} 
                titulo={product.titulo} 
                descripcion={product.descripcion} 
                precio={product.precio}
                key={product.titulo}>
                </ElementosProductos>
                ) 
            })
            }
        </div>
    )
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