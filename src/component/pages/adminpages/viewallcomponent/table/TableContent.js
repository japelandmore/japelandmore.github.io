import React from 'react'
import TableCss from './Table.module.css'

const TableContent = ({sn,title,category,img,editAction,deleteAction}) =>{
    
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
                    <button className={TableCss.edit} onClick={editAction} >Edit</button>
                    <button className={TableCss.delete} onClick={deleteAction} >Delete</button>
                </div>
            </td>

        </tr>

    )

}

export default TableContent