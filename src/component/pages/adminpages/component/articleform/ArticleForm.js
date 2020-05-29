import React from 'react';
import ArticleFormCss from './ArticleForm.module.css'
import {Para} from '../../../../reusable/fonts'

const ArticleForm = ({handleInput,handleSubmit,articleObject,articleObjectError,inputstyle,
                       selectstyle,buttonstyle,labelColor}) => {

    return(

        <div className={ArticleFormCss.article_form}>

            <form className={ArticleFormCss.form}>

                <label style={{color:labelColor}}>Title</label>
                <input type="text" placeholder="article title" name="title" onChange={(e)=>handleInput(e)}
                    value={articleObject.title} style={inputstyle}></input>
                {
                    articleObjectError.titleError !== "" ? 
                    <Para fontClass={ArticleFormCss.error}>
                        {articleObjectError.titleError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }


                <label style={{color:labelColor}}>Description</label>
                <input type="text" placeholder="article description" name="description"
                    onChange={(e)=>handleInput(e)}
                    value={articleObject.description} style={inputstyle}></input>
                {
                    articleObjectError.descriptionError !== "" ? 
                    <Para fontClass={ArticleFormCss.error}>
                        {articleObjectError.descriptionError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }


                <label style={{color:labelColor}}>Year</label>
                <input type="text" placeholder="article release year" name="release_year"
                    onChange={(e)=>handleInput(e)}
                    value={articleObject.release_year} style={inputstyle}></input>
                {
                    articleObjectError.release_yearError !== "" ? 
                    <Para fontClass={ArticleFormCss.error}>
                        {articleObjectError.release_yearError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }

                <label style={{color:labelColor}}>Month</label>
                <select onChange={(e)=>handleInput(e)} value={articleObject.release_month}
                    name="release_month" style={selectstyle}>
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
                    <Para fontClass={ArticleFormCss.error}>
                        {articleObjectError.release_monthError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }

                <label style={{color:labelColor}}>Link</label>
                <input type="text" placeholder="article url" name="article_link"
                onChange={(e)=>handleInput(e)}
                    value={articleObject.article_link} style={inputstyle}></input>
                {
                    articleObjectError.article_linkError !== "" ? 
                    <Para fontClass={ArticleFormCss.error}>
                        {articleObjectError.article_linkError}
                    </Para>
                    : <div style={{height: "30px"}} />
                }

                <button onClick={(e)=>handleSubmit(e)} style={buttonstyle}>Continue</button>

            </form>

        </div>

    )
}


export default ArticleForm