import React from 'react';
import linkimg from '../../../assets/image/article/external-2.svg';
import {Five,Para} from '../../../reusable/fonts'

const ArticleItem = ({ArticleCss,header,date,article_img,article_title,external_link,...props}) => {
    return(
        <div className={ArticleCss.article_item}>

            <div className={ArticleCss.image_container}>

                <span className={ArticleCss.dark_cover}>

                    <div className={ArticleCss.txt_container1}>
                        <Five fontClass={ArticleCss.header}>{header}</Five>
                    </div>

                    <div className={ArticleCss.txt_container2}>
                        <Para fontClass={ArticleCss.date}>{date}</Para>
                    </div>

                </span>
                
                <img src={article_img} alt="article " />

            </div>

            <div className={ArticleCss.caption}>

                <div className={ArticleCss.txt}>

                    <a target="_blank" href={`http://${external_link}`} rel="noopener noreferrer" style={{cursor:"pointer",textDecoration:"none"}}>

                        <Five fontClass={ArticleCss.five}>
                        
                            {article_title}
                        
                        </Five>
                    
                    </a>

                </div>

                <div className={ArticleCss.link}>

                <a target="_blank" href={`http://${external_link}`} rel="noopener noreferrer" style={{cursor:"pointer"}}>

                    <img src={linkimg} alt="external link icon" ></img>

                </a>

                </div>

            </div>

        </div>

    )
}

export default ArticleItem;