

export function Footer() {
    return (
        <footer>
            <div className="container py-5 border-bottom z-index-20 position-relative">
                <div className="row pt-5 gy-4">
                    <div className="col-lg-3 col-md-6">
                        <img src="" alt="imagen-logo" />
                        <ul className="list-unstyled text-muted">
                            <li><a className="reset-anchor text-sm" href="">contacto@gmail.cl</a></li>
                            <li><a  className="reset-anchor text-sm" href="">+569999999999</a></li>
                        </ul>
                        <ul className="list-inline text-muted">
                           <li className="list-inline-item" ><a href=""></a><i className="fab fa-facebook-f"></i></li>
                           <li className="list-inline-item" ></li>
                           <li className="list-inline-item" ></li> 
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6"></div>
                    <div className="col-lg-3 col-md-6"></div>
                    <div className="col-lg-3 col-md-6"></div>
                </div>
            </div>
        </footer>
    )
}