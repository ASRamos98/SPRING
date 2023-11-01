import React from 'react'

function Productos(props){
  <li className='list-group-item d-flex justify-content-between align-items-start'>
    <div className='ms-2 me-auto'>
      <div className='fw-bold'>{props.titulo}</div>
      {props.descripcion}
    </div>
    <span className='badge bg-primary rounded-pill'>{props.precio}</span>
  </li>
}

export const Carrito = (props) => {
  return (
    <div className='col-4'>
      <h2 className='d-flex justify-content-center'>carrito de compras</h2>
      <ol className='list-group list-group-numbered'>
        {props.item.map((producto)=>{
          return (<Productos 
                  titulo={producto.titulo} 
                  descripcion={producto.descripcion} 
                  precio={producto.precio}>
                  </Productos>)
        })},
      </ol>
    </div>
  )
}
