import React from "react";
import { useEffect } from "react";
import ContactForm from "../Components/ContactForm";
import LinkedIn from "../Components/img/LinkedIn.PNG";
import Github from "../Components/img/Github.PNG";

function Contact() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    
    <div className="ContactBody"style={{backgroundImage: "url('https://i.imgur.com/oe0juI2.png')", backgroundSize:'100% 100%', width:'100%', height:'600px'}}>
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around',alignItems:'center'}}>
    <p style={{fontFamily:'Federo', fontSize:'50px', color:'turquoise', marginTop:'5%', marginBottom:'3%'}}>Contact Me</p>
    <ContactForm />
    <div className="MediaLinks" style={{display:'flex', flexDirection:'inline', justifyContent:'space-evenly', marginTop:'2%'}}>
      <a href="https://www.linkedin.com/in/brandonswansfeger"rel="noopener noreferrer" target="_blank"><img className="ImgLink" src={LinkedIn} alt="linkedin"/></a>
      <a href="https://github.com/brandonswansfeger"rel="noopener noreferrer" target="_blank"><img className="ImgLink" src={Github} alt="linkedin"/></a>

    </div>
</div>
</div>
  )
};

export default Contact;