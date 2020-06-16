import React from 'react'
import AdminPageController from '../../../framework/controllers/AdminPageController'

const Main = () =>{

    const [page] = React.useState(AdminPageController.getPage());

    return (

    <>

        {page}

    </>

    )

}

export default Main