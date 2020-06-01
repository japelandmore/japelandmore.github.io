import React from 'react';
import ArticleCss from './Articles.module.css';
import {One as HeaderFont,Three} from '../../../reusable/fonts'
import ArticleItem from './ArticleItem.js';
import ArticleController from '../../../framework/controllers/ArticleController';


const Articles = () => {

    const [article,setArticle] = React.useState([]);

    React.useEffect(()=>{

        function loadArticles(){
            !article[0] && ArticleController.handleLoad(setArticle,ArticleCss,ArticleItem);
        }

        loadArticles();

    })

    return(

        <div className={ArticleCss.article}>
            
            <div className={ArticleCss.topheader}>
                
                    <HeaderFont fontClass={ArticleCss.headfont}>My Articles</HeaderFont>
                
            </div>

            <div className={ArticleCss.container}>

                <div className={ArticleCss.articles}>

                     {/* body */}
                     { 
                        article[0] ?
                            article.map((s) => {return s;}) 
                        :
                            <div>
                                <Three fontClass={ArticleCss.three}>NO ARTICLE(S)</Three>
                            </div>
                        }

                </div>

            </div>

        </div>

    )
}

export default Articles;

