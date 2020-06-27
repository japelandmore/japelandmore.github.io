import {db} from '../services/DATATRANSFER/FIREBASE';

function queryData(setData){
    var ref = db.ref('testimonies');
    ref.on("value", function(snapshot){
        if(snapshot.val()){
            var arr = Object.values(snapshot.val());
            setData(Object.values(arr));
            // console.log(Object.values(arr));
        }
    });
}

const TestimonialController = {
    queryData
}

export default TestimonialController