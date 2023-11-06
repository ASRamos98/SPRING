import React from 'react'

function Producto(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-4 me-auto">
        <div class="fw-bold">{props.titulo}</div>
        {props.descripcion}
      </div>
      <span class="badge bg-primary rounded-pill">{props.precio}</span>
    </li>
  );
}

export const Carrito = (props) => {
  let total = 0;

  function pagar() {
    let venta = {
      producto: props.selectedItems,
      total: total,
    };

    fetch("/pay", {
      headers: {
        "Content-type": "Application/json",
      },
      method: "POST",
      body: JSON.stringify(venta),
    });
    alert("compra realizada")
  }


  return (
    <div className='col-3' id="cart">
      <h2 className='d-flex justify-content-center'>carrito de compras</h2>
      <ol className='list-group list-group-numbered' id="list">
      {props.selectedItems.map((item) => {
          total += item.precio;
          return (
            <Producto titulo={item.titulo} descripcion={item.descripcion} precio={item.precio}></Producto>
          );
        })}
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
