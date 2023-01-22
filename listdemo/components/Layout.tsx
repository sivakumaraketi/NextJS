import Footer from "./Footer";
import NavBar from "./Navbar";
const Layout = ({ children, ...props } : any) => {

    return (
        <div className="content">
                    <NavBar />
                    { children }
                    <Footer />
        </div>
    )
}
export default Layout;