import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
