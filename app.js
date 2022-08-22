let answer = Math.floor(Math.random()*100);

let n1 = 0;
let n2 = 99;

while(true){
    let number = prompt("Choosing a number between " + n1 + " to " + n2 + ".");

    if((number < n1 ) || (number > n2)){
        alert('Please choosing the number between ' + n1 + ' to ' + n2 + '.');
        continue;
    }

    if(number == answer){
        alert('You win');
        break;
    }else if(number <= answer){
        n1 = number;
    }else{
        n2 = number;
    };

};