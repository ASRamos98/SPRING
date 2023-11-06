import React from 'react'
import Eshop from '../eshop/eshop'

export const Home = () => {
  return (
    <div>
      <Navegacion></Navegacion>
      <Eshop />
    </div>
  )
}

function Navegacion(){
  return (
      <div>
          <header>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <a className="navbar-brand" href="/">
                      <img src="https:i.pinimg.com/736x/9e/58/20/9e58204ad65a38c1fff02611324581a1.jpg" alt="Bootstrap" width="30" height="24"></img>
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
