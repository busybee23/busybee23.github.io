const form = document.getElementById('form');
const first = document.getElementById('1st');
const second = document.getElementById('2nd');
const third = document.getElementById('3rd');
const four = document.getElementById('4th');
const five = document.getElementById('5th');
const six = document.getElementById('6th');
const seven = document.getElementById('7th');
let result = document.getElementById('result')
let cgpa = 0;
const submit =  document.getElementById('submit')

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    cgpa = (17.5*first.value + 20.5*second.value + 21.0*third.value + 21.0*four.value + 21.0*five.value + 21.0*six.value + 20.0*seven.value)/142;
    result.innerHTML = `CGPA : ${cgpa.toFixed(2)}`
})