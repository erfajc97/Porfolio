import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vlargl8', 'template_uv17arw', form.current, 'WfDf2S938hj73rz9t')
      .then((result) => {
          console.log(result.text);
          alert("Thanks for contacting me. I will write to your email soon.")
      }, (error) => {
          console.log(error.text);
      });
  };
  


    return (
      <div className="principal_container_form">
        <div className="contatiner_title_contacts">
          <h2 id="contactaMe" className="title_contacts">
            Contacts
          </h2>
        </div>
        <p className="description_contacts">
          Winning doesn't always mean being first. Winning means you're doing
          better than ever.
        </p>

        <div className="container_contacts">
          <div className="container_location">
            <div className="location">
              <div className="container_img_location">
                <i className=" img_contcs bx bx-map bx-md"></i>
              </div>
              <div className="info_contact">
                <b>Ecuador, Argentina</b>
                <p>Guayaquil-Buenos Aires</p>
              </div>
            </div>

            <div className="location">
              <div className="container_img_location">
                <i className=" img_contcs bx bx-envelope bx-md"></i>
              </div>
              <div className="info_contact">
                <b>E-mail:</b>
                <p>erfajc97@gmail.com</p>
                <p>erfacrypto@gmail.com</p>
              </div>
            </div>
            <div className="location">
              <div className="container_img_location">
                <i className=" img_contcs bx bxl-whatsapp bx-md"></i>
              </div>
              <div className="info_contact">
                <b>Whatsapp</b>
                <p>+593-978-842-711</p>
                <p>+54-911-7632-5093</p>
              </div>
            </div>
            <div className="container_linkWs">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B5491176325093&text&type=phone_number&app_absent=0"
                target="_blank">
                <button className="link_whatsapp">Link Whatsapp</button>
              </a>
            </div>

            <div className="map">
              <iframe
                src={
                  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6572.496355736153!2d-58.4905055!3d-34.54727119999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1673641435130!5m2!1ses-419!2sar"
                }></iframe>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="firstName">
              <b>Name</b>
            </label>
            <input
              id="firstName"
              name="user_name"
              type="text"
              placeholder="Name"
            />

            <label htmlFor="e-mail">
              <b>E-mail:</b>
            </label>
            <input
              name="user_email"
              id="e-mail"
              type="e-mail"
              placeholder="erfajc97@gmail.com"
            />

            <label htmlFor="message">
              {" "}
              <b>Message</b>{" "}
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"></textarea>
            <div className="container_submit">
              
                <input className="submit" type="submit" value="Send" />
            
            </div>
          </form>
        </div>
      </div>
    );
};

export default Contacts;