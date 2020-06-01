import {db} from '../services/DATATRANSFER/FIREBASE';
// import ProjectComponent from '../../pages/mainpages/work/ProjectComponent';
// import {Para} from '../../reusable/fonts';
import React from 'react';

function handleLoad(setArticle,ArticleCss,ArticleItem){
    
    var ref = db.ref('articles');

    ref.on("value", function(snapshot){

        if(snapshot.val()){

            var arr = Object.values(snapshot.val());

            let baddo = [];
            
            for(let i = 0; i < arr.length; i++){
            
                baddo.push(

                    <ArticleItem 
                            ArticleCss={ArticleCss} 
                            header={Object.values(arr)[i].description} 
                            date={Object.values(arr)[i].release_month + ', ' + Object.values(arr)[i].release_year} 
                            article_img={Object.values(arr)[i].imageurl} 
                            article_title={Object.values(arr)[i].title} 
                            external_link={Object.values(arr)[i].article_link}
                            key={Object.values(arr)[i].id} />
                        
                    );
                }
            
            setArticle(baddo)
        }
        
    },function(errorObject){

        console.log("The read failed " + errorObject.code);

    });

}

const ArticleController = {
    handleLoad,
}

export default ArticleController;