import React from 'react'
import formcss from '../form.module.css'
import {Four,Para} from '../../../../../../reusable/fonts/Font'
import {useDispatch} from 'react-redux';
import {storeFormData} from '../../../../../../../actions/actions'

const ProjectForm = ({data}) => {

    // const data = useSelector(state => state.storeContent);
    // var d = new Date();

    // const [object,setObject] = React.useState({
        // id: UploadController.getObjectID(),
        // date_created : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`,
        // last_modified : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    // })

    const dispatch = useDispatch();

    const [object,setObject] = React.useState({...data});

    const [objectError] = React.useState({})

    function handleInput(e){
        setObject({...object,[e.target.name]:e.target.value});
    }

    function addInput(child){
        let clonechild = child;
        clonechild.push('');
        setObject({...object,child:clonechild})
    }
    
    function handleRemove(index,child){
        if(index > 0){
            let clonechild = child;
            clonechild.splice(index,1);
            setObject({...object,child:clonechild});
        } 
    }

    function handleInput2(e,index,child){
        let clonechild = child;
        clonechild[index] = e.target.value;
        setObject({...object,child:clonechild});
    }

    function handleStatus(){
        setObject({...object,status:!object.status})
    }

    dispatch(storeFormData(object))

    return (
        
        <div className={formcss.main}>

                <div className={formcss.form}>
                    
                    {/* name */}
                    <label for="title" >Name</label>
                    <input type="text" placeholder="product name" name="title" required 
                            onChange={(e)=>handleInput(e)} 
                            value={object.title}></input>    
                    {
                        objectError.titleError !== "" ? 
                        <Para fontClass={formcss.error}>
                            {objectError.titleError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* description */}
                    <label for="description">Description</label>
                    <textarea placeholder="Project description (make it brief)" name="description" required
                            onChange={(e)=>handleInput(e)} 
                            value={object.description} ></textarea>
                    {
                        objectError.descriptionError !== "" ?
                        <Para fontClass={formcss.error}>
                            {objectError.descriptionError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    <label for="category">Category</label>
                    <select required
                        onChange={(e)=>handleInput(e)} 
                        value={object.category} 
                        name="category" >
                            <option>Select Option</option>
                            <option>UI-UX Design</option>
                            <option>Branding</option>
                            <option>Web Design</option>
                            <option>Business Analysis</option>
                    </select>
                    {
                        objectError.categoryError !== "" ?
                        <Para fontClass={formcss.error}>
                            {objectError.categoryError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {/* company name */}
                    <label for="company">Company</label>
                    <input type="text" placeholder="company name" name="company" required
                            onChange={(e)=>handleInput(e)} 
                            value={object.company} ></input>    
                    {
                        objectError.companyError !== "" ? 
                        <Para fontClass={formcss.error}>
                            {objectError.companyError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* project year */}
                    <label for="year">Year</label>
                    <input type="text" placeholder="project year" name="year" required
                            onChange={(e)=>handleInput(e)} 
                            value={object.year} ></input>    
                    {
                        objectError.yearError !== "" ? 
                        <Para fontClass={formcss.error}>
                            {objectError.yearError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {/* project url */}
                    <label for="link">Project URL</label>
                    <input type="text" placeholder="project url" name="url" required
                            onChange={(e)=>handleInput(e)} 
                            value={object.url} ></input>    
                    {
                        objectError.urlError !== "" ? 
                        <Para fontClass={formcss.error}>
                            {objectError.urlError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {/* project summary*/}
                    <label for="summary">Overview</label>
                    <textarea placeholder="Project Summary" name="summary" required
                            onChange={(e)=>handleInput(e)} 
                            value={object.summary}></textarea>
                    {
                        objectError.summaryError !== "" ?
                        <Para fontClass={formcss.error}>
                            {objectError.summaryError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* project deed*/}
                    <label for="deed">What I Did</label>
                    <textarea placeholder="A brief narration of project activities" name="deed" required
                            onChange={(e)=>handleInput(e)} 
                            value={object.deed}></textarea>
                    {
                        objectError.deedError !== "" ?
                        <Para fontClass={formcss.error}>
                            {objectError.deedError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {/* project outcomes */}
                    <label for="outcome">Project Outcome</label>
                    {object.outcome && object.outcome.map((a,index)=>{
                        return(
                            <div key={index} style={{width:"100%",textAlign:"right"}}>
                                <input type="text" placeholder={`outcome #${index+1}`} name="outcome" required
                                onChange={(e)=>handleInput2(e,index,object.outcome)} value={a} ></input>
                                
                                    {index > 0 && <Para fontStyle={{cursor:"pointer",color:"#c4c4c4"}} 
                                        clickk={()=>{handleRemove(index,object.outcome)}}>remove</Para>}
                                {
                                objectError.outcomeError !== "" ? 
                                    <Para fontClass={formcss.error}>
                                        {objectError.outcomeError}
                                    </Para>
                                : 
                                    <div style={{height: "20px"}}/>
                                }
                            </div>
                        )
                    })}
                    <button onClick={()=>{addInput(object.outcome)}} style={{marginBottom:"50px"}}>ADD ANOTHER OUTCOME</button>
                    
                    {/* project tools */}
                    <label for="tools">Tools</label>
                    {object.tools && object.tools.map((a,index)=>{
                        return(
                            <div key={index} style={{width:"100%",textAlign:"right"}}>
                                <input type="text" placeholder={`Tools #${index+1}`} name="tools" required
                                onChange={(e)=>handleInput2(e,index,object.tools)} value={a} ></input>
                                
                                    {index > 0 && <Para fontStyle={{cursor:"pointer",color:"#c4c4c4"}} 
                                        clickk={()=>{handleRemove(index,object.tools)}}>remove</Para>}
                                {
                                objectError.toolsError !== "" ? 
                                    <Para fontClass={formcss.error}>
                                        {objectError.toolsError}
                                    </Para>
                                : 
                                    <div style={{height: "20px"}}/>
                                }
                            </div>
                        )
                    })}
                    <button onClick={()=>{addInput(object.tools)}} style={{marginBottom:"50px"}}>ADD ANOTHER PROJECT TOOL</button>
                    
                    {/* status */}
                    <label for="status">Status</label>
                    <div className={formcss.statuscontainer}>
                        <Para fontClass={formcss.para}>Project Completed ?</Para>
                        <input type="checkbox" name="status" required
                                onClick={()=>{handleStatus()}} 
                                value={object.status} className={formcss.status} ></input> 
                    </div>   
                    {
                        objectError.yearError !== "" ? 
                        <Para fontClass={formcss.error}>
                            {objectError.yearError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    

                    {objectError.titleError !== "" && 
                        <Four fontClass={formcss.four}>
                            {objectError.titleError}
                        </Four>}

                </div>

        </div>

    )

}

export default ProjectForm