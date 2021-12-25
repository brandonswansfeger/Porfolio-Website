import React from "react";
import Project1 from "../Components/img/project1.PNG";
import Project2 from "../Components/img/Project2.PNG";
import Project3 from "../Components/img/Project3.PNG";

export default function Projects() {
         return (
         <div className="ProjectsBody">
            
        <div className="ProjectCard">
<img src={Project1} alt="Project1" style={{marginLeft:'5px', marginRight:'5px', marginTop:'0'}}/>
<a class="button" href="https://vaxx-cases-deathg.herokuapp.com/" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Demo</span></a>
<a class="button" href="https://github.com/brandonswansfeger/Project-1" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Github</span></a>


        </div>
        <div className="ProjectCard">
<img src={Project2} alt="Project1" style={{marginLeft:'5px', marginRight:'5px', marginTop:'0'}}/>
<a class="button" href="https://addme-qrc.netlify.com/" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Demo</span></a>
<a class="button" href="https://github.com/brandonswansfeger/client-Project3" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Github</span></a>


        </div>
        <div className="ProjectCard" style={{width:"280px"}}>
<img src={Project3} alt="Project1" style={{marginLeft:'5px', marginRight:'5px', marginTop:'-10px'}} height=""/>
<a class="button" href="https://dc-dev-to-dev-test.herokuapp.com/" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}" style={{marginTop:'20px'}}><span class='mb-text' >Demo</span></a>
<a class="button" href="https://github.com/brandonswansfeger/dev-to-dev" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Github</span></a>


        </div>
         
         
         
         
         
         </div>
         )
      }