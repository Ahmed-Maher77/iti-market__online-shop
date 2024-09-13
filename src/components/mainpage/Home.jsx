import React from "react";
import Categories from "./Categories";
import "./Home.css";
import Slider from "./Slider";

const Home = () => {
    return(
        <>
            {/* Home section contains both categories and slider */}
            <section className="home">
                <div className="container d_flex">
                    <Categories />
                    <Slider />
                </div>
            </section>
        </>
    )
}


export default Home;