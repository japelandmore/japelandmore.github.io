import React from 'react';
import {Para} from '../../../reusable/fonts'

const ProjectHeaderTab = ({WorkCss,handleProjectSelection,projectCategories,category}) => {
    return(

        <div className={WorkCss.tab_item} onClick={()=>handleProjectSelection(category)} >
            <Para fontClass={WorkCss.tab_font}
                fontStyle={{color: projectCategories === category ? "#260590" : "inherit",
                fontFamily: projectCategories === category ? "encode_sans_bold" : "encode_sans"}}>{category}</Para>
                <span className={projectCategories === category && WorkCss.line}></span>
        </div>

    )
}


export default ProjectHeaderTab;