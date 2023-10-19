import React from 'react';
import './inicio.css';

export const PaginaInicio = () => {
  return (
    <div className="App">
        <header className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">
                            <img src="https://i.pinimg.com/736x/9e/58/20/9e58204ad65a38c1fff02611324581a1.jpg" alt="Bootstrap" width="30" height="24"></img>
                        </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="index.html">Pagina Inicio</a>
                        <a className="nav-link" href="login.html">Inicio sesión</a>
                        <a className="nav-link" href="logup.html">Registrarse</a>
                        <a className="nav-link" href="home.html">home</a>
                        <a className="nav-link" href="admin.html">admin</a>
                        </div>
                    </div>
                    </div>
                </nav>
                <h1 className="title_principal text-center">Electro Armed</h1>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.bocelujosla86.com/cdn/shop/collections/Ferreteria.jpg?v=1593555968" class="d-block" alt="imagen_herramienta"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://tytenlinea.com/wp-content/uploads/2017/07/1517.jpg" class="d-block" alt="imagen_herramienta"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://estaticos.qdq.com/swdata/photos/519/519431302/9cf5d6564dc2475e9b779210dac4667a.jpg" class="d-block" alt="imagen_herramienta"></img>
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>         
        </header>
        <main>
        <section className="sobreNosotros">
            <h2 className="titulo_sobreNosotros text-center">¿Quienes Somos?</h2>
            
                <div className="sobreNosotrosTexto">
                    <span>La ferretería "Electro Armed" es un establecimiento que se destaca por ofrecer una amplia gama de productos y herramientas de alta calidad para satisfacer las necesidades de construcción y mantenimiento del hogar. Ubicada en el sur de la ciudad, esta ferretería brinda un servicio personalizado y asesoramiento técnico a sus clientes, garantizando que encuentren exactamente lo que necesitan para llevar a cabo sus proyectos de manera exitosa. Desde herramientas, manuales y hasta materiales de construcción, pintura, fontanería y más, esta ferretería se enorgullece de contar con un extenso inventario que satisface las demandas de cualquier proyecto.
                    Además de su oferta de productos de alta calidad, "Electro Armed" se distingue por su compromiso con la satisfacción del cliente, precios competitivos y una ubicación conveniente que facilita el acceso a sus servicios. Ya sea que estés buscando herramientas para una pequeña reparación en casa o planificando una renovación importante, esta ferretería es tu aliada confiable en el mundo de la construcción y remodelación.</span>
                </div>
            
        </section>
        </main>
        <footer>
            <h3 className="title">Contactenos</h3>
            <section className="contacto">
                <div className="contacto-foo">
                    <h6>Numero de contacto</h6>
                    <p>3222165380</p>
                </div>
                <div className="contacto-foo">
                    <h6>Email</h6>
                    <p>electroarmed25@gmail.com</p>
                </div>
                <div className="contacto-foo">
                    <h6>Direccion</h6>
                    <p>CRA 81 # 73 F 09 SUR, Bosa, Bogotá</p>
                </div>
                <VisualizarMap></VisualizarMap>
            </section>
        </footer>
    </div>

  );
}
const VisualizarMap = () => {
    return (
        <div className="contacto_map">
            <iframe title="Google Maps" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9049149951643!2d-74.20209682499909!3d4.611037642428297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f8825345467%3A0xaf395468b3d741f2!2sFERRELECTRICOS%20ELECTRO%20ARMED!5e0!3m2!1ses!2sco!4v1695177625473!5m2!1ses!2sco"
                width="180"
                height="80"
                style={{ border: '0', borderRadius: '4px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
  };
  
  
  

