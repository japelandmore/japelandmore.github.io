import React from 'react';
import FontCss from './Font.module.css'

const One =({fontStyle,idea,fontClass,referral,...props})=>{
    return(<h1 id={idea} className={`${FontCss.font_one} ${fontClass}`} style={fontStyle} ref={referral}>{props.children}</h1>)
}

const Two =({fontStyle,fontClass,referral,...props})=>{
    return(<h2 className={`${FontCss.font_two} ${fontClass}`} style={fontStyle} ref={referral}>{props.children}</h2>)
}

const Three =({fontStyle,fontClass,referral,...props})=>{
    return(<h3 className={`${FontCss.font_three} ${fontClass}`} style={fontStyle} ref={referral}>{props.children}</h3>)
}

const Four =({fontStyle,fontClass,referral,...props})=>{
    return(<h4 className={`${FontCss.font_four} ${fontClass}`} style={fontStyle} ref={referral}>{props.children}</h4>)
}

const Five =({fontStyle,fontClass,referral,...props})=>{
    return(<h5 className={`${FontCss.font_five} ${fontClass}`} style={fontStyle} ref={referral}>{props.children}</h5>)
}

const Six =({fontStyle,fontClass,referral,...props})=>{
    return(<h6 className={`${FontCss.font_six} ${fontClass}`} style={fontStyle} ref={referral}>{props.children}</h6>)
}

const Para =({fontStyle,fontClass,referral,clickk,...props})=>{
    return(<p className={`${FontCss.font_p} ${fontClass}`} style={fontStyle} ref={referral} onClick={clickk}>{props.children}</p>)
}

const Alpha =({fontStyle,ahref,fontClass,referral,...props})=>{
    return(<a href={ahref} className={`${FontCss.font_alpha} ${fontClass}`} style={fontStyle} ref={referral} >{props.children}</a>)
}

export {
    One,Two,Three,Four,Five,Six,Para,Alpha
}