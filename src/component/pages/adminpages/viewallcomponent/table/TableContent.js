import React from 'react'
import TableCss from './Table.module.css'

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
                    
                    {/* <Alpha > */}
                        <button className={TableCss.edit} onClick={editAction} onTouchStart={storeEdit}>Edit</button>
                    {/* </Alpha> */}
                    
                    {/* <Alpha  > */}
                        <button className={TableCss.delete} onClick={deleteAction} onTouchStart={storeDelete} >Delete</button>
                    {/* </Alpha> */}

                </div>

            </td>

        </tr>

    )

}

export default TableContent