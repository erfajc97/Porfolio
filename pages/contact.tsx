import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { contacts } from "@/Data/Data";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

 const form = useRef<HTMLFormElement>(null);

 const sendEmail = (e: React.FormEvent) => {
   e.preventDefault();

   if (form.current) {
     emailjs
       .sendForm(
         "service_vlargl8",
         "template_uv17arw",
         form.current,
         "WfDf2S938hj73rz9t"
       )
       .then((result) => {
         console.log(result.text);
         alert("Thanks for contacting me. I will write to your email soon.");
       })
       .catch((error) => {
         console.log(error.text);
       });
   }
 };
  return (
    <>
      <Head>
        <title>Erick | Contact</title>
      </Head>
      <Wrapper
        pageIndex={4}
        className="text-White gap-12 flex flex-col justify-center items-center lg:flex-row pt-28 lg:pt-0">
        <div className="md:px-6 py-6 text-center">
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold">
            Contact
          </div>
          <p className="leading-8 mb-8 text-sm max-w-xl mt-10 text-WhiteGray">
            If you&apos;re looking for a skilled frontend developer to help
            bring your web application ideas to life, feel free to contact me.
            Let&apos;s discuss how I can contribute to your team and deliver
            top-notch results.
          </p>
          <div>
            {contacts.map((contact) => (
              <div className="mt-6" key={contact.id}>
                <div className="text-xl font-medium mb-2">{contact.title}</div>
                <div className="text-sm text-WhiteGray">{contact.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-[30rem] px-6 text-center py-6 shadow-ShadowBlur">
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold mb-10">
            Contact Form
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <label htmlFor="firstName"></label>
              <input
                type="text"
                id="firstName"
                name="user_name"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Name"
              />
            </div>
            {/* <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Phone"
              />
            </div> */}
            <div className="flex items-center border-b border-White py-2 mb-8">
              <label htmlFor="e-mail"></label>
              <input
                type="email"
                name="user_email"
                id="e-mail"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <label htmlFor="message"></label>
              <input
                type="text"
                name="message"
                id="message"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Message"
              />
            </div>

            <input
              type="submit"
              value="Send"
              className="mt-10 px-8 submit py-4 shadow-ShadowBlur uppercase text-sm cursor-pointer"
            />
          </form>
        </div>
      </Wrapper>
    </>
  );
}
