import React, { useState } from "react";
import img1 from "../Img/ImgPortafolio/img1.png";
import img2 from "../Img/ImgPortafolio/img2.png";
import img3 from "../Img/ImgPortafolio/img3.png";
import img4 from "../Img/ImgPortafolio/img4.png";
import img5 from "../Img/ImgPortafolio/img5.png";
import img6 from "../Img/ImgPortafolio/img6.png";
import img7 from "../Img/ImgPortafolio/img7.png";
import img8 from "../Img/ImgPortafolio/img8.png";

const Portafolio = () => {
  const [on, setOn] = useState(false);
  const array = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [numberArray, setNumberArray] = useState(0);
  const arrayDescription = [
    {
      title: "Our Prices",
      description:
        "On this page is a filter by prices.I only use css therefore in this as in all my projects you will see my skills in design",
    },

    {
      title: "Barbershop",
      description:
        "Page for a client who has his barbershop. You can offer your services at the height of our digital world",
    },
    {
      title: "Weather App",
      description:
        "Application in which you can see the weather according to the location in which you are",
    },

    {
      title: "Encryptor",
      description:
        "With this app you can write a message and encrypt, copy and decrypt it, so you can send secret messages to your friends.",
    },
    {
      title: "Rick and Morty",
      description:
        "On this Rick and Morty page, you can appreciate my abilities to consume Apis. This app is used to filter your favorite character from this series. It also has a filtering system by pagination and by keywords",
    },
    {
      title: "E-commers",
      description:
        "E- commers project made with React, Redux.Multiple functions with buttons.Shopping cart, Login, create user, etc",
    },

    {
      title: "Pokedex",
      description:
        "App pokedex. Use of the pokemon API to create an application in which you can filter by your favorite pokemon",
    },

    {
      title: "CRUD USERS",
      description:
        "Application in which I demonstrate my skills in CRUD. How to create, read, update and delete. Making use of a private api.",
    },
  ];
  const appear = (num) => {
    setOn(!on);
    setNumberArray(num);
  };


  return (
    <div className="container_principal_porfolio">
      <div
        style={{ display: on ? "flex" : "none" }}
        className="container_info_img_por">
        <div className="container_info_descrip_button">
          <h3 className="title_img_appear">
            {arrayDescription[numberArray]?.title}
          </h3>
          <img className="img_porf_appear" src={array[numberArray]} />
          <div className="container_des_appear">
            <p> {arrayDescription[numberArray]?.description}</p>
          </div>
          <button onClick={appear} className="btn_x_img">
            <i className=" btnxxx bx bx-x bx-lg"></i>
          </button>
        </div>
      </div>

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

      <div className="  container_img_portfolio">
        <div className=" container_info_img_porfolio">
          <img className="  img_porf" id="img6" src={img6} alt="" />
          <div className=" container_buttons_porfolio">
            <p onClick={() => appear(5)} className="btn-links_porfolio">
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
            <p onClick={() => appear(6)} className="btn-links_porfolio">
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
            <p onClick={() => appear(7)} className="btn-links_porfolio">
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
            <p onClick={() => appear(4)} className="btn-links_porfolio">
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
            <p onClick={() => appear(0)} className="btn-links_porfolio">
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
            <p onClick={() => appear(1)} className="btn-links_porfolio">
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
            <p onClick={() => appear(2)} className="btn-links_porfolio">
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
            <p onClick={() => appear(3)} className="btn-links_porfolio">
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
