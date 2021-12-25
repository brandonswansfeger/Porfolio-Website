import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/16092cc0-6528-11ec-b2d5-af79f33d926c"; // fill-in later

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank">
    <div className="FormBody" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'top'}}>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 rounded text-md"
          required
          style={{backgroundColor:'rgb(0,0,0,.5)', placeholder:'black', border:'1pt solid turquoise', width:'300px'}}
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 relative bg-rgb(0,0,0,.5) rounded text-md"
          required
          style={{backgroundColor:'rgb(0,0,0,.5)', placeholder:'black', border:'1pt solid turquoise', width:'300px'}}
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 rounded text-md"
          required
          style={{backgroundColor:'rgb(0,0,0,.5)', placeholder:'black', border:'1pt solid turquoise', width:'300px', height:'75px'}}

        />
      </div>
      <div className="mb-3 pt-0" style={{display:'flex', justifyItems:'center',justifyContent:'space-around'}}>
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
      </div>
    </form>
  );
};

export default ContactForm;