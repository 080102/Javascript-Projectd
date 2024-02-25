let varCount = document.getElementById('variable');
let minus = document.getElementById('red');
let plus = document.getElementById('green');
let main = document.getElementById('main');

let counter = 0;
// Method 1 for class
plus.addEventListener('click',function() {
    minus.removeAttribute("disabled");
    counter++;
    // console.log(counter);
    varCount.innerHTML = counter;

    if(counter >= 20){
        alert("Seats full no more space");
        main.style.background = "lightgreen";
        plus.setAttribute("disabled","true");
    }
})

//method 2
// function add() {
//     counter++;
//     varCount.innerHTML = counter;
    
// }
// plus.onclick = add;


// minus
minus.addEventListener('click',function() {
        plus.removeAttribute('disabled')
        counter--;
        console.log(counter);
        varCount.innerHTML = counter;
        if(main.style.background = 'lightgreen'){
            main.style.background = 'white';
        }
        if(counter<=0){
            minus.setAttribute("disabled","true")
        }
    })








// count2.onclick = function() {
//     for(let i=0; i<=20;i++){
//         varCount.innerHTML = i;
//     }
// }
// count.onclick = function() {
//     for(let i=20; i>=0;i--){
//         varCount.innerHTML = i;
//     }
// }

