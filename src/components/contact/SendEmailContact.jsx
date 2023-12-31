export function SendEmailContact() {
   
    
 
    return (
        <section className="p-4 m-6  mt-20">
           <div className="">
             <h2 className="text-4xl font-light uppercase ">Contactanos</h2>
             <hr className="h-px my-4 bg-red-800 border-0" />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-6">
                <form  className="p-4 border-2 border-orange-600 shadow-xl rounded-md" onSubmit={e=>onSubmit(e)} action="">
                    <div className=" border  border-cyan-500 m-5 rounded-md ">
                        <input type="text"
                                className="p-4 w-full rounded-md focus:outline-none focus:ring-2"
                               />
                    </div>
                    <div className="border  border-cyan-500 m-5 rounded-md">
                        <input type="email"
                                className="p-4 w-full rounded-md focus:outline-none focus:ring-2"
                                 />
                    </div>
                    <div className="border border-cyan-500 m-5 rounded-md">        
                        <textarea type="textarea"
                                className="p-4 w-full rounded-md focus:outline-none focus:ring-2"
                                />
                    </div>
                    <div className="p-6 flex justify-center " >      
                        <button  className="p-4 bg-red-500 rounded-xl text-white font-semibold hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500" type="submit">Enviar</button>
                    </div>
                </form>
                
            </div>
        </section>
    )

}