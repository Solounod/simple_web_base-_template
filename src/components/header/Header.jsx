import CarouselMain from "./CarouselMain"

export function Header () {

    return (
        <section className="">
            <div className="container  py-5 my-5 ">
                <div className="row align-items-center ">
                    <div className="col-md-6 mb-5 mb-md-0  text-start">
                        <h1 className=" text-title-main fw-bolder "><spam className="">Nombre empresa o frase de incentivo</spam></h1>
                        <p className="fs-5 text-muted"> Frase de empresa, de entrada que oriente, a lo que se dedica la empresa</p>
                    </div>
                    <div className="col">
                        <CarouselMain/>
                    </div>
                </div>
            </div>
        </section>
    )
}