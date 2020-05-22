import React from 'react';
import ArticleCss from './Articles.module.css';
import {One as HeaderFont} from '../../../reusable/fonts'
import article1 from '../../../assets/image/article/0-1@2x.png';
import article2 from '../../../assets/image/article/Uber Offline Concept@2x.png';
import ArticleItem from './ArticleItem.js';
import articleurl from '../../../framework/url/articleurl';


const Articles = () => {

    return(

        <div className={ArticleCss.article}>
            
            <div className={ArticleCss.topheader}>
                
                    <HeaderFont fontClass={ArticleCss.headfont}>My Articles</HeaderFont>
                
            </div>

            <div className={ArticleCss.container}>

                <div className={ArticleCss.articles}>

                    <ArticleItem ArticleCss={ArticleCss} header={"Case Study"} date={"JUNE, 2019"} article_img={article1} 
                                article_title={"Wireframing cured my UX migranes"} external_link={articleurl.ARTICLE_WIREFRAMING_CURED_MY_UX_MIGRANES} />

                    <ArticleItem ArticleCss={ArticleCss} header={"Process"} date={"JANUARY, 2019"} article_img={article2} 
                                article_title={"Traditional Ride Hailing for Uber (offline)"} external_link={articleurl.TRADITIONAL_RIDE_HAILING_FOR_UBER} />

                    <ArticleItem ArticleCss={ArticleCss} header={"Case Study"} date={"JUNE, 2019"} article_img={article1} article_title={"Wireframing cured my UX migranes"} />

                    <ArticleItem ArticleCss={ArticleCss} header={"Process"} date={"JANUARY, 2019"} article_img={article2} article_title={"Traditional Ride Hailing for Uber (offline)"} />

                    <ArticleItem ArticleCss={ArticleCss} header={"Case Study"} date={"JUNE, 2019"} article_img={article1} article_title={"Wireframing cured my UX migranes"} />

                    <ArticleItem ArticleCss={ArticleCss} header={"Process"} date={"JANUARY, 2019"} article_img={article2} article_title={"Traditional Ride Hailing for Uber (offline)"} />

                </div>

            </div>

        </div>


    )
}

export default Articles;

