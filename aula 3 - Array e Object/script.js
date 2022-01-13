// o que sao vetores ou arrays

// como declarar um array
let array = ['string', 1, true];
console.log(array); 

//podes guardar varios tipos de dados 
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]; 
console.log(array[3]); 

//forEach
array.forEach(function(item, index){console.log(item, index)});

array.push('1');
console.log(array); 

array.pop();
console.log(array); 

array.shift();
console.log(array); 

array.unshift('novo item no inicio');
console.log(array); 

console.log(array.indexOf(true));

array.splice(0, 3);
console.log(array); 

let novoArray = array.slice(0, 3);
console.log(novoArray);

let object = {string: 'string', number: 1, Boolean: true, array:['array'], objectInterno: {objectInterno:'objeto interno'}};

console.log(object.objectInterno);

 var string = object.string;
 console.log(string);
 
 var arrayInterno = object.array;
console.log(objectInterno);

var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);
