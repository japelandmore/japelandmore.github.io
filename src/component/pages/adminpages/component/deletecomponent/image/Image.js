import React from 'react'
import DeleteFormCss from '../DeleteForm.module.css'

const Image = ({imageurl}) => {
    return(
        <div className={DeleteFormCss.delete_Section}>
            <div className={DeleteFormCss.img_container}>
                <img src={imageurl} alt="" />
            </div>
        </div>
    )
}

export default Image;