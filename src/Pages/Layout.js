
import React from 'react';
import "../../src/App.css";
import  '../assets/style.css';
import Header from "../Layout/Header";
import Home from "./Home";
import Menu from "./Menu";
// import { Outlet, Link } from "react-router-dom";
// import Footer from "../components/Footer";


const Layout = () => {
  

  return (
    <>
    <Header />
      <Home />
      <Menu />
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;



