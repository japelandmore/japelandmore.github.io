

function dropMenu(ref){
    ref.current.style.transition = "all .2s ease-in-out";
    ref.current.style.opacity = "1";
    ref.current.style.transform = "translateY(0)";
    console.log(ref.current);
}

function raiseMenu(ref){
    ref.current.style.transition = "all .2s ease-in-out";
    ref.current.style.opacity = "0";
    ref.current.style.transform = "translateY(-100%)";
}

const SwipeEffect = {
    dropMenu,
    raiseMenu
}

export default SwipeEffect;