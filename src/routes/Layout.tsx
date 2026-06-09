import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout(){
    return(
        <div>
            <div><Navbar/></div>
            <div><Outlet/></div>
            <div><Footer/></div>
        </div>
    )

}
export default Layout;