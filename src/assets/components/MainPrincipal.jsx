import React from "react";
import PhotoAboutme from "../Img/WhatsApp Image 2023-01-12 at 7.37.05 PM.jpg";
import pdfcv from "../utils/Profile.pdf";
const MainPrincipal = () => {
  return (
    <div className="container-main  ">
      <div className="container-presentation ">
        <h2 className="title-name bounce-in-top "> Erick Jimenez</h2>

        <div className="iam slide-in-elliptic-top-fwd">
          <p className="animated-text first">Computing science engineer</p>
          <p className="animated-text ">Web developer</p>
          <p className="animated-text ">Full stack developer</p>
        </div>
      </div>

      <div className="container-about-me">
        <article className="articule_aboutMe-Photo">
          <h3 id="aboutME_" className="about-me">
            About Me
          </h3>
          <div className="container-img-aboutme slit-in-vertical">
            <img className="imgAboutme" src={PhotoAboutme} alt="" />
          </div>
        </article>

        <article className="descriptionArticule-AboutMe">
          <h3 className="title-description-about-me">Web Developer</h3>

          <p className="quote">
            "Teamwork is the ability to work together towards a common vision.
            It is the fuel that allows ordinary people to achieve extraordinary
            results" - Andrew Carnegie.
          </p>
          <br />
          <br />
          <p className="description__aboutMe">
            I am Computer Engineer. Espíritu Santo
            University of Specialties (UEES).
            Full Stack Developer:
            Tecnologies:
            React,
            Node.js,
            Javascript,
            MongoDb,
            Postgres
        <br />
             Of Ecuadorian nationality, but I
            live traveling in different parts of the world. I am currently
            living in Argentina. I'm 25 years old.
            <br /> <br />
            I am a person who likes challenges and technology. I love learning
            new things. I love teaching and being taught. Every obstacle and
            mistake is one more opportunity to continue evolving and reach the
            best version of myself. As a web developer, I understand that
            teamwork is crucial for success in a project. My ability to
            collaborate and communicate effectively with my team, as well as my
            ability to adapt and be flexible in a changing environment are
            valuable skills that I possess. These soft skills enable me to be a
            valuable member of any web development team and contribute to the
            success of the project.
            <br /> <br />
            Fan of life, people, food and animals. I define myself with the
            following values: <br /> communication, perseverance, flexibility,
            respect, discipline, order and forgiveness. Being also my soft
            skills.
            <br /> <br />I love speaking English even though it's not my native
            language. I like cryptocurrencies and I know a lot about blockchain
            and NFTs.
          </p>
        </article>
      </div>

      <div className="container-button">
        <br />
        <br />
        <a href={pdfcv} download>
          <button className="btn-buttonCV">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default MainPrincipal;
