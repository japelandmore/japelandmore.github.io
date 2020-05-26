import React from 'react';
import UpdateCss from './Update.module.css'
import {One,Three,Para} from '../../../reusable/fonts';

const Update = () => {

    const action = "delete";
    const filetype = "article"

    const [projectItemQuery,setProjectItemQuery] = React.useState({
        project_name : "",
        project_category : ""
    });

    const [articleItemQuery,setArticleItemQuery] = React.useState({
        article_title : ""
    });

    function projectQuery(){
        
    }

    function articleQuery(){
        
    }

    function handleProjectInput(e){
        setProjectItemQuery({[e.target.name] : e.target.value})
    }

    function handleArticleInput(e){
        setArticleItemQuery({[e.target.name] : e.target.value})
    }

    return (

        <div className={UpdateCss.update}>
            
            <div className={UpdateCss.container}>

                <div className={UpdateCss.mheader}>
                    
                    { action === 'update' && <One fontClass={UpdateCss.one}>Update</One> }
                    { action === 'update' && filetype === 'project' && <Para fontClass={UpdateCss.para}>Update Project</Para> }
                    { action === 'update' && filetype === 'article' && <Para fontClass={UpdateCss.para}>Update Article</Para> }
                    
                    { action === 'delete' && <One fontClass={UpdateCss.one}>Delete</One> }
                    { action === 'delete' && filetype === 'project' && <Para fontClass={UpdateCss.para}>Delete Project</Para> }
                    { action === 'delete' && filetype === 'article' && <Para fontClass={UpdateCss.para}>Delete Article</Para> }
                    
                </div>

                <div className={UpdateCss.mbody}>

                    <div className={UpdateCss.query}>

                        {
                            filetype === 'project' &&
                        
                                <div className={UpdateCss.form}>

                                    <label for="project_name">Project Name</label>
                                    <input type="text" name="project_name" required onChange={(e)=>handleProjectInput(e)}
                                        value={projectItemQuery.project_name}></input>

                                    <label for="project_category">Project Category</label>
                                    <select required
                                    onChange={(e)=>handleProjectInput(e)} 
                                    value={projectItemQuery.project_category} 
                                    name="project_category">
                                        <option>Select Option</option>
                                        <option>UI-UX Design</option>
                                        <option>Branding</option>
                                        <option>Web Design</option>
                                        <option>Business Analysis</option>
                                    </select>

                                    <button onClick={()=>projectQuery()}>Search</button>

                                </div>
                        }

                        {
                            filetype === 'article' &&
                        
                                <div className={UpdateCss.form}>    

                                    <label for="article_title">Article Title</label>
                                    <input type="text" name="article_title" required onChange={(e)=>handleArticleInput(e)}
                                        value={articleItemQuery.article_title}></input>

                                    <button onClick={()=>articleQuery()}>Search</button>

                                </div>
                        }

                    </div>

                    <div className={UpdateCss.update_section}>

                        { action === 'update' && filetype === 'project' &&
                            <>
                            
                            </>
                        }

                        { action === 'delete' && filetype === 'project' &&
                            <>
                                <div className={UpdateCss.delete_Section}>

                                    <div className={UpdateCss.header}>
                                        <Three fontClass={UpdateCss.three}>
                                            Are you sure you want to delete project ?
                                        </Three>
                                    </div>
                                    <div className={UpdateCss.body}>
                                        <button>Delete Project</button>
                                        <button>Exit</button>
                                    </div>

                                </div>
                            </>
                        }

                        { action === 'update' && filetype === 'article' &&
                            <>
                            
                            </>
                        }

                        { action === 'delete' && filetype === 'article' &&
                            <>
                                <div className={UpdateCss.delete_Section}>

                                    <div className={UpdateCss.header}>
                                        <Three fontClass={UpdateCss.three}>
                                            Are you sure you want to delete article ?
                                        </Three>
                                    </div>
                                
                                    <div className={UpdateCss.body}>
                                        <button>Delete Article</button>
                                        <button>Exit</button>
                                    </div>

                                </div>
                            
                            </>
                        }

                    </div>

                </div>

            </div>

        </div>

    )
}


export default Update;

