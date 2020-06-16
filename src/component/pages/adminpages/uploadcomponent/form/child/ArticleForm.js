import React from 'react'
import formcss from '../form.module.css'
import {Four,Para} from '../../../../../reusable/fonts'
import UploadController from '../../../../../framework/controllers/UploadController'

const ArticleForm = ({labelColor,inputstyle,selectstyle,textstyle,buttonstyle}) => {

    const [articleObject,setArticleObject] = React.useState({})

    const [articleObjectError,setArticleObjectError] = React.useState({})

    function handleInput(e){
        setArticleObject({...articleObject,[e.target.name]:e.target.value});
        UploadController.setForm(articleObject)
    }
    
    return (

        <div className={formcss.main}>

            <div className={formcss.form}>

                <label style={{color:labelColor}}>Title</label>
                <input type="text" placeholder="article title" name="title" onChange={(e)=>handleInput(e)}
                    value={articleObject.title} style={inputstyle}></input>
                {
                    articleObjectError.titleError !== "" ? 
                    
                    <Para fontClass={formcss.error}>
                        {articleObjectError.titleError}
                    </Para>

                    : 
                    
                    <div style={{height: "30px"}} />
                }


                <label style={{color:labelColor}}>Description</label>
                <input type="text" placeholder="article description" name="description"
                    onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)}
                    value={articleObject.description} style={inputstyle}></input>
                {
                    articleObjectError.descriptionError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {articleObjectError.descriptionError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }


                <label style={{color:labelColor}}>Year</label>
                <input type="text" placeholder="article release year" name="release_year"
                    onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)}
                    value={articleObject.release_year} style={inputstyle}></input>
                {
                    articleObjectError.release_yearError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {articleObjectError.release_yearError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }

                <label style={{color:labelColor}}>Month</label>
                <select onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)} 
                    value={articleObject.release_month} name="release_month" style={selectstyle}>
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
                    articleObjectError.release_monthError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {articleObjectError.release_monthError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }

                <label style={{color:labelColor}}>Article Link</label>
                <input type="text" placeholder="www.artice-link.com" name="article_link"
                onChange={(e)=>handleInput(e)} onInput={(e)=>handleInput(e)}
                    value={articleObject.article_link} style={inputstyle}></input>
                {
                    articleObjectError.article_linkError !== "" ? 
                    <Para fontClass={formcss.error}>
                        {articleObjectError.article_linkError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }

                {/* <button onClick={(e)=>handleSubmit(e)} style={buttonstyle}>Continue</button> */}

                {articleObjectError.titleError !== "" && 
                        <Four fontClass={formcss.four}>
                            {articleObjectError.titleError}
                        </Four>}

            </div>

        </div>
    
    )

}

export default ArticleForm