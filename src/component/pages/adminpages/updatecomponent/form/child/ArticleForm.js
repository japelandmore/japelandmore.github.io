import React from 'react'
import formcss from '../form.module.css'
import {Four,Para} from '../../../../../reusable/fonts'
import {useSelector} from 'react-redux';

const ArticleForm = () => {

    const data = useSelector(state => state.storeContent);

    const [object,setObject] = React.useState(data)

    const [objectError,setObjectError] = React.useState({})

    function handleInput(e){
        setObject({...object,[e.target.name]:e.target.value});
    }
    
    return (

        <div className={formcss.main}>

            <div className={formcss.form}>

                <label >Title</label>
                <input type="text" placeholder="article title" name="title" onChange={(e)=>handleInput(e)}
                    value={object.title} ></input>
                {
                    objectError.titleError !== "" ? 
                    
                    <Para fontClass={formcss.error}>
                        {objectError.titleError}
                    </Para>

                    : 
                    
                    <div style={{height: "30px"}} />
                }


                <label >Description</label>
                <input type="text" placeholder="article description" name="description"
                    onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)}
                    value={object.description} ></input>
                {
                    objectError.descriptionError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {objectError.descriptionError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }


                <label >Year</label>
                <input type="text" placeholder="article release year" name="release_year"
                    onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)}
                    value={object.release_year} ></input>
                {
                    objectError.release_yearError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {objectError.release_yearError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }

                <label >Month</label>
                <select onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)} 
                    value={object.release_month} name="release_month">
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

                <label >Article Link</label>
                <input type="text" placeholder="www.artice-link.com" name="article_link"
                onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)}
                    value={object.article_link} ></input>
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