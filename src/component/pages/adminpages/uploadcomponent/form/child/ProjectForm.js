import React from 'react'
import formcss from '../form.module.css'
import {Four,Para} from '../../../../../reusable/fonts'
import UploadController from '../../../../../framework/controllers/UploadController'
import {storeFormData} from '../../../../../../actions'
import {useDispatch} from 'react-redux'


const ProjectForm = ({labelColor,inputstyle,selectstyle,textstyle,buttonstyle}) => {

    var d = new Date();

    const dispatch = useDispatch();

    const [object,setObject] = React.useState({
        id: 0,
        date_created : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`,
        last_modified : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    })

    dispatch(storeFormData(object));

    const [objectError,setobjectError] = React.useState({})

    function handleInput(e){
        setObject({...object,[e.target.name]:e.target.value});
    }

    // React.useEffect(()=>{
    //     function setProjectID(){
    //         object.id && UploadController.setObjectID(object)
    //     }setProjectID()
    // })
    
    return (
        
        <div className={formcss.main}>

                <div className={formcss.form}>
                    
                    {/* name */}
                    <label for="title" style={{color:labelColor}}>Name</label>
                    <input type="text" placeholder="product name" name="title" required 
                            onChange={(e)=>handleInput(e)} 
                            value={object.title} style={inputstyle}></input>    
                    {
                        objectError.titleError !== "" ? 
                        <Para fontClass={formcss.error}>
                            {objectError.titleError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* description */}
                    <label for="description">Description</label>
                    <input type="text" placeholder="project description" name="description" required
                            onChange={(e)=>handleInput(e)} 
                            value={object.description} style={inputstyle}></input>    
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
                        name="category" style={selectstyle}>
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
                            value={object.company} style={inputstyle}></input>    
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
                            value={object.year} style={inputstyle}></input>    
                    {
                        objectError.yearError !== "" ? 
                        <Para fontClass={formcss.error}>
                            {objectError.yearError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    

                    {/* about project */}
                    <label for="paragraph">About Project</label>
                    <textarea placeholder="about project" name="paragraph" required
                            onChange={(e)=>handleInput(e)} 
                            value={object.paragraph} style={textstyle}></textarea>
                    {
                        objectError.paragraphError !== "" ?
                        <Para fontClass={formcss.error}>
                            {objectError.paragraphError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    {/* <button onClick={(e)=>handleSubmit(e)} style={buttonstyle}>CONTINUE</button> */}

                    {objectError.titleError !== "" && 
                        <Four fontClass={formcss.four}>
                            {objectError.titleError}
                        </Four>}

                </div>

        </div>

    )

}

export default ProjectForm