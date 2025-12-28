const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const label = document.getElementById("label");
let count = 0;

increment.onclick = function(){
    count ++;
    label.textContent = count;
}
decrement.onclick = function(){
    count --;
    label.textContent = count;
}
reset.onclick = function(){
    count = 0;
    label.textContent = count;
}