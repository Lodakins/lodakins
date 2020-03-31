var data=[
    {
        principal:2500,
        time:1.8
    },{
        principal:1000,
        time:5
    },{
        principal:3000 ,
        time: 1
    },{
        principal: 2000,
        time:3
    }
];

let interestData=[];

function interestCalculator( arr){
    
    for(let i=0; i< arr.length; ++i){
        let rate;
        let obj={};
        if(arr[i].principal >=2500 && (arr[i].time > 1 && arr[i].time < 3)){
            rate = 3;
        }else if(arr[i].principal >=2500 && (arr[i].time >= 3)){
            rate=4;
        }else if(arr[i].principal <2500 || (arr[i].time <= 1)){
            rate=2;
        }else{
            rate=1;
        }
        let interest = (arr[i].principal * arr[i].time * rate) /100;
        obj.principal = arr[i].principal;
        obj.time = arr[i].time;
        obj.rate = rate;
        obj.interest = interest;
        interestData.push(obj);
    }
    console.log(interestData);
    return interestData;
}

interestCalculator(data);