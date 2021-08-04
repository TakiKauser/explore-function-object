var student1 = { 
    id: 13, 
    name: "Dhrubo Ash", 
    mark: 93, 
    contact: 087423
 }

 var mobile = {
     color : "black",
     price : 19000,
     storage : "16gb",
     screenSize : 5
 }
 console.log(student1);
 console.log(mobile.storage);

//  set an object property value
mobile.price = 17500;
// console.log(mobile);

mobile["color"] = "blue";

var storageProperty = "storage";
mobile[storageProperty] = "32gb";
console.log(mobile);
