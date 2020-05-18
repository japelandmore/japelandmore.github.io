

function creditHandler(){

    if(window.innerWidth <= 450){
        
        // const val = "Hi, I'd like to hire you for a project";
        
        // const location="https://api.whatsapp.com/send?phone="+escape('+2348063457528')+"/text="+ val + "";
        const location = "https://wa.me/+2348063457528?text=Hi%20Frank,%20I'm%20interested%20in%20hiring%20you.";
        
        window.open(location, "_blank");

    }else{

        window.open('https://www.linkedin.com/in/frank-edekobi-500062129', "_blank");

    }

}




const other_credit = {
    creditHandler
}

export default other_credit;