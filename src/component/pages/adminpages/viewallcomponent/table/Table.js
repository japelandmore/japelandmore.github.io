import React from 'react'
import TableCss from './Table.module.css'
import TableContent from './TableContent'
import {Three} from '../../../../reusable/fonts'
import UpdateController from '../../../../framework/controllers/UpdateController'
import AdminPageController from '../../../../framework/controllers/AdminPageController'
import { useDispatch } from 'react-redux';
import {storeContent} from '../../../../../actions'
import pageurl from '../../../../framework/url/pageurl'
import {withRouter} from 'react-router-dom'

const Table = (props) => {

    const dispatch = useDispatch();

    // const [content,setContent] = React.useState([]);
    
    // React.useEffect(()=>{
    //     !content[0] && UpdateController.queryData(setContent)
    // })

    const [content,setContent] = React.useState([
        {   title:'Tales by moon light',
            category:'Story Telling',
            imageurl:'',
        },
        {   title:'Tales by moon light2',
            category:'Story Telling2',
            imageurl:'',
        }
    ]);

    function handlePage(decision,num){

        dispatch(storeContent(content[num]))
        
        props.history.push(pageurl.DECISION_PAGE_URL,{pageDecision:decision});
        
        // let page = AdminPageController.getPageInfo()
        // AdminPageController.setPage(page.pageType,'decision',decision);
        // console.log();
    }

    return(
        
        <div className={TableCss.main}>
        
            <table>
                <thead>
                    <tr>
                        <th><span style={{opacity:.5}}>#</span></th>
                        <th>Title</th>
                        <th>Category</th>
                        <th className={TableCss.im}>Icon</th>
                        <th>Action</th>
                    </tr>
                
                </thead>
                
                <tbody>
                    {
                        content.map((data)=>{
                            return(
                                <TableContent   key={data.id} sn={content.indexOf(data)+1} title={data.title} 
                                                category={data.category} img={data.imageurl} 
                                                editAction={()=>{handlePage('edit',content.indexOf(data))}} 
                                                deleteAction={()=>{handlePage('delete',content.indexOf(data))}} 
                                                // storeEdit={()=>{handlePage('edit',content.indexOf(data))}}
                                                // storeDelete={()=>{handlePage('edit',content.indexOf(data))}}
                                            />
                            )
                        })
                    }
                </tbody>
            </table>
            {!content[0] && <div className={TableCss.nodata}>
                                <Three fontClass={TableCss.three}>No Data</Three>
                            </div>
            }
        
        </div>

    )

}

export default withRouter(Table);