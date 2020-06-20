import React from 'react'
import AdminPageController from '../../../framework/controllers/AdminPageController'

const Main = (props) =>{

    const pageAction = props.location.state && props.location.state.pageAction
    const [page] = React.useState(AdminPageController.getPage(pageAction));

    return (

    <>

        {page}

    </>

    )

}

export default Main