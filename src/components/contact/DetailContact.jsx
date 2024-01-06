
export function DetailContact() {
    return(
        <section className="">
            <div className="container text-center">
                <div className="card shadow with-pattern-full">
                    <div className="card-body py-5 p-md-5 index-forward">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <div className="size-square-container mx-auto mb-3">
                                    <div className="size-square"></div>
                                </div>
                                <h3 className="h4">Teléfono</h3>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">
                                        <a className="reset-anchor" href="tel:+56987654321">+56987654321</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="size-square-container mx-auto mb-3">
                                    <div className="size-square"></div>
                                </div>
                                <h3 className="h4">Email</h3>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">
                                        <a className="reset-anchor" href="contacto@email.com">contacto@email.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="size-square-container mx-auto mb-3">
                                    <div className="size-square"></div>
                                </div>
                                <h3 className="h4">Dirección</h3>
                                <ul className="list-unstyled mb-0">
                                    <li className="text-muted">
                                        <a className="reset-anchor" href="direccion">Direccion de la empresa, santiago, Chile</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}