import React from 'react'
import {Three as Fur,Para,Six} from '../../../reusable/fonts'

const WorkExperienceComponent = ({Backgroundcss,title,workdate,companytitle,companydescription,roleheader,...props}) => {

    return (

        <div className={Backgroundcss.body}>
                                
            <div className={Backgroundcss.work_header}>
                
                {/* main header */}
                <Fur fontClass={Backgroundcss.work_title}>{title}</Fur>

                {/* date */}
                <Six fontClass={Backgroundcss.work_date}>
                    {workdate}
                </Six>
            </div>
            
            <div className={Backgroundcss.others}>
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