import React from 'react';
import {Two,Para,Alpha} from '../../../../reusable/fonts/Font'
import StatusCss from './Status.module.css';
import {withRouter} from 'react-router-dom'

const Status = ({status,success,failure,land,try_again,new_action,buttonText,...props}) => {

    return(

        <div className={StatusCss.modal_background}>
            
            <div className={StatusCss.modal}>

                <div className={StatusCss.container}>

                    <div className={StatusCss.header}>

                        {
                            status  ?
                        
                            <Two fontClass={StatusCss.two}>
                                {success}
                            </Two>           
                            
                            :

                            <Two fontClass={StatusCss.two}>
                                {failure}
                            </Two>           

                        }

                    </div>

                    <div className={StatusCss.body}>
                        
                        <div className={StatusCss.main_option}>
                            {
                                status  ?

                                    <Alpha ahref={new_action}>
                                        <button >{buttonText}</button>
                                    </Alpha>
                                :
                                    <button onClick={()=>{props.history.push(try_again)}}>Try Again</button>   
                            }
                        </div>
                        
                        <div className={StatusCss.other_option}>
                            <Alpha ahref={land}>
                                <Para fontClass={StatusCss.para} >Back to Main Menu</Para>
                            </Alpha>
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}

export default withRouter(Status);