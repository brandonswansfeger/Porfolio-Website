import React from "react";
// import { useEffect } from "react";
import ContactForm from "../Components/ContactForm";
import LinkedIn from "../Components/img/LinkedIn.PNG";
import Github from "../Components/img/Github.PNG";
import Nav from "../Components/Nav";
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
    
    <div className="ContactBody"style={{backgroundImage: "url('https://i.imgur.com/oe0juI2.png')", backgroundSize:'cover', width:'100%', height:'100vh'}}>
           <m.div className="slide-in"
                initial={{ scaleY: 0}} exit={{scaleY: 1}}
                animate={{ scaleY: 0}} transition={{duration: 1, ease: [.22, 1, 0.36, 1]}}
               />
      <div sx={{position: "relative", width: '100%', height: '100%'}}>
<m.div initial={{ scaleX: 1 }}    animate={{ scaleX: 0, transition: { duration: 0.4 }}}  
  // exit={{ scaleX: 1, transition: { duration: 0.8 }}} 
style={{
        originX: 0,
        backgroundColor: 'turquoise',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 2,
      }}/>
    </div>
      {<Nav />}
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', height:'100vh', paddingBottom: '10%'}}>
    <p style={{fontFamily:'Federo', fontSize:'50px', color:'turquoise', marginTop:'60px', marginBottom:'3%'}}>Contact Me</p>
    <ContactForm />
    <div className="MediaLinks" style={{display:'flex', flexDirection:'inline', justifyContent:'space-evenly', marginTop:'2%'}}>
      <a className="ImgLink" href="https://www.linkedin.com/in/brandonswansfeger"rel="noopener noreferrer" target="_blank"><img src={LinkedIn} alt="linkedin"/></a>
      <a className="ImgLink" href="https://github.com/brandonswansfeger"rel="noopener noreferrer" target="_blank"><img  src={Github} alt="linkedin"/></a>

    </div>
</div>
</div>
  )
};

export default Contact;
