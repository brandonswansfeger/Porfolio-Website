import React from "react";
import mobilecovid from "../Components/img/mobilecovid.PNG";
import tfrgdpcombo from "../Components/img/tfrgdpcombo.PNG";
import comboaddme from "../Components/img/comboaddme.PNG";
// import Project2 from "../Components/img/Project2.PNG";
import { motion as m } from  'framer-motion';


// import landingPage from "../Components/img/landingPage.PNG";
import Nav from "../Components/Nav";

export default function Projects() {
        return (

                <m.div className="d-flex flex-column" style={{ position: 'fixed', width: '100%',  background: 'turquoise', margin: 0, minHeight: '100vh', padding: 0 }}>
                        {/* <m.div className="slide-in"
                initial={{ scaleY: 0}} exit={{scaleY: 1}}
                animate={{ scaleY: 0}} transition={{duration: 1, ease: [.22, 1, 0.36, 1]}}
               /> */}
    {/* <div sx={{position: "relative", width: '100%', height: '100%', pointerEvents: 'none'}}>
<m.div initial={{ scaleX: 1,  animationDelay: '1s', pointerEvents: 'none' }}  
  // animate={{ scaleX: 0, transition: { duration: 4 }, animationDelay: '2s'}} 
// exit={{scaleX: 1, transition: { duration: 10 }, animationDelay: '2s' }}  
 
style={{
        originX: 0,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 80,
        pointerEvents: 'none',
      }}>
      <m.div className="motionRows" style={{backgroundColor: 'black', border: '1px solid blue'}} animate={{animation: 'animateTest 1s linear .1s', animationFillMode: 'both', pointerEvents: 'none' }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid blue'}}  animate={{animation: 'animateTest 1s linear .3s', animationFillMode: 'both', pointerEvents: 'none' }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid blue'}}  animate={{animation: 'animateTest 1s linear .5s', animationFillMode: 'both', pointerEvents: 'none' }} />
      <m.div className="motionRows"  style={{backgroundColor: 'black', border:'1px solid blue'}} animate={{animation: 'animateTest 1s linear .7s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows"style={{backgroundColor: 'black', border:'1px solid blue'}} animate={{animation: 'animateTest 1s linear .9s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid blue'}} animate={{animation: 'animateTest 1s linear 1.1s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid blue'}} animate={{animation: 'animateTest 1s linear 1.3s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid blue'}}  animate={{animation: 'animateTest 1s linear 1.5s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid blue'}} animate={{animation: 'animateTest 1s linear 1.7s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div className="motionRows" style={{backgroundColor: 'black', border:'1px solid blue'}} animate={{animation: 'animateTest 1s linear 1.9s', animationFillMode: 'both', pointerEvents: 'none'  }} />
      <m.div/>
    </m.div>
    </div> */}
                        {<Nav color={'black'} outline={'turquoise'} bottom={'auto'} />}
<div className="placeholder" style={{top: '50px', backgroundColor: 'turquoise', position: 'fixed', height:''}}>

</div>
 <p style={{ fontFamily: 'Federo', width: '100%', fontSize: '50px', color: 'black', position: 'absolute', paddingLeft: 'auto', paddingRight: 'auto', textAlign: 'center', lineHeight: '1', backgroundColor: 'transparent', top: '8rem', paddingTop: '2rem' }}>Projects</p>
                       
<div style={{maxHeight: '100vh', overflow: 'auto'}}>

         <div className="ProjectsBody d-flex flex-wrap justify-content-center" style={{overflow: 'visible', height: '100%', paddingBottom: '2rem', marginTop: '15rem'}}>

                                        <m.div className="ProjectCard zoom" initial={{opacity: '0%'}} animate={{animation: 'zoomIn 2s', opacity: '100%', animationFillMode: 'before'}}>
                                                <div style={{ width: '100%', marginTop: '10px', borderRadius: '5px', marginBottom: '15px', height: '40px' }}>
                                                        <p className="Text" style={{ textAlign: 'center' }}> Python | Django | Matplotlib | Pandas | PostgreSQL </p>
                                                </div>
                                                <img className="ProjectImage GDPImage" src={tfrgdpcombo} alt="Project0" height="210px" width="95%" style={{ textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }} />
                                                <div style={{ width: '100%', marginTop: '10px', backgroundColor: 'black'}}>
                                                        <p className="Text2" style={{ textAlign: 'center', width: '80%', color: 'turquoise', marginBottom: 'auto', marginRight: 'auto', marginLeft: 'auto' }}> World Bank Data Visualization: GDP & TFR</p>
                                                </div>
                                                {/* <p style={{ fontSize: 'medium', lineHeight: '22px', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', fontWeight: 'bold', justifyContent: 'flexStart', marginTop: '20px', marginBottom: '-5px' }}></p> */}
                                                <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', height: '150px',  borderRadius: '0 0 20px 20px', marginBottom: 0}}>
                                                <p style={{ fontSize: 'small', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', justifyContent: 'flexStart', fontWeight: 'light', marginTop: '5px', marginBottom: 'auto', marginRight: 'auto', marginLeft: 'auto'  }}>Fetch external data based on user input and display/render bar chart showing GDP & TFR for all countries</p>
                                                <div className="d-flex flex-row flex-wrap" style={{ marginTop: '3px', marginBottom: '15px' }}>
                                                        <a className="ml-auto ButtonBorder3" href="https://gdb-tfr-chart-7834bdc1c805.herokuapp.com/"
                                                                rel="noreferrer"
                                                                target="_blank" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className='buttonText' >Demo</div></a>
                                                        <a className="mr-auto ButtonBorder3" href="https://github.com/brandonswansfeger/GDP-Bar-Charts" rel="noreferrer"
                                                                target="_blank" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className='buttonText' >Github</div></a>

                                                </div>
                                               

                                                </div>






                                </m.div>
                            
                                


    <m.div animate={{animation: 'zoomIn 2s'}} className="ProjectCard zoom">
                                        <div className="d-flex flex-row justify-content-center" style={{ height: '250px', marginTop: '5%' }}>
                                                <div style={{ width: '31%', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', minWidth: '113px', height: '40px' }}>
                                                        <p className="Text"> JavaScript | AJAX/API | JSON | HTML | CSS </p>
                                                </div>
                                                <img className="ProjectImage" src={mobilecovid} alt="Project1" style={{ marginLeft: '5%', marginRight: 'auto', marginTop: '10px', height: '240px', width: '30%', minWidth: '100px' }} />

                                        </div>
                                        <div style={{ width: '100%', marginTop: '10px', backgroundColor: 'black', height: '50px'}}>
                                                <p className="Text2" style={{ textAlign: 'center', width: '80%', color: 'turquoise' }}> Covid-19 Data Comparison Chart</p>
                                        </div>
                                        {/* <p style={{ fontSize: 'medium', lineHeight: '22px', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', fontWeight: 'bold', justifyContent: 'flexStart', marginTop: '20px', marginBottom: '-5px' }}></p> */}
                                        <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', height: '150px',  borderRadius: '0 0 20px 20px', marginBottom: 0}}>
                                        <p style={{ fontSize: 'small', height: '150px', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', justifyContent: 'flexStart', fontWeight: 'light', marginTop: '5px', marginBottom: 'auto', marginRight: 'auto', marginLeft: 'auto'   }}>Compare Covid-19 data indicators for two different counties side-by-side (vaccination rate for first dose, case rate per 10,000, and death rate per 100,00)</p>
                                        <div className="d-flex flex-row" style={{ marginTop: '3px', marginBottom: '30px' }}>
                                                <div className="ml-auto ButtonLink2">
                                                        <a className="ml-auto ButtonBorder3" href="https://county-compare-covid-vacc-death-rates.netlify.app/"
                                                                rel="noreferrer"
                                                                target="_blank" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className='buttonText' >Demo</div></a>
                                                </div>
                                                <div className="mr-auto ButtonLink2">
                                                        <a className="mr-auto ButtonBorder3" href="https://github.com/brandonswansfeger/Project-1" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" rel="noreferrer"
                                                                target="_blank" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className="buttonText">Github</div></a>
                                                </div>
</div>

                                        </div>

                                </m.div>




   <m.div animate={{animation: 'zoomIn 2s'}} className="ProjectCard zoom">

                                        <div style={{ width: '100%', backgroundColor: 'transparent', marginTop: '10px', borderRadius: '5px'}}>
                                                <p className="Text" style={{ textAlign: 'center', paddingLeft: '2px', paddingRight: '2px', height:'40px' }}>  React JS | Node.JS | Express | MongoDB</p>
                                        </div>
                                        <img className="ProjectImage GDPImage" src={comboaddme} alt="Project0" height="210px" width="auto" style={{ textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }} />
                                        <div style={{ width: '100%', marginTop: '10px', backgroundColor: 'black', height: '50px', display: 'flex'}}>
                                                <p className="mt-auto mb-auto Text2" style={{ textAlign: 'center', width: '80%', color: 'turquoise' }}>AddMe-QRC </p>
                                        </div>
                                        {/* <p style={{ fontSize: 'medium', lineHeight: '22px', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', fontWeight: 'bold', justifyContent: 'flexStart', marginTop: '20px', marginBottom: '-5px' }}></p> */}
                                        <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', height: '150px',  borderRadius: '0 0 20px 20px', marginBottom: 0, width: '100%'}}>
                                        <p style={{ fontSize: 'small', height: '13%', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', justifyContent: 'flexStart', fontWeight: 'light', marginTop: '5px', marginBottom: 'auto', marginRight: 'auto', marginLeft: 'auto' }}>VCard / QR Code Generator and Online Business Directory</p>
                                        <div className="d-flex flex-row flex-wrap" style={{ marginBottom: '15px' }}>
                                                <a className="ml-auto ButtonBorder3" href="https://addme-qrc.netlify.app/" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" rel="noreferrer"
                                                        target="_blank" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className='buttonText' >Demo</div></a>
                                                <a className="mr-auto ButtonBorder3" href="https://github.com/brandonswansfeger/client-Project3" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}"
                                                        rel="noreferrer"
                                                        target="_blank" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className='buttonText' >Github</div></a>


                                        </div>

</div>




                                </m.div>


                             




                        </div>
</div>
                       


                </m.div>






                

               
               
        )
}
