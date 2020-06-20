import React from 'react'
import formcss from '../form.module.css'
import {Four,Para} from '../../../../../reusable/fonts'
import {useDispatch} from 'react-redux';
import {storeFormData} from '../../../../../../actions'

const ProjectForm = ({data}) => {

    // const data = useSelector(state => state.storeContent);
    // var d = new Date();

    // const [object,setObject] = React.useState({
        // id: UploadController.getObjectID(),
        // date_created : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`,
        // last_modified : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    // })

    const dispatch = useDispatch();

    const [object,setObject] = React.useState(data && data);

    const [objectError] = React.useState({})

    function handleInput(e){
        setObject({...object,[e.target.name]:e.target.value});
    }
    
    dispatch(storeFormData(object))

    return (
        
        <div className={formcss.main}>

                <div className={formcss.form}>
                    
                    {/* name */}
                    <label for="title">Name</label>
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
                    <input type="text" placeholder="project description" name="description" required
                            onChange={(e)=>handleInput(e)} 
                            value={object.description} ></input>    
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
                        name="category">
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
                            value={object.company}></input>    
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
                            value={object.year}></input>    
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
                            value={object.paragraph}></textarea>
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