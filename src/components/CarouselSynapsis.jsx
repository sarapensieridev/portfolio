import React, { useState } from "react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const CarouselSynapsis = ({data}) => {
    
    const [slide, setSlide] = useState(0);

    const nextSlide = () =>{
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const previousSlide = () => {
        setSlide(slide === 0 ? data.length -1: slide - 1)
    }

    return  <div className="carousel1">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={previousSlide}/>
        {data.map((item, idx) => {
            const prefix = window.location.host === 'localhost:3000' ? 'portfolio/' : ''
            return <img src={`./${prefix}${item.src}`} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} />
        })}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
        <span className="indicators">
            {data.map((_, idx) => {
                return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
            })}

        </span>
        </div>
}