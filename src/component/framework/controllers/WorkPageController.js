import {db} from '../services/DATATRANSFER/FIREBASE';
// import ProjectComponent from '../../pages/mainpages/work/ProjectComponent';
import {Para} from '../../reusable/fonts';
import React from 'react';

function handleLoad(setProject,projectCategories,WorkCss,ProjectComponent){
    
    var ref = db.ref('projects');

    ref.on("value", function(snapshot){

        if(snapshot.val()){

            var arr = Object.values(snapshot.val());
            
            var m = arr.map((p)=>{
                return Object.values(p);
            })

            let baddo = [];

            m.forEach((s)=>{
                for(let i = 0; i < s.length; i++){
                    baddo.push(
                        <ProjectComponent

                            WorkCss={WorkCss}
                            img={Object.values(s)[i].imageurl}
                            image_description={Object.values(s)[i].image_description}
                            showComponent={projectCategories === 'All' ? true : projectCategories === Object.values(s)[i].project_category ? true : false} 
                            project={Object.values(s)[i].project} 
                            project_type={Object.values(s)[i].project_category} 
                            company={Object.values(s)[i].company} 
                            year={Object.values(s)[i].year} 
                            // project_link={""}

                            key={Object.values(s)[i].id}
                        
                        >

                            <Para fontClass={WorkCss.story}>
                                {Object.values(s)[i].paragraph}
                            </Para>

                        </ProjectComponent>
                        
                    );
                }
            });

            setProject(baddo)
        }
        
    },function(errorObject){


        console.log("The read failed " + errorObject.code);


    });

}

const WorkPageController = {
    handleLoad,
}

export default WorkPageController;