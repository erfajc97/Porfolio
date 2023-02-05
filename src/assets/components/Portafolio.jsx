import React from "react";
import img1 from "../Img/ImgPortafolio/img1.png";
import img2 from "../Img/ImgPortafolio/img2.png";
import img3 from "../Img/ImgPortafolio/img3.png";
import img4 from "../Img/ImgPortafolio/img4.png";
import img5 from "../Img/ImgPortafolio/img5.png";
import img6 from "../Img/ImgPortafolio/img6.png";
import img7 from "../Img/ImgPortafolio/img7.png";
import img8 from "../Img/ImgPortafolio/img8.png";

const Portafolio = () => {
  return (
    <div className="container_principal_porfolio">
      <div className="container_title_porfolio">
        <h2 id="porfolio" className="title_portfolio">
          Portfolio
        </h2>
      </div>
      <p id="quote_George">
        "Curiosity is the engine of learning" - George Loewenstein
      </p>

      <div className="cotainer_contents_porfolio">
        <div className="barra_content">
          <p className="apis">APP</p>
          <hr />
          <p className="apis">CRUD</p>
          <hr />
          <p className="apis">API</p>
        </div>
      </div>

      <div className="container_img_portfolio">
        <div className="container_info_img_porfolio">
          <img className="img_porf" id="img6" src={img6} alt="" />
          <div className="container_buttons_porfolio">
            <p className="btn-links_porfolio">
              <i className="icon-pf bx bx-plus bx-lg"></i>
            </p>
            <hr />
            <a
              className="btn-links_porfolio"
              href="https://iridescent-starlight-6f63da.netlify.app/
              "
              target="_blank">
              <i className=" icon-pf bx bx-link bx-lg"></i>
            </a>
          </div>
        </div>

        <div className="container_info_img_porfolio">
          <img className="img_porf" id="img7" src={img7} alt="" />
          <div className="container_buttons_porfolio">
            <p className="btn-links_porfolio">
              <i className="icon-pf bx bx-plus bx-lg"></i>
            </p>
            <hr />
            <a
              className="btn-links_porfolio"
              href="https://moonlit-biscochitos-61e833.netlify.app/
              "
              target="_blank">
              <i className=" icon-pf bx bx-link bx-lg"></i>
            </a>
          </div>
        </div>

        <div className="container_info_img_porfolio">
          <img className="img_porf" id="img8" src={img8} alt="" />
          <div className="container_buttons_porfolio">
            <p className="btn-links_porfolio">
              <i className="icon-pf bx bx-plus bx-lg"></i>
            </p>
            <hr />
            <a
              className="btn-links_porfolio"
              href="https://effortless-lebkuchen-58d093.netlify.app/
              "
              target="_blank">
              <i className=" icon-pf bx bx-link bx-lg"></i>
            </a>
          </div>
        </div>

        <div className="container_info_img_porfolio">
          <img className="img_porf" id="img5" src={img5} alt="" />
          <div className="container_buttons_porfolio">
            <p className="btn-links_porfolio">
              <i className="icon-pf bx bx-plus bx-lg"></i>
            </p>
            <hr />
            <a
              className="btn-links_porfolio"
              href="https://neon-eclair-9386f3.netlify.app/
              "
              target="_blank">
              <i className=" icon-pf bx bx-link bx-lg"></i>
            </a>
          </div>
        </div>

        <div className="container_info_img_porfolio">
          <img className="img_porf" id="img1" src={img1} alt="" />
          <div className="container_buttons_porfolio">
            <p className="btn-links_porfolio">
              <i className="icon-pf bx bx-plus bx-lg"></i>
            </p>
            <hr />
            <a
              className="btn-links_porfolio"
              href="https://silver-malasada-57b2b3.netlify.app/
              "
              target="_blank">
              <i className=" icon-pf bx bx-link bx-lg"></i>
            </a>
          </div>
        </div>

        <div className="container_info_img_porfolio">
          <img className="img_porf" id="img2" src={img2} alt="" />
          <div className="container_buttons_porfolio">
            <p className="btn-links_porfolio">
              <i className="icon-pf bx bx-plus bx-lg"></i>
            </p>
            <hr />
            <a
              className="btn-links_porfolio"
              href="https://extraordinary-starship-e36cc3.netlify.app/
              "
              target="_blank">
              <i className=" icon-pf bx bx-link bx-lg"></i>
            </a>
          </div>
        </div>

        <div className="container_info_img_porfolio">
          <img className="img_porf" id="img3" src={img3} alt="" />
          <div className="container_buttons_porfolio">
            <p className="btn-links_porfolio">
              <i className="icon-pf bx bx-plus bx-lg"></i>
            </p>
            <hr />
            <a
              className="btn-links_porfolio"
              href="https://incredible-lebkuchen-6331d1.netlify.app/
              "
              target="_blank">
              <i className=" icon-pf bx bx-link bx-lg"></i>
            </a>
          </div>
        </div>

        <div className="container_info_img_porfolio">
          <img className="img_porf" id="img4" src={img4} alt="" />
          <div className="container_buttons_porfolio">
            <p className="btn-links_porfolio">
              <i className="icon-pf bx bx-plus bx-lg"></i>
            </p>
            <hr />
            <a
              className="btn-links_porfolio"
              href="https://fabulous-platypus-ee27ea.netlify.app/
              "
              target="_blank">
              <i className=" icon-pf bx bx-link bx-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
