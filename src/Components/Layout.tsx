import Navbar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <Navbar />
      <div className="container">
          <SideBar/>
          <div className="content">{children}</div>
      </div>
      </>
    );
  };
  
  export default Layout;