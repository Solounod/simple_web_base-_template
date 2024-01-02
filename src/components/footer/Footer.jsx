import { useNavigate } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


export function Footer() {
    const navigate = useNavigate()

    const handleBrandClick = (route) => {
      navigate(route)
  }

    return (
        <footer>
            <div className="container py-5 border-bottom z-index-20 position-relative">
                <div className="row pt-5 gy-4">
                    <div className="col-lg-3 col-md-6 text-start">
                        <img src="" alt="imagen-logo" />
                        <ul className="list-unstyled text-muted">
                            <li><a className="reset-anchor text-sm" href="">contacto@gmail.cl</a></li>
                            <li><a  className="reset-anchor text-sm" href="">+569999999999</a></li>
                        </ul>
                        <ul className="list-inline text-muted">
                           <li className="list-inline-item" ><a className="reset-anchor" href="https://www.facebook.com/"><FaFacebookF size={20}/></a></li>
                           <li className="list-inline-item" ><a className="reset-anchor" href="https://www.instagram.com/"><FaInstagram size={20}/></a></li>
                           <li className="list-inline-item" ><a className="reset-anchor" href="https://twitter.com/"><FaTwitter size={20}/></a></li> 
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 text-start">
                        <h4>Navegacion</h4>
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-1"><a className="text-sm reset-anchor" onClick={() => handleBrandClick("/")}>Home</a></li>
                            <li className="mb-1"><a className="text-sm reset-anchor" onClick={() => handleBrandClick("/aboutme")}>About me</a></li>
                            <li className="mb-1"><a className="text-sm reset-anchor" onClick={() => handleBrandClick("/service")}>Service</a></li>
                            <li className="mb-1"><a className="text-sm reset-anchor" onClick={() => handleBrandClick("/contact")}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 text-start">
                        <h4>Servicios</h4>
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-1">Algun servicio</li>
                            <li className="mb-1">Algun servicio</li>
                            <li className="mb-1">Algun servicio</li>
                            <li className="mb-1">Algun servicio</li>
                            <li className="mb-1">Algun servicio</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6"></div>
                </div>
            </div>
        </footer>
    )
}