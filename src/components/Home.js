import React from "react";
import PreHeader from "../components/PreHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
import "../sass/custom.scss";

function Home() {
  return (
    <div className='Home'>
      <div className='sticky'>
        <PreHeader />
        <Header />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
