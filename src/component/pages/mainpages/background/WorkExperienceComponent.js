import React from 'react'
import {Three as Fur,Para,Six} from '../../../reusable/fonts'
import Aos from 'aos'
import 'aos/dist/aos.css'


const WorkExperienceComponent = ({Backgroundcss,title,workdate,companytitle,companydescription,roleheader,...props}) => {

    // React.useEffect(()=>{
        Aos.init();
    // })

    return (

        <div className={Backgroundcss.body}>
                                
            <div className={Backgroundcss.work_header} data-aos="fade-in" data-aos-duration="2000">
                
                {/* main header */}
                <Fur fontClass={Backgroundcss.work_title}>{title}</Fur>

                {/* date */}
                <Six fontClass={Backgroundcss.work_date}>
                    {workdate}
                </Six>
            </div>
            
            <div className={Backgroundcss.others} data-aos="fade-in" data-aos-duration="2000">
                    {/* company header*/}
                    <Para fontClass={Backgroundcss.company_title}>{companytitle}</Para>

                    {/* company description */}
                    <Para fontClass={Backgroundcss.body_font}>
                        {companydescription}
                    </Para>

                    {/* company role */}
                    <Para fontClass={Backgroundcss.role_header}>
                        {roleheader}
                    </Para>
                    {props.children}
            </div>

        </div>


    )
}

export default WorkExperienceComponent;