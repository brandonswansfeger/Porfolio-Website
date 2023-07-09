import React, { useState } from "react";
import { motion as m } from "framer-motion"

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
      <m.div animate={{animation:'fadeInDownBig .7s'}}className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 rounded text-md FormControl"
          required
          style={{backgroundColor:'rgb(0,0,0,.5)', color:'turquoise', border:'1pt solid turquoise', width:'300px'}}
        />
      </m.div>
      <m.div animate={{animation:'fadeInTopLeft .7s'}} cclassName="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 relative rounded text-md FormControl"
          required
          style={{backgroundColor:'rgb(0,0,0,.5)', color:'turquoise', border:'1pt solid turquoise', width:'300px'}}
        />
      </m.div>
      <m.div className="mb-3 pt-0" animate={{animation:'fadeInLeftBig .7s'}} >
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 rounded text-md FormControl"
          required
          style={{backgroundColor:'rgb(0,0,0,.5)', color:'turquoise', border:'1pt solid turquoise', width:'300px', height:'75px'}}

        />
      </m.div>
      <div className="mb-3 pt-0" style={{display:'flex', justifyItems:'center',justifyContent:'space-around'}}>
        <button
          className="bg-blue-500 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                   type="submit" style={{fontWeight: '700', fontSize: '12px'}}
        >
          Send a message
        </button>
      </div>
      </div>
    </form>
  );
};

export default ContactForm;
