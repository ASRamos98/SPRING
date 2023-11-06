import React from 'react'
import { Link } from 'react-router-dom'

export const Logup = () => {
  function enviarDatos(e){
    e.preventDefault();

    fetch("/logup", {
        method:"post",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify({
          nombre: document.getElementById("nombre").value,
          apellido: document.getElementById("apellido").value,
          correo: document.getElementById("correo").value,
          password: document.getElementById("password").value,
          confirm_password: document.getElementById("confirm_password").value,
          address: document.getElementById("address").value
        }
        )
    })
}
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src="https://i.pinimg.com/736x/9e/58/20/9e58204ad65a38c1fff02611324581a1.jpg" alt="Bootstrap" width="30" height="24"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/">Pagina Inicio</a>
                </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="container d-flex align-items-center justify-content-center">
            <div className="formulario w-75">      
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <div className="icon text-center my-3"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                              </svg></div>
                            <form id="formulario" onSubmit={enviarDatos}>
                                <input type="text" name="" id="nombre" className="form-control my-4 py-2 text-center" placeholder="Ingrese su Nombre" required></input>
                                <input type="text" name="" id="apellido" className="form-control my-4 py-2 text-center" placeholder="Ingrese su Apellido" required></input>
                                <input type="email" name="" id="correo" className="form-control my-4 py-2 text-center" placeholder="Ingrese su Correo Electronico" required></input>
                                <input type="password" name="" id="password" className="form-control my-4 py-2 text-center" placeholder="Ingrese su Contraseña" required></input>
                                <input type="password" name="" id="confirm_password" className="form-control my-4 py-2 text-center" placeholder="Confirme contraseña" required></input>
                                <input type="text" name="" id="address" className="form-control my-4 py-2 text-center" placeholder="Ingrese su Direccion" required></input>
                                <div className="text-center mt-3">
                                    <input id="enviar" type="submit" className="btn btn-primary" value="Registrarse"/>
                                    <br></br>
                                    <a id="crear" href="Login">Ya tengo Cuenta</a>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
</div>
  )
}
