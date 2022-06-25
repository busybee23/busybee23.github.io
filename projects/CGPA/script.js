const form_main = document.getElementById('form');
const eight = document.getElementById('8th');
const form = document.querySelectorAll('.form-control input');
const submit = document.getElementById('submit');
const sem_type =  document.getElementById('semtype');

let result = document.getElementById('result')
let cgpa = 0;
const arr = [];

submit.addEventListener('click',(e) =>{
    e.preventDefault();
    form.forEach(cheese => {
        arr.push(cheese.value);
    });
    if(arr.length==7){
        cgpa = (17.5*arr[0] + 20.5*arr[1] + 21.0*arr[2] + 21.0*arr[3] + 21.0*arr[4] + 21.0*arr[5] + 20.0*arr[6])/142;
        result.innerHTML = `CGPA : ${cgpa.toFixed(2)}`
    }else{
        cgpa = (17.5*arr[0] + 20.5*arr[1] + 21.0*arr[2] + 21.0*arr[3] + 21.0*arr[4] + 21.0*arr[5] + 20.0*arr[6] + 18.0*arr[7])/160;
        result.innerHTML = `CGPA : ${cgpa.toFixed(2)}`
    }
});

// eight.style.display = "none";


//  submit.addEventListener('click',(e)=>{
// //     e.preventDefault();
// //     cgpa = (17.5*first.value + 20.5*second.value + 21.0*third.value + 21.0*four.value + 21.0*five.value + 21.0*six.value + 20.0*seven.value)/142;
// //     result.innerHTML = `CGPA : ${cgpa.toFixed(2)}`
// // })