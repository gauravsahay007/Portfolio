import React from "react";
import profile from "./data/coding.json";

const CodingProfile = () => {
  const redirectToProfile = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="container skills" id="profiles">
      <h1 className="text-center mb-5 mt-5">CODING PROFILES</h1>
      <div className="items">
        {profile.map((data) => (
          <div
            className="item"
            key={data.id}
            data-aos="flip-left"
            data-aos-duration="1000"
            onClick={() => redirectToProfile(data.url)}
            style={{ cursor: "pointer" }}
          >
            <img style={{ borderRadius: "100%" }} src={`/assets/${data.imageSrc}`} alt="" />
            <h3 style={{ fontSize: "20px" }}>{data.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfile;
