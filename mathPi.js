const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

// console.log(Math.PI);

const chai = {
  name: "Ginger chai",
  price: "250",
  isAvailable: true,

  orderChai: function(){
    console.log("Chai phat gaee");
    
  }
};

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, "name", {
    writable:false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key}: ${value}`);
    }
}