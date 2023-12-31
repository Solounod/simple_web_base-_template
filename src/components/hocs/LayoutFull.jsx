import { Footer } from "../footer/Footer";
import { MyNavbar } from "../navigate/MyNavbar"


export function LayoutFull({children}) {

    return (
        <> 
            <MyNavbar/>
                {children}
            <Footer/>
        </>
    )
} 