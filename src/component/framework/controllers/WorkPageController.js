import {db} from '../services/DATATRANSFER/FIREBASE';
import React from 'react';
import ReactMarkdown from 'react-markdown';

function handleLoad(setProject,projectCategories,WorkCss,ProjectComponent,setSubPageInfo){
    
    var ref = db.ref('projects');

    ref.on("value", function(snapshot){

        if(snapshot.val()){
            var arr = Object.values(snapshot.val());
            let baddo = [];
            for(let i = 0; i < arr.length; i++){
                baddo.push(
                        <ProjectComponent
                            WorkCss={WorkCss}
                            img={Object.values(arr)[i].imageurl} image_description={Object.values(arr)[i].description}
                            showComponent={projectCategories === 'All' ? true : projectCategories === Object.values(arr)[i].category ? true : false} 
                            project={Object.values(arr)[i].title} project_type={Object.values(arr)[i].category} 
                            company={Object.values(arr)[i].company} year={Object.values(arr)[i].year} 
                            key={Object.values(arr)[i].id}
                            index={i}
                        >
                            <ReactMarkdown source={
                                Object.values(arr)[i].description
                            }/>
                        </ProjectComponent>
                    );
            }
            setProject(baddo);
            arr && setSubPageInfo(Object.values(arr))
        }
        
    },function(errorObject){

        console.log("The read failed " + errorObject.code);

    });

}

const WorkPageController = {
    handleLoad,
}

export default WorkPageController;