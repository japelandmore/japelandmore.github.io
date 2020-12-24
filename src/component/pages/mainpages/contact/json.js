export const modalJson = (color,bg) => ({
    modalContainer : {
        className : "modal fade",
        style : {
            background : bg,
            zIndex : 400
        }
    },
    modalContent : {
        className : "modal-content rounded pb-3 px-3",
        style : {
            background : bg ,
            border : `1px solid ${color}`
        }
    },
    modalHeader : {
        className : "modal-header d-flex justify-content-center",
        style : {
            borderBottom : `1px solid ${color}`
        }
    },
    modalHeaderContainer : {
        className : "position-relative w-100 text-center",
        style : {
            
        }
    },
    modalCloseContainer : {
        className : "position-absolute d-flex align-items-center justify-content-center",
        style : {
            top:0,right:0,height:"100%",cursor:"pointer"
        }
    },
    modalDialog : {
        className : "modal-dialog modal-dialog-centered",
        style : {
            
        }
    },
    modalBody : {
        className : "modal-dialog modal-dialog-centered w-100",
        style : {
            
        }
    },
    modalBodyContent : {
        className : "d-flex w-100 justify-content-center text-center align-items-center",
        style : {
            height : "50px"
        }
    },
    modalBodyText : {
        className : "",
        style : {
            color : color,
            fontFamily : "var(--semi)"
        }
    }
    

})

export const titleJson = (color,othercolor) => ({
    title : {
        className : "m-0",
        style : {
            color : color,
            textTransform : "uppercase",
            fontFamily : "var(--semi)",
            transition : "all 0.3s ease",
            cursor : "pointer"
        }
    },
    titleMainContainer : {
        className : "mt-5 d-flex align-items-center",
        style : {      
            height : "20px"
        }
    },
    titleContainer : {
        className : "align-items-center",
        style : (display)=>({    
            display : display ? "flex" : "none"  
        })
    },
    breadcrumb : {
        className: "m-0",
        style : {
            fontSize : "17px",
            color : color
        }  
    },
    closeCrumb : {
        className: "m-0",
        style : {
            fontSize : "14px",
            color : color,
            cursor : "pointer",
            transition : "all 0.3s ease",
        }  
    },
    breadcrumbContainer : {
        className: "m-0 mr-2 ml-3",
        style : (display) => ({
            fontSize : "14px",
            color : color,
            display : display ? "flex" : "none"
        })  
    }
})