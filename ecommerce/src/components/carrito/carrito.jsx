import React from 'react'

function Productos(props){
  return (
  <li className='list-group-item d-flex justify-content-between align-items-start'>
    <div className='ms-2 me-auto'>
      <div className='fw-bold'>{props.titulo}</div>
      {props.descripcion}
    </div>
    <span className='badge bg-primary rounded-pill'>{props.precio}</span>
  </li>
  );
}

export const Carrito = (props) => {
  let total = 0;

  function pagar() {
    let venta = {
      productos: props.itemSelecionado,
      total: total,
    };

    fetch("/pay", {
      headers: {
        "Content-type": "Application/json",
      },
      method: "POST",
      body: JSON.stringify(venta),
    });
  }


  return (
    <div className='col-4' id="cart">
      <h2 className='d-flex justify-content-center'>carrito de compras</h2>
      <ol className='list-group list-group-numbered' id="list">
        {props.itemSelecionado.map((producto)=>{
          total += producto.precio;
          return (
             <Productos 
                  titulo={producto.titulo} 
                  descripcion={producto.descripcion} 
                  precio={producto.precio}>
              </Productos>)
        })},
      </ol>
      <div className="d-flex justify-content-evenly col-12 mt-4">
        <button type="button" class="btn btn-outline-dark">
          Total: {total}
        </button>
        <button type="button" class="btn btn-outline-warning" onClick={pagar}>
          Finalizar compra
        </button>
      </div>
    </div>
  )
}
