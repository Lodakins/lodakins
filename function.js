
function getType(number){
        let array=[];
     for(let i=1; i<=number; ++i){
        let message=""
        if(i%2==0){
            message = message+="yu";
        } 
        if(i%3==0){
            message = message.length==0? message+="gi" : message+=" gi";
        }
        if(i%5==0){
            message = message.length==0? message+="oh" : message+=" oh";
        }
       message= message.length == 2 ? message.trim() :  message.split(" ").join("-");
        array.push(message || i);
    }

    console.log(array);
}

getType(100);
getType(50);
