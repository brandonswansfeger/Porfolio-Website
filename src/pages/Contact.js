import React from "react";
// import { useEffect } from "react";
import ContactForm from "../Components/ContactForm";
import LinkedIn from "../Components/img/LinkedIn.PNG";
import Github from "../Components/img/Github.PNG";
import Nav from "../Components/Nav";
// import{motion as m} from ""
import { motion as m } from  'framer-motion';

function Contact() {
  // useEffect(() => {
  //   if (document) {
  //     const stylesheet = document.createElement("link");
  //     stylesheet.rel = "stylesheet";
  //     stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

  //     document.head.appendChild(stylesheet);
  //   }
  // }, []);

  return (
    
    <m.div animate={{animation: 'fadeIn 1s'}} className="ContactBody"style={{backgroundImage: "url('https://i.imgur.com/oe0juI2.png')", backgroundSize:'cover', width:'100%', minHeight:'100vh', margin: 0, padding: 0}}>
           {/* <m.div className="slide-in"
                initial={{ scaleY: 0}} exit={{scaleY: 1}}
                animate={{ scaleY: 0}} transition={{duration: 1, ease: [.22, 1, 0.36, 1]}}
               /> */}

      {<Nav  outline={'turquoise'}/>}
    <div style={{display:'flex', flexDirection:'column', justifyContent:'start',alignItems:'center', height:'100vh', paddingBottom: '10%'}}>
    <p style={{fontFamily:'Federo', fontSize:'50px', color:'turquoise', marginTop:'60px', marginBottom:'3%'}}>Contact Me</p>
    <ContactForm />
    <div className="MediaLinks" style={{display:'flex', flexDirection:'inline', justifyContent:'space-evenly', marginTop:'2%'}}>
      <a className="ImgLink p-1" href="https://www.linkedin.com/in/brandonswansfeger"rel="noopener noreferrer" target="_blank"><img src={LinkedIn} alt="linkedin"/></a>
      <a className="ImgLink p-1" href="https://github.com/brandonswansfeger"rel="noopener noreferrer" target="_blank"><img  height='100%' width='auto' src={Github} alt="linkedin"/></a>

    </div>
</div>
</m.div>
  )
};

export default Contact;
