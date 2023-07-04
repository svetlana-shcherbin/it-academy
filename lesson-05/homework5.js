let a1 = 'string'+true; // приведение к строке
let a2 = 'string'+35; // приведение к строке
let a3 = 56+true; // true это 1, поэтому в результате 57
console.log(a1,a2,a3)

let b1 = 'string'*false; //умножение со строкой невожможно, поэтому NaN
let b2 = 'string'*3; //умножение со строкой невожможно, поэтому NaN
let b3 = 67* true; //tue это 1, поэтому результат 67, при false был бы 0
console.log(b1,b2,b3)

let c1 = 'string'/8; // деление со строкой невожможно, поэтому NaN
let c2 = 'string'/true //деление со строкой невожможно, поэтому NaN
let c3 = 56/false; //деление на ноль невожможно, поэтому Infinity
console.log(c1,c2,c3)

console.log(Boolean(198), Number('string'), String(false))