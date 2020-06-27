import React from 'react'
import formcss from '../form.module.css'
import {Four,Para} from '../../../../../../reusable/fonts/Font'
import {storeFormData} from '../../../../../../../actions/actions'
import {useDispatch} from 'react-redux'

const ArticleForm = ({labelColor,inputstyle,selectstyle,textstyle,buttonstyle}) => {

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

                <label style={{color:labelColor}}>Title</label>
                <input type="text" placeholder="article title" name="title" onChange={(e)=>handleInput(e)}
                    value={object.title} style={inputstyle}></input>
                {
                    objectError.titleError !== "" ? 
                    
                    <Para fontClass={formcss.error}>
                        {objectError.titleError}
                    </Para>

                    : 
                    
                    <div style={{height: "30px"}} />
                }


                <label style={{color:labelColor}}>Description</label>
                <input type="text" placeholder="article description" name="description"
                    onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)}
                    value={object.description} style={inputstyle}></input>
                {
                    objectError.descriptionError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {objectError.descriptionError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }


                <label style={{color:labelColor}}>Year</label>
                <input type="text" placeholder="article release year" name="release_year"
                    onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)}
                    value={object.release_year} style={inputstyle}></input>
                {
                    objectError.release_yearError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {objectError.release_yearError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }

                <label style={{color:labelColor}}>Month</label>
                <select onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)} 
                    value={object.release_month} name="release_month" style={selectstyle}>
                        <option>Select Release Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                </select>
                {
                    objectError.release_monthError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {objectError.release_monthError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }

                <label style={{color:labelColor}}>Article Link</label>
                <input type="text" placeholder="www.artice-link.com" name="article_link"
                onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)}
                    value={object.article_link} style={inputstyle}></input>
                {
                    objectError.article_linkError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {objectError.article_linkError}
                    </Para>
                    : <div style={{height: "30px"}} />
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

export default ArticleForm