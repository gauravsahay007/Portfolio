import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <div  className="container projects my-3" id="projects">
      <h1 className="text-center mb-5">PROJECTS</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {project.map((data) => (
          <div key={data.id}
          data-aos="flip-left"
          data-aos-duration="1000" className="col">
            <div
              className="card bg-dark text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={`/assets/${data.imageSrc}`}
                className="card-img-top img-fluid"
                alt="Project"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <div className="d-flex justify-content-center">
                  <a href={data.demo} className="btn btn-primary me-3" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
