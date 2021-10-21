import Header from "../../HomePage/Header/Header";
import Footer from "../../HomePage/Footer/Footer";
import React from "react";

const BaseLayout = ({children}) => (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
);

export default BaseLayout;