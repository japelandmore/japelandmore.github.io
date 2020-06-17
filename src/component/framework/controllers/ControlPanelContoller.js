
function menuhandler(sidemenuRef){
    sidemenuRef.current.style.transition = `.2s ease-in`;
    sidemenuRef.current.getBoundingClientRect().x === 0 ? 
        sidemenuRef.current.style.transform = `translateX(-100%)`
    :
        sidemenuRef.current.style.transform = `translateX(0)`

}

function submenuhandler(submenuRef,submenuRef2){
    if(submenuRef.current.clientHeight === 230){
        submenuRef.current.style.height = `60px`
        console.log(submenuRef.current)
    }else{
        submenuRef.current.style.height = `230px`
        submenuRef2.current.style.height = `60px`
        console.log(submenuRef.current)
    }

    
}

function submenuhandler2(submenuRef,submenuRef2){
    if(submenuRef.current.clientHeight === 230){
        submenuRef.current.style.height = `60px`
    }else{
        submenuRef.current.style.height = `230px`
        submenuRef2.current.style.height = `60px`
    }
}

const ControlPanelController = {
    menuhandler,
    submenuhandler,
    submenuhandler2
}

export default ControlPanelController;