import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
