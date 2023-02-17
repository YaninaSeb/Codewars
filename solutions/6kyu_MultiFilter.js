// Write a function called multiFilter which receives a variable number 
// of filter functions. The function should return a function that 
// receives one element (a compound filter function).

// That is, if we have two functions:

// function isEven(el){
//   return el % 2 === 0;
// }

// function isGTten(el){
//   return el > 10;
// }

// [1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten));
// should return [12,20,22]


//НЕ ПРОХОДИТ ВСЕ ТЕСТЫ

function isEven(el){
  return el % 2 === 0;
}

function isGTten(el){
  return el > 10;
}

let multiFilter = function(){  
    if (arguments.length == 0) {
      return function(){
        return this;
      };
    }
    
    if (arguments.length == 1) {
      return arguments[0];
    }
    
    if (arguments.length == 2) {
      let a = arguments[0];
      let b = arguments[1];

    };

  };

console.log([1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten)))

//console.log([1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isGTten)))
