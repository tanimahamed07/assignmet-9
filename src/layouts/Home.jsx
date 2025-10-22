import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <div>
      <nav className="bg-base-300 shadow-sm">
        <Navbar />
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Home;
