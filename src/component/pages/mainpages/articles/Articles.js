import React from 'react';
import ArticleCss from './Articles.module.css';
import {One as HeaderFont,Three} from '../../../reusable/fonts'
import ArticleItem from './ArticleItem.js';
import ArticleController from '../../../framework/controllers/ArticleController';
import loader from '../../../assets/image/gif/loader.gif'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Articles = () => {

    Aos.init();

    const [article,setArticle] = React.useState([]);

    React.useEffect(()=>{

        function loadArticles(){
            !article[0] && ArticleController.handleLoad(setArticle,ArticleCss,ArticleItem);
        }

        loadArticles();

    })

    return(

        <div className={ArticleCss.article}>
            
            <div className={ArticleCss.topheader} data-aos="fade-right" data-aos-duration="2000">
                
                    <HeaderFont fontClass={ArticleCss.headfont}>My Articles</HeaderFont>
                
            </div>

            <div className={ArticleCss.container}>

                <div className={ArticleCss.articles} data-aos="fade-in" data-aos-duration="2000">

                     {/* body */}
                     { 
                        article[0] ?
                            article.map((s) => {return s;}) 
                        :
                            <div className={ArticleCss.txtContainer}>
                                <Three fontClass={ArticleCss.three}>NO ARTICLE(S)</Three>
                                <div className={ArticleCss.loader_container}>
                                    <img src={loader} alt="loader" />
                                </div>
                            </div>
                        }

                </div>

            </div>

        </div>

    )
}

export default Articles;

