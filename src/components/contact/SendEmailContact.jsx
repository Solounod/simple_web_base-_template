export function SendEmailContact() {
   
    
 
    return (
        <section className="py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center mb-5">
                        <h3>Formulario Contacto</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form action="">
                            <div className="row gy-3">
                                <div className="col-lg-4 col-md-6">
                                    <input type="text" name="name" className="form-control" placeholder="Nombre" required/>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <input type="email" className="form-control" name="email" placeholder="Email" required/>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" name="subject" placeholder="Asunto" required/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                                </div>
                                <div className="col-12 text-md-center mb-0">
                                    <button className="btn btn-primary" type="submit">
                                        Enviar mensaje
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}