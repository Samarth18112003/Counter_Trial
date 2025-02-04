let counter = 0;
const heading = document.getElementById('heading1');
const value = document.getElementById('value');
const button1 = document.getElementById('btn1');
button1.addEventListener('click',increase)
const button2 = document.getElementById('btn2');
button2.addEventListener('click',decrease)
const button3 = document.getElementById('btn3');
button3.addEventListener('click',reset)
function increase(){
    counter++;
    value.innerHTML=counter;
}
function decrease(){
    counter--;
    value.innerHTML=counter;
}
function reset(){
    counter=0;
    value.innerHTML=counter;
}