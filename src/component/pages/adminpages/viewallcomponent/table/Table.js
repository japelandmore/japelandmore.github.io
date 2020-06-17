import React from 'react'
import TableCss from './Table.module.css'
import TableContent from './TableContent'
import {Three} from '../../../../reusable/fonts'
import UpdateController from '../../../../framework/controllers/UpdateController'

const Table = () => {

    const [content,setContent] = React.useState([]);
    
    React.useEffect(()=>{
        !content[0] && UpdateController.queryData(setContent);
    })

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
                                <TableContent key={data.id} sn={content.indexOf(data)} title={data.title} 
                                              category={data.category} img={data.imageurl} 
                                              editAction={()=>{console.log('edit')}} 
                                              deleteAction={()=>{console.log('delete')}} />
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

export default Table;