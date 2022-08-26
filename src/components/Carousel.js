import React from "react";

const Carousel =()=>{
    return (
        <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block" src={require("../img/better-call-saul.jpg")} alt="First slide"/>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Carousel;