const form_main = document.getElementById('form');
const form = document.querySelectorAll('.form-control input[value]');
const submit = document.getElementById('submit');

let result = document.getElementById('result')
let cgpa = 0;
const arr = [];
console.log(form);
// submit.addEventListener('click',(e) =>{
//     e.preventDefault();
//     form.forEach((cheese) => {
//         arr.push(cheese.value);
//     })
//     console.log(arr);
//     // cgpa = (17.5*first.value + 20.5*second.value + 21.0*third.value + 21.0*four.value + 21.0*five.value + 21.0*six.value + 20.0*seven.value)/142;

// })


//  submit.addEventListener('click',(e)=>{
// //     e.preventDefault();
// //     cgpa = (17.5*first.value + 20.5*second.value + 21.0*third.value + 21.0*four.value + 21.0*five.value + 21.0*six.value + 20.0*seven.value)/142;
// //     result.innerHTML = `CGPA : ${cgpa.toFixed(2)}`
// // })