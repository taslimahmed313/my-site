import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import "./Conduct.css";

const Conduct = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17gomsl",
        "template_izcalql",
        form.current,
        "oARt6nCuglWpjxYoX"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your Email Send Successfully!!")
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-32 pb-24 lg:px-16 px-12" id="conduct">
      <div data-aos="zoom-out" data-aos-duration="2000">
        <h1
          className="lg:text-4xl text-2xl text-center uppercase underline text-[#dfe3f1] 
            font-semibold   font-mono underline-offset-8"
        >
          Get In Touch
        </h1>
        <p className="mt-5 text-center text-lg lg:w-[550px] mx-auto font-semibold text-[#BFCBF2]">
          {" "}
          I’m looking for new opportunities, my Email is always open. Feel free
          to Contact me by submitting the form below and I will get back to you
          as soon as possible.
        </p>
      </div>
      <div
        className="morphy lg:w-[400px] w-full mx-auto mt-10 lg:p-8 p-4"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <form ref={form} onSubmit={sendEmail}>
          <label className="text-white text-lg font-serif font-medium">
            Name
          </label>{" "}
          <br />
          <input
            required
            className="w-full py-3 morphy rounded-md border my-2"
            type="text"
            name="user_name"
          />{" "}
          <br />
          <label className="text-white text-lg font-serif font-medium">
            Email
          </label>{" "}
          <br />
          <input
            required
            className="w-full morphy py-3 rounded-md border my-2"
            type="email"
            name="user_email"
          />{" "}
          <br />
          <label className="text-white text-lg font-serif font-medium">
            Message
          </label>{" "}
          <br />
          <textarea
            required
            className="w-full morphy py-7 rounded-md border my-2"
            name="message"
          />{" "}
          <br />
          <div
            className="outline outline-[#64FFDA] text-[#64ffda] outline-2 mx-auto font-serif allsides-8 text-lg duration-700 cursor-pointer hover:-translate-y-1  hover:scale-105 
                px-8 py-2 lg:mt-8 inline-block rounded-sm "
          >
            <input
              className=" text-[#64ffda] cursor-pointer"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Conduct;
