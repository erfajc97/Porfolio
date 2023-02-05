import React from 'react';
import PhotoProfile from "../Img/profile.jpeg";


const Navmenu = ({ buttonMenu }) => {
  return (
    <nav className={`menu ${buttonMenu}`}>
      <br />
      <br></br>
      <div className="container-photo-profile ">
        <img className="photo-profile" src={PhotoProfile} alt="Photo-Profile" />
      </div>
      <br />
      <h1 className="name-profile">Erick Jimenez</h1>

      <div className="link-contacts">
        <a href="https://www.linkedin.com/in/erickjimenezcruz/" target="_blank">
          <i className="bx bxl-linkedin bx-md bx-tada"></i>
        </a>
        <a href="https://github.com/erfajc97" target="_blank">
          <i className="bx bxl-github bx-md bx-tada"></i>
        </a>
        <a href="../utils/Profile.pdf" download>
          <i className="bx bxs-file-blank bx-md bx-tada"></i>
        </a>
      </div>

      <div className="container-contents">
        <a href="#">
          <label htmlFor="home">
            <i id="home" className="bx bx-home bx-md "></i>
            <p>Home</p>
          </label>
        </a>

        <a href="#aboutME_">
          <label htmlFor="aboutMe">
            <i id="aboutMe" className="bx bx-user bx-md "></i>

            <p>About Me</p>
          </label>
        </a>

        <a href="#tecnologies">
          <label htmlFor="studies">
            <i id="studies" className="bx bxs-file-blank bx-md "></i>
            <p>Studies</p>
          </label>
        </a>

        <a href="#porfolio">
          <label htmlFor="portafile">
            <i id="portafile" className="bx bxs-book-content bx-md "></i>
            <p>Portafile</p>
          </label>
        </a>

        <a href="#skills">
          <label htmlFor="skill">
            <i id="skill" className="bx bx-server bx-md "></i>

            <p>Skills</p>
          </label>
        </a>

        <a href="#contactaMe">
          <label className="contacts bx-flashing" htmlFor="contacts">
            <i id="contacts" className="bx bx-envelope  bx-md "></i> <br />
            <p>Contact me</p>
          </label>
        </a>
      </div>
    </nav>
  );
};

export default Navmenu;