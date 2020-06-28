import React from 'react'
import ViewProjectCss from './ViewProject.module.css'
import {Three,Four,Para} from '../../../../reusable/fonts'
import {useSelector} from 'react-redux'
import {loadView} from '../../../../../actions'
import {useDispatch} from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ViewProject = ({info}) => {
    
    let index = useSelector(state=>state.ProjectView.index)

    const dispatch = useDispatch();

    function handlePrev(){
        dispatch(loadView({view:false,index}))
    }

    React.useEffect(()=>{
        window.scrollTo(0, 0)
    })

    Aos.init();

    return(
        
        <div className={ViewProjectCss.viewproject}>
        
            <div className={ViewProjectCss.imagecontainer} data-aos="fade-in" data-aos-duration="2000">

                <img src={info[index].imageurl} alt="" />

            </div>

            <div className={ViewProjectCss.project_description}>

                <section className={ViewProjectCss.left}>

                    <div className={`${ViewProjectCss.summary} ${ViewProjectCss.column}`}>
                    
                        <div className={ViewProjectCss.header} data-aos="fade-in" data-aos-duration="2000">
                            <Three fontClass={ViewProjectCss.three}>Summary</Three>
                        </div>

                        <div className={ViewProjectCss.body} data-aos="fade-in" data-aos-duration="2000">
                            <Para fontClass={ViewProjectCss.para}>
                                {info[index].summary}
                            </Para>
                        </div>
                    
                    </div>

                    <div className={`${ViewProjectCss.deed} ${ViewProjectCss.column}`}>
                    
                        <div className={ViewProjectCss.header} data-aos="fade-in" data-aos-duration="2000">
                            <Three fontClass={ViewProjectCss.three}>What I did</Three>
                        </div>

                        <div className={ViewProjectCss.body} data-aos="fade-in" data-aos-duration="2000">
                            <Para fontClass={ViewProjectCss.para}>
                                {info[index].deed}
                            </Para>
                        </div>
                    
                    </div>

                    <div className={`${ViewProjectCss.outcome} ${ViewProjectCss.column}`}>
                    
                        <div className={ViewProjectCss.header} data-aos="fade-in" data-aos-duration="2000">
                            <Three fontClass={ViewProjectCss.three}>Outcomes</Three>
                        </div>

                        <div className={ViewProjectCss.body} data-aos="fade-in" data-aos-duration="2000">
                            {info[index].outcome && info[index].outcome[0] && 
                            info[index].outcome.map((a,index)=>{
                                return(
                                    <Para fontClass={ViewProjectCss.para} key={index}>-&nbsp;{a}</Para>
                                )   
                            })}
                        </div>
                    
                    </div>

                </section>

                <section className={ViewProjectCss.right}>

                    <div className={`${ViewProjectCss.projectdate} ${ViewProjectCss.column}`}>
                        <div className={ViewProjectCss.header} data-aos="fade-in" data-aos-duration="2000">
                            <Four fontClass={ViewProjectCss.four}>PROJECT DATE - &nbsp;{info[index].year}</Four>
                        </div>
                    </div>

                    <div className={`${ViewProjectCss.tools} ${ViewProjectCss.column}`}>
                        
                        <div className={ViewProjectCss.header} data-aos="fade-in" data-aos-duration="2000">
                            <Three fontClass={ViewProjectCss.three}>Tools</Three>
                        </div>

                        <div className={ViewProjectCss.body} data-aos="fade-in" data-aos-duration="2000">
                            {info[index].tools && info[index].tools[0] && 
                             info[index].tools.map((a,index)=>{
                                return(
                                    <Para fontClass={ViewProjectCss.para} key={index}>-&nbsp;{a}</Para>
                                )   
                            })}
                        </div>

                    </div>

                    <div className={`${ViewProjectCss.projectstatus} ${ViewProjectCss.column}`}>
                        <div className={ViewProjectCss.header} data-aos="fade-in" data-aos-duration="2000">
                            <Three fontClass={ViewProjectCss.three}>Status</Three>
                        </div>

                        <div className={ViewProjectCss.body} data-aos="fade-in" data-aos-duration="2000">
                            <Para fontClass={`${ViewProjectCss.para} ${info[index].status ? ViewProjectCss.ok : ViewProjectCss.fail}`}>
                                {info[index].status ? 'Completed' : 'Ongoing'}
                            </Para>
                        </div>
                    </div>

                    <div className={`${ViewProjectCss.projectlink} ${ViewProjectCss.column}`}>
                        <div className={ViewProjectCss.header} data-aos="fade-in" data-aos-duration="2000">
                            <Three fontClass={ViewProjectCss.three}>Link</Three>
                        </div>

                        <div className={ViewProjectCss.body} data-aos="fade-in" data-aos-duration="2000">
                            <a target="_blank" href={`http://${info[index].url}`} rel="noopener noreferrer" style={{cursor:"pointer",textDecoration:"none"}}>
                                <Para fontClass={`${ViewProjectCss.para} ${ViewProjectCss.link}`}>
                                    {info[index].url}
                                </Para>
                            </a>
                        </div>
                    </div>

                </section>

            </div>

            {/* <div className={ViewProjectCss.imageGallery}>
                
                <div className={ViewProjectCss.imagecontainer}>
                    <img src={info[index].imageurl} alt="" />
                </div>

            </div> */}
            <div className={ViewProjectCss.prev} data-aos="flip-left" data-aos-duration="2000">
                <Para fontClass={ViewProjectCss.paraback} clickk={()=>handlePrev()}>
                    Back to Previous Page
                </Para>
            </div>

        </div>

    )

}

export default ViewProject;