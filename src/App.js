import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import TabBar from "./components/TabBar/TabBar";
import Banner from "./components/Banner/Banner";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className='App'>
            <Header />
            <TabBar />
            <Banner />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
