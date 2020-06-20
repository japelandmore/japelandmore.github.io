import React from 'react'
import TableCss from './Table.module.css'
import {Alpha} from '../../../../reusable/fonts'
import pageurl from '../../../../framework/url/pageurl/pageurl'

const TableContent = ({sn,title,category,img,editAction,deleteAction,storeEdit,storeDelete}) =>{
    
    return(

        <tr>

            <td className={TableCss.num}>{sn}</td>
            <td>{title}</td>
            <td>{category}</td>
            
            <td className={TableCss.im}>
                <div className={TableCss.img_container}>
                    <img src={img} alt="sds"></img>
                </div>
            </td>
            
            <td>
                
                <div className={TableCss.btn_container}>
                    
                    <Alpha ahref={pageurl.ADMIN_URL} click={editAction}>
                        <button className={TableCss.edit} >Edit</button>
                    </Alpha>
                    
                    <Alpha ahref={pageurl.ADMIN_URL} click={deleteAction}>
                        <button className={TableCss.delete} >Delete</button>
                    </Alpha>

                </div>

            </td>

        </tr>

    )

}

export default TableContent