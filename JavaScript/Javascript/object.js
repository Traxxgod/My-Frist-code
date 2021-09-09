// object is just a group of key : vaule pair 
let captainamerica={
    name : "Steve",
    lastname : "rogers",
    adress : {
        city : "america",
        state : "new york",
    },
    age : 5000,
    isAvenger : true,
    movie : ["first Avenger","winter soldier", "civil war"],
    sayhi : function() {
        console.log("cap say's hi");
    }
};
//get
// console.log(captainamerica.name);
// console.log(captainamerica.age);
// console.log(captainamerica.movie[1]);
// captainamerica.sayhi();
// console.log(captainamerica);
// // update
// captainamerica.friend=["tony", "Bruse", "Peter"];
// //set
// captainamerica.isAvenger = false;
// console.log("cap : ", captainamerica);
// //delete
// console.log("delete : ", captainamerica);


for(let key in captainamerica){
    console.log(key, " : ", captainamerica[key]);
}
let propkey = "age";
// direct value ki trh treet karega
console.log(captainamerica.age);
// propkey ki as variable ki trh treet karega
// or porpkey me jo pda hoga usko us variable ko key ki trh captainamerica me search karega --- as like step 3;
console.log(captainamerica[propkey]);

console.log(captainamerica["age"]);// step -3;

