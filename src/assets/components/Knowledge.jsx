import React from 'react';
import html from '../Img/html.svg';
import css from "../Img/css.svg";
import javascript from "../Img/javascript.svg";
import react from "../Img/react.svg";
import bootstrap from "../Img/bootstrap.svg";
import git from "../Img/git.svg";
import github from "../Img/github.svg";
import nodejs from "../Img/nodejs.svg";


const Knowledge = () => {
    return (
      <div className="container-knowledge">
        <div className="tecnologies">
          <div className="containerTitle">
            <h3 className="title_tecnologies">Tecnologies</h3>
          </div>
          <p className="description-knowledge">
            I will show you some of the technologies that I use in my day to day
          </p>
          <div className="container-img-tecnologies">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={javascript} alt="" />
            <img src={react} alt="" />
            <img src={bootstrap} alt="" />
            <img className="gitimg" src={git} alt="" />
            <img className="githubimg" src={github} alt="" />
            <img src={nodejs} alt="" />
          </div>
        </div>

        <div className="container_resumen_academico">
          <div className="containerTitle-academico">
            <h3 className="title_academico">Academic summary</h3>
          </div>

          <p>
            "Learning is a continuous process. The important thing is to keep
            going" - Walt Disney
          </p>

          <div className="containerstudies">
            <div className="container-places-studies">
              <b>Full Stack - Web Developer</b>
              <p>
                {" "}
                <i id="pointStudies" class="bx bx-map-pin"></i>Academlo
              </p>
            </div>

            <div className="container-places-studies">
              <b>Computing science engineer</b>
              <p>
                <i id="pointStudies" class="bx bx-map-pin"></i>Espíritu Santo
                University of Specialties
              </p>
            </div>

            <div className="container-places-studies">
              <b>Back-End</b>
              <p>
                <i id="pointStudies" class="bx bx-map-pin"></i>Oracle - Alura
              </p>
            </div>

            <div className="container-places-studies">
              <b>English</b>
              <p>
                <i id="pointStudies" class="bx bx-map-pin"></i> B1 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Knowledge;