import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Correct import for typed.js
import hero from "./data/hero.json";


const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Who am I?",
        "Gaurav Sahay",
        "Full stack web developer",
        "Coding Enthusiast",
        "IIIT ALLAHABAD'25"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 1000,
      backSpeed: 35,
      fadeOut: true,
      loop:true
    };

    const typed = new Typed("#typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.init();
    }
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <section>
  <div className="text__editor">
    <div className="text__body">
      <span > 
        <span style={{ color: "red",fontWeight:600  }}>root</span>
        <span>@gaurav:</span>
        <span style={{ color: "blue",fontWeight:900 }}>~</span>$&nbsp;
      </span>
      <span style={{ color: "#ff00dd" }} id="typed"></span>
    </div>
  </div>
</section>

         

          <a
            href={"https://drive.usercontent.google.com/u/0/uc?id=1RZKSsscnegsffXF1Awy0wnoMzJdPnk_Z&export=download"}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
