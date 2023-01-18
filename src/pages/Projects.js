import React from "react";
import Project1 from "../Components/img/project1.PNG";
import Project2 from "../Components/img/Project2.PNG";
import Project3 from "../Components/img/Project3.PNG";
import landingPage from "../Components/img/landingPage.PNG";

export default function Projects() {
         return (
         <div className="ProjectsBody">

           <div className="ProjectCard2">
                <div style={{width:'260px', marginTop:'10px'}}>
                        <p class="Text"> Python | Django | Matplotlib | Pandas | PostgreSQL </p>
                </div>
                <img class="GDPImage" src={landingPage} alt="Project0" height="150px" width="210px" style={{marginLeft:'30px', marginRight:'30px', marginTop:'10px',marginBottom:'5px', boxShadow:'4px 6px 15px 9px rgba(0,0,0,0.76)', justifyContent:'flexStart'}}/>
                <p style={{fontSize:'22.5px', lineHeight:'22px', color:'black', width:'270px', textAlign:'center', justifySelf:'top', fontWeight:'bold', justifyContent:'flexStart', marginTop:'20px', marginBottom:'-5px'}}>World Bank Data Visualization: GDP & TFR</p>
                <p style={{fontSize:'18px', color:'black', width:'260px', textAlign:'center', justifySelf:'top', justifyContent:'flexStart', fontWeight:'light', marginTop:'20px', marginBottom:'10px'}}>Fetch external data based on user input and display/render bar chart showing GDP & TFR for all countries</p>
                <a class="button" href="https://tfr-gdp-bar-chart.herokuapp.com/" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Demo</span></a>
                <a class="button" href="https://github.com/brandonswansfeger/GDP-Bar-Charts" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Github</span></a>

            
       


        </div>
            
<div className="ProjectCard">
        <div style={{width:'250px', marginTop:'10px'}}>
                <p class="Text"> JavaScript | AJAX/API | JSON | <br></br> HTML | CSS </p>
        </div>
        <img src={Project1} alt="Project1" width="95%" height="65%"style={{marginLeft:'5px', marginRight:'5px', marginTop:'0'}}/>
        <div class="ButtonLink1">
                <a class="button" href="https://county-compare-covid-vacc-death-rates.netlify.app/" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Demo</span></a>
        </div>
        <div class="ButtonLink2">
                <a class="button" style={{marginBottom:'15px'}} href="https://github.com/brandonswansfeger/Project-1" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span>Github</span></a>
        </div>
</div>
        <div className="ProjectCard">

        <div style={{width:'250px', marginTop:'10px', marginBottom:'-5px'}}>
                <p class="Text"> React JS | Node.JS | Express | <br></br> MongoDB </p>
        </div>
<img src={Project2} alt="Project1" width="95%" height="65%" style={{marginLeft:'5px', marginRight:'5px', marginTop:'0'}}/>
<div class="ButtonLink1">
<a class="button" href="https://addme-qrc.netlify.com/" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Demo</span></a>
</div>
<div class="ButtonLink2">
<a class="button" href="https://github.com/brandonswansfeger/client-Project3" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Github</span></a>
</div>

        </div>
        <div className="ProjectCard"  style={{width:"280px"}}>
        <div style={{width:'250px', marginTop:'10px'}}>
                <p class="Text"> Python | Django | PostgreSQL </p>
        </div>
<img src={Project3} alt="Project1" width="95%" height="65%" style={{marginLeft:'5px', marginRight:'5px', marginTop:'5px'}}/>
<div class="ButtonLink1">
<a class="button" href="https://dc-dev-to-dev-test.herokuapp.com/" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}" style={{marginTop:'20px'}}><span class='mb-text' >Demo</span></a>
</div>
<div class="ButtonLink2">
<a class="button" href="https://github.com/brandonswansfeger/dev-to-dev" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><span class='mb-text' >Github</span></a>
</div>


       


        </div>
         
         
         
         
         
         </div>
         )
      }
