import React from 'react';
import './inicio.css';
import { Link } from 'react-router-dom';

export const PaginaInicio = () => {
  return (
    <div className="App">
        <header className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="https://i.pinimg.com/736x/9e/58/20/9e58204ad65a38c1fff02611324581a1.jpg" alt="Bootstrap" width="30" height="24"></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="/">Pagina Inicio</a>
                                <Link className="nav-link" to="Login">Inicion sesion</Link>
                                <Link className="nav-link" to="Logup">Registrarse</Link>
                                <Link className="nav-link" to="Home">home</Link>
                                <Link className="nav-link" to="/">admin</Link>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ffc414" d="M3.375 13.079c-.862-.863-.862-2.926-.075-3.714s3.263-3.224 5.062-5.024c1.8-1.8 3.376-2.063 3.863-2.063H15.9c.222 0 .553.033.924.089l-1.087 2.166c-.874-.063-1.682-.042-2.274-.042c-2.438 0-2.626.562-3.038.975c-.413.412-5.062 4.837-5.4 5.175c-1.05 1.05.562 1.538 2.325 1.538c.788 0 .9.825.712 1.575c-.102.408-.368 1.43-.592 2.528H5.331a12.5 12.5 0 0 1 .219-.954c.188-.637.225-1.2-.15-1.2s-1.163-.187-2.025-1.05zm18.043-9.92c-.197-.196-2.184-1.35-2.773-1.62a1.01 1.01 0 0 0-.417-.105c-.313 0-.486.217-.587.42l-3.118 6.213a3.742 3.742 0 0 0-.715 6.904c-.457.544-1.133 1.1-1.292 1.285c-.225.263-.787.526-1.763.526H4.367a2.184 2.184 0 1 0-.156.87h7.04c.974 0 1.537-.261 1.761-.524c.214-.249 1.366-1.173 1.659-1.831a3.74 3.74 0 0 0 4.623-3.635a3.729 3.729 0 0 0-.532-1.922a7006.535 7006.535 0 0 1 2.753-5.55c.27-.54.1-.834-.097-1.03zm.286 1.774l-.993 2.002c.697 1.006 1.152 2.412 1.152 4.419c0 5.099-2.7 5.662-3.263 5.662h-2.138c-.45 0-.787.075-1.612.9c-.825.825-1.988 1.837-2.325 2.174c-.337.338-.825.563-1.688.563H8.175c-.375 0-1.05-.188-1.05-1.763c0-.22.021-.475.049-.737H5.059c-.058.64-.075 1.277.003 1.787c.226 1.463 1.426 2.625 2.438 2.625h3.975c1.838 0 5.213-3.412 5.213-3.412s1.107.068 1.763.05C20.488 19.149 24 17.467 24 11.842c0-3.314-.995-5.477-2.296-6.908z"/></svg>
                    <p>3222165380</p>
                </div>
                <div className="contacto-foo">
                    <h6>Email</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ffc414" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg>
                    <p>electroarmed25@gmail.com</p>
                </div>
                <div className="contacto-foo">
                    <h6>Direccion</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 100 100"><path fill="#ffc414" d="M35.752 0C16.114 0 0 16.064 0 35.658c0 7.534 2.397 14.55 6.44 20.32l23.17 40.06l.099.128c.914 1.194 1.807 2.135 2.855 2.828c1.049.694 2.35 1.11 3.625.983c2.553-.256 4.115-2.058 5.598-4.069l.078-.105l16.518-28.108l7.72 13.346l.098.129c.74.967 1.477 1.75 2.375 2.344c.898.594 2.056.971 3.195.857c2.279-.228 3.585-1.792 4.78-3.412l.076-.105l20.121-34.24l.016-.03c.485-.879.84-1.763 1.14-2.62A28.23 28.23 0 0 0 100 33.302C100 17.612 87.099 4.75 71.377 4.75a28.457 28.457 0 0 0-13.178 3.23C52.05 3 44.231 0 35.752 0zm0 5c7.682 0 14.723 2.852 20.127 7.54l.367.33a31.008 31.008 0 0 1 6.953 9.044l.348.684a30.291 30.291 0 0 1 1.246 23.068l-.002.006c-.176.503-.36.993-.555 1.467l-.025.062l-.022.063c-.322.927-.675 1.78-1.091 2.535L37.725 92.98c-1.172 1.56-2.027 2.021-2.034 2.022c-.003 0-.018.054-.369-.178c-.337-.223-.912-.775-1.584-1.636L10.68 53.324l-.067-.094C7.08 48.236 5 42.187 5 35.658C5 18.803 18.837 5 35.752 5zm35.625 4.75C84.375 9.75 95 20.35 95 33.3c0 3.117-.62 6.088-1.738 8.82l-.026.062l-.021.062a12.47 12.47 0 0 1-.82 1.906l-19.918 33.9c-.68.885-1.138 1.19-1.174 1.265c-.199-.138-.594-.514-1.07-1.12L61.294 62.74l6.158-10.48l.014-.028c.549-.992.956-1.997 1.31-2.984c.866.142 1.692.397 2.6.397c9.054 0 16.38-7.305 16.38-16.344c0-9.04-7.326-16.342-16.38-16.342c-1.675 0-3.25.33-4.764.795a36.042 36.042 0 0 0-4.351-5.934c2.831-1.215 5.847-2.07 9.115-2.07zm-35.625 5.787c-11.164 0-20.172 8.978-20.172 20.121c0 11.143 9.01 20.115 20.172 20.115c11.163 0 20.168-8.972 20.168-20.115c0-11.142-9.004-20.12-20.168-20.12zm0 4.998c8.519 0 15.168 6.64 15.168 15.123c0 8.484-6.648 15.117-15.168 15.117S20.58 44.142 20.58 35.658c0-8.483 6.653-15.123 15.172-15.123zm35.625 1.422c6.41 0 11.38 4.962 11.38 11.344c0 6.381-4.97 11.345-11.38 11.345c-.351 0-.697-.02-1.04-.05a35.112 35.112 0 0 0 1.163-8.938c0-4.74-.95-9.27-2.658-13.42a11.51 11.51 0 0 1 2.535-.281z" color="#ffc414"/></svg>
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
  
  
  

