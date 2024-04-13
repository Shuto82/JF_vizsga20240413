import React from "react";
import picture1 from "/haz.jpg";
import picture2 from "/panel.jpg";
import picture3 from "/nyaralo.jpg";
import picture4 from "/background.png"

export const Home = () => {
  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      <header
      className="shadow"
        style={{
          height: "40vh",
          backgroundImage: `url(${picture4})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <h1 style={{ color: "#3730a3" }}>Ingatlaniroda</h1>
      </header>
      <main>
        <h4 className="text-center" style={{ color: "#3730a3" }}>Ingatlanok minden kategóriában</h4>
        <div className="row flex-wrap justify-content-center" style={{ color: "#3730a3" }}>
          <div
            className="col-md-3 col-sm-12 m-1"
            style={{ borderRadius: "3px", backgroundColor: "#c7d2fe" }}
          >
            <img
              className="img-fluid my-2 shadow"
              style={{ border: "3px solid white", borderRadius: "3px" }}
              src={picture1}
              alt="haz"
            />
            <p className="text-center">Házak</p>
          </div>
          <div
            className="col-md-3 col-sm-12 m-1"
            style={{ borderRadius: "3px", backgroundColor: "#c7d2fe" }}
          >
            <img className="img-fluid my-2 shadow" src={picture2} alt="lakas" style={{ border: "3px solid white", borderRadius: "3px" }} />
            <p className="text-center">Lakások</p>
          </div>
          <div
            className="col-md-3 col-sm-12 m-1"
            style={{ borderRadius: "3px", backgroundColor: "#c7d2fe" }}
          >
            <img className="img-fluid my-2 shadow" src={picture3} alt="nyaralo" style={{ border: "3px solid white", borderRadius: "3px" }} />
            <p className="text-center">Nyaralók</p>
          </div>
        </div>
      </main>
      <footer className="text-center my-2" style={{borderTop: "1px solid black"}}>
        &copy; 2024 JF project. All rights reserved.
      </footer>
    </div>
  );
};
