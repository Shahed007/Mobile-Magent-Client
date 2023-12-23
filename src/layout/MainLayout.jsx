import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default MainLayout;
