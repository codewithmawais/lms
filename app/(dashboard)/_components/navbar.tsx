import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";

const Navbar = () => {
    return (
        <div className="p-4 border-b h-ful flex items-center bg-white shadow-sm">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    );
}
 
export default Navbar;