
var name = "Akinrolabu Lolade";

var courses=['html-css-js','kotlin','nodejs','design','php'];

console.log(name);
console.log(courses);

console.log()
var length = courses.length;

if(length%2==0){
  for(let i=1; i<=200;++i){
    if(i%3==0){
      console.log(i);
    }
  }
}else if(length%3==0){
  for(let i=1; i<=200;++i){
      if(i%3==0){
        console.log(i);
      }
  }
}else{
  console.log("It is a prime number");
}