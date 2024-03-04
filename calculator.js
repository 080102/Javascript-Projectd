
let textarea = document.getElementById('textarea');
function zero() {
    textarea.value += '0';
}
function three() {
    textarea.value += '3';
}
function two() {
    textarea.value += '2';
}
function one() {
    textarea.value += '1';
}
function six() {
    textarea.value += '6';
}
function five() {
    textarea.value += '5';
}
function four() {
    textarea.value += '4';
}
function nine() {
    textarea.value += '9';
}
function eight() {
    textarea.value += '8';
}
function seven() {
    textarea.value += '7';
}
function ac(){
    textarea.value = '';
}
function divide(){
    textarea.value += '/';
}
function times(){
    textarea.value += '*';
}
function dot(){
    textarea.value += '.';
}
function minus(){
    textarea.value += '-';
}
function plus(){
    textarea.value += '+';
}
function raise(){
    textarea.value += '**';
}
function square(){
    textarea.value = Math.sqrt(textarea.value);
}
function equals(){
    let solution = eval(textarea.value);
    textarea.value = solution;
}