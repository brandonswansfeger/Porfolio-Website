import React from "react";
import mobilecovid from "../Components/img/mobilecovid.PNG";
import tfrgdpcombo from "../Components/img/tfrgdpcombo.PNG";
import comboaddme from "../Components/img/comboaddme.PNG";
// import Project2 from "../Components/img/Project2.PNG";

// import landingPage from "../Components/img/landingPage.PNG";
import Nav from "../Components/Nav";

export default function Projects() {
        return (

                <div className="d-flex flex-column" style={{ position: 'fixed', width: '100%', height: '100vh', top: '13vh', backgroundColor: 'turquoise' }}>
                        {<Nav />}
<div className="placeholder" style={{top: '50px', backgroundColor: 'turquoise', position: 'fixed', height:''}}>

</div>
 <p style={{ fontFamily: 'Federo', width: '100%', fontSize: '50px', color: 'black', position: 'relative', paddingLeft: 'auto', paddingRight: 'auto', textAlign: 'center', lineHeight: '1', backgroundColor: 'turquoise', zIndex: 1, marginTop: '-20px', paddingTop: '20px' }}>Projects</p>
                       

                        <div className="ProjectsBody sibling-fade pb-5">
                                <div className="placeholder" style={{height: '50px'}}>

                                </div>
                                <div className="ProjectCard">
                                        <div style={{ width: '100%', marginTop: '10px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '15px' }}>
                                                <p className="Text" style={{ textAlign: 'center' }}> Python | Django | Matplotlib | Pandas | PostgreSQL </p>
                                        </div>
                                        <img className="ProjectImage GDPImage" src={tfrgdpcombo} alt="Project0" height="auto" width="95%" style={{ textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }} />
                                        <div style={{ width: '100%', marginTop: '10px', backgroundColor: 'black', marginBottom: '5px' }}>
                                                <p className="Text2" style={{ textAlign: 'center', width: '80%', color: 'turquoise' }}> World Bank Data Visualization: GDP & TFR</p>
                                        </div>
                                        {/* <p style={{ fontSize: 'medium', lineHeight: '22px', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', fontWeight: 'bold', justifyContent: 'flexStart', marginTop: '20px', marginBottom: '-5px' }}></p> */}
                                        <p style={{ fontSize: 'small', height: '13%', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', justifyContent: 'flexStart', fontWeight: 'light', marginTop: '5px', marginBottom: 'auto' }}>Fetch external data based on user input and display/render bar chart showing GDP & TFR for all countries</p>
                                        <div className="d-flex flex-row flex-wrap" style={{ marginTop: '3px', marginBottom: '15px' }}>
                                                <a className="ButtonBorder3" href="https://gdb-tfr-chart-7834bdc1c805.herokuapp.com/"
                                                        rel="noreferrer"
                                                        target="_blank" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className='buttonText' >Demo</div></a>
                                                <a className="ButtonBorder3" href="https://github.com/brandonswansfeger/GDP-Bar-Charts" rel="noreferrer"
                                                        target="_blank" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className='buttonText' >Github</div></a>


                                        </div>






                                </div>

                                <div className="ProjectCard">
                                        <div className="d-flex flex-row justify-content-center" style={{ height: '250px', marginTop: '5%' }}>
                                                <div style={{ width: '31%', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', minWidth: '113px' }}>
                                                        <p className="Text"> JavaScript | AJAX/API | JSON | HTML | CSS </p>
                                                </div>
                                                <img className="ProjectImage" src={mobilecovid} alt="Project1" style={{ marginLeft: '5%', marginRight: 'auto', marginTop: '10px', height: 'auto', width: '30%', minWidth: '100px' }} />

                                        </div>
                                        <div style={{ width: '100%', marginTop: '10px', backgroundColor: 'black', marginBottom: '5px' }}>
                                                <p className="Text2" style={{ textAlign: 'center', width: '80%', color: 'turquoise' }}> Covid-19 Data Comparison Chart</p>
                                        </div>
                                        {/* <p style={{ fontSize: 'medium', lineHeight: '22px', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', fontWeight: 'bold', justifyContent: 'flexStart', marginTop: '20px', marginBottom: '-5px' }}></p> */}
                                        <p style={{ fontSize: 'small', height: '13%', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', justifyContent: 'flexStart', fontWeight: 'light', marginTop: '5px', marginBottom: 'auto' }}>Compare Covid-19 data indicators for two different counties side-by-side (vaccination rate for first dose, case rate per 10,000, and death rate per 100,00)</p>
                                        <div className="d-flex flex-row" style={{ marginTop: '3px', marginBottom: '15px' }}>
                                                <div className="ButtonLink2">
                                                        <a className="ButtonBorder3" href="https://county-compare-covid-vacc-death-rates.netlify.app/"
                                                                rel="noreferrer"
                                                                target="_blank" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className='buttonText' >Demo</div></a>
                                                </div>
                                                <div className="ButtonLink2">
                                                        <a className="ButtonBorder3" href="https://github.com/brandonswansfeger/Project-1" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" rel="noreferrer"
                                                                target="_blank" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className="buttonText">Github</div></a>
                                                </div>


                                        </div>

                                </div>
                                <div className="ProjectCard">

                                        <div style={{ width: '100%', marginTop: '10px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '15px' }}>
                                                <p className="Text" style={{ textAlign: 'center', paddingLeft: '2px', paddingRight: '2px' }}>  React JS | Node.JS | Express | MongoDB</p>
                                        </div>
                                        <img className="ProjectImage GDPImage" src={comboaddme} alt="Project0" height="auto" width="95%" style={{ textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }} />
                                        <div style={{ width: '100%', marginTop: '10px', backgroundColor: 'black', marginBottom: '5px' }}>
                                                <p className="Text2" style={{ textAlign: 'center', width: '80%', color: 'turquoise', lineHeight: '2.5' }}> AddMe-QRC</p>
                                        </div>
                                        {/* <p style={{ fontSize: 'medium', lineHeight: '22px', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', fontWeight: 'bold', justifyContent: 'flexStart', marginTop: '20px', marginBottom: '-5px' }}></p> */}
                                        <p style={{ fontSize: 'small', height: '13%', color: 'black', width: '90%', textAlign: 'center', justifySelf: 'top', justifyContent: 'flexStart', fontWeight: 'light', marginTop: '5px', marginBottom: 'auto' }}>VCard / QR Code Generator and Online Business Directory</p>
                                        <div className="d-flex flex-row flex-wrap" style={{ marginBottom: '15px' }}>
                                                <a className="ButtonBorder3" href="https://addme-qrc.netlify.app/" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}" rel="noreferrer"
                                                        target="_blank" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className='buttonText' >Demo</div></a>
                                                <a className="ButtonBorder3" href="https://github.com/brandonswansfeger/client-Project3" data-maxbuttoncounter="{&quot;button_id&quot;:204038,&quot;url&quot;:&quot;[empty]&quot;}"
                                                        rel="noreferrer"
                                                        target="_blank" data-maxbuttonpage="{&quot;id&quot;:false,&quot;type&quot;:false}"><div className='buttonText' >Github</div></a>


                                        </div>






                                </div>




                        </div>


                </div>






                

               
               
        )
}
