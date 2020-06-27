import React from 'react';
import WorkCss from './Work.module.css';
import {One as HeaderFont,Two,Para} from '../../../reusable/fonts'
import ProjectComponent from './ProjectComponent';
import WorkPageController from '../../../framework/controllers/WorkPageController';
import ProjectHeaderTab from './ProjectHeaderTab';
import tabitems from './ProjectHeaderTabItems';
import MainPage from './workcomponent/MainPage'
import ViewProject from './workcomponent/ViewProject'
import {useSelector,useDispatch} from 'react-redux'
import {loadView} from '../../../../actions'

const Work = () => {

    const [projectCategories, setProjectCategories] = React.useState({
        category: "All"
    });

    const [project,setProject] = React.useState([]);

    const [subpageinfo,setSubPageInfo] = React.useState([])

    const dispatch = useDispatch();

    function handlePrev(){
        dispatch(loadView({view:false,index}))
    }

    React.useEffect(()=>{
        window.scrollTo(0, 0)
        function loadProjects(){
            !project[0] && WorkPageController.handleLoad(setProject,projectCategories.category,WorkCss,ProjectComponent,setSubPageInfo);
        }
        loadProjects();
    })


    const ProjectTab = tabitems.map((p)=>{
        return <ProjectHeaderTab key={p.id} WorkCss={WorkCss} handleProjectSelection={handleProjectSelection} 
                projectCategories={projectCategories.category} category={p.category} />
    })

    function handleProjectSelection(category){
        setProjectCategories({category : category});
        WorkPageController.handleLoad(setProject,category,WorkCss,ProjectComponent,setSubPageInfo);
    }

    let index = useSelector(state=>state.ProjectView.index);

    return(

        <div className={WorkCss.work}>

            <div className={WorkCss.topheader}>
                {
                    !useSelector(state=>state.ProjectView.view) ?
                        <HeaderFont fontClass={WorkCss.headfont}>My Work</HeaderFont>
                    :
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <Two fontClass={WorkCss.headfont2}>
                                My Work&nbsp;&nbsp;>&nbsp;&nbsp;My Projects&nbsp;&nbsp;>&nbsp;&nbsp;
                                {subpageinfo[index].title}
                            </Two>
                            <Para clickk={()=>handlePrev()} fontStyle={{cursor:"pointer",color:"#fff",fontSize:".78em"}}>
                                Back to Previous Page
                            </Para>
                        </div>
                }
                
                
                
            </div>

            <div className={WorkCss.underlap_container}></div>

            <div className={WorkCss.container}>
                {
                !useSelector(state=>state.ProjectView.view) ?
                    <MainPage ProjectTab={ProjectTab} project={project} />
                :
                    <ViewProject info={subpageinfo} />
                }
                {/* imageurl,summary,deed,outcome,tools,status,project_link,projectdate */}
            </div>

        </div>

    )
}

export default Work;