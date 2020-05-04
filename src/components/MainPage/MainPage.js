import React from 'react';
import './MainPage.css'
import NavbarPage from "../Navbar/Navbar";
import TextDiv from "../TextDiv/TextDiv";
import TabPage from "../Tabs/Tabs";
import Footer from "../Footer/Footer";

function MainPage(props) {
    return (
        <div className="main">
            <NavbarPage />
            <TextDiv />
            <TabPage />
            <Footer />
        </div>
    );
}

export default MainPage;