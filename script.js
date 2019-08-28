let a = 4;
let b = 2;
let c = a * b;

console.log(c);
function f(x){
  return 3 * x;
}

let result = f(2);
console.log(result)

const database = firebase.database().ref();

const input = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', handleclick)

function handleclick(event){
  database.push(input.value)
  input.value = '';
}
