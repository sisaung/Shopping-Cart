import { Outlet } from "react-router-dom";
import Header from "../Navigation/Header";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
      <Toaster
        toastOptions={{
          success: {
            duration: 1000,
          },
          error: {
            duration: 2000,
          },
        }}
      />
    </div>
  );
};

export default MainLayout;
