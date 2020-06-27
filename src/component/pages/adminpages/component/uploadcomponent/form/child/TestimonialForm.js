import React from 'react'
import formcss from '../form.module.css'
import {Four,Para} from '../../../../../../reusable/fonts/Font'
import {storeFormData} from '../../../../../../../actions/actions'
import {useDispatch} from 'react-redux'


const TestimonialForm = () => {

    // BOLIER PLATE STARTS

    var d = new Date();

    const dispatch = useDispatch();

    const [object,setObject] = React.useState({
        id: Math.floor(Date.now() / 1000),
        date_created : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`,
        last_modified : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    })

    dispatch(storeFormData(object));

    const [objectError] = React.useState({})

    function handleInput(e){
        setObject({...object,[e.target.name]:e.target.value});
    }

    // BOILERPLATE ENDS

    return (

        <div className={formcss.main}>

            <div className={formcss.form}>

                <label>Name</label>
                <input type="text" placeholder="Client Name" name="title" onChange={(e)=>handleInput(e)}
                    value={object.title}></input>
                {
                    objectError.titleError !== "" ? 
                    
                    <Para fontClass={formcss.error}>
                        {objectError.titleError}
                    </Para>

                    : 
                    
                    <div style={{height: "30px"}} />
                }

                <label>Job Title & Description</label>
                <input type="text" placeholder="CEO, ABC Company" name="description"
                    onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)}
                    value={object.description} ></input>
                {
                    objectError.descriptionError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {objectError.descriptionError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }


                <label for="paragraph">Testimony</label>
                <textarea placeholder="brief narration of job well done by Client" name="paragraph" required
                        onChange={(e)=>handleInput(e)} 
                        value={object.paragraph}></textarea>
                {
                    objectError.paragraphError !== "" ?
                    <Para fontClass={formcss.error}>
                        {objectError.paragraphError}
                    </Para>
                    : <div style={{height: "20px"}}/>
                }

                {/* <button onClick={(e)=>handleSubmit(e)} style={buttonstyle}>Continue</button> */}

                {objectError.titleError !== "" && 
                        <Four fontClass={formcss.four}>
                            {objectError.titleError}
                        </Four>}

            </div>

        </div>
    
    )

}

export default TestimonialForm;