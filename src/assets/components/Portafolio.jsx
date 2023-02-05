import React from 'react';
import img1 from '../Img/ImgPortafolio/img1.png';
import img2 from "../Img/ImgPortafolio/img2.png";
import img3 from "../Img/ImgPortafolio/img3.png";
import img4 from "../Img/ImgPortafolio/img4.png";
import img5 from "../Img/ImgPortafolio/img5.png";

const Portafolio = () => {
    return (
      <div className="container_principal_porfolio">
        <div className="container_title_porfolio">
          <h2 id='porfolio' className="title_portfolio">Portfolio</h2>
        </div>
        <p id='quote_George' >"Curiosity is the engine of learning" - George Loewenstein</p>

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
          <img id="img1" src={img1} alt="" />
          <img id="img2" src={img2} alt="" />
          <img id="img5" src={img5} alt="" />
          <img id="img3" src={img3} alt="" />
          <img id='img4' src={img4} alt="" />
        </div>
      </div>
    ); 
};

export default Portafolio;