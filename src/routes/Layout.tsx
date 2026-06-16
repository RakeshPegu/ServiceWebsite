import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout(){
    return(
        <>
        <header>
            <Navbar/>
        </header>
        
        <main>
          <Outlet/>
          <Footer/>
        </main>

        </>
    
    )

}
export default Layout;