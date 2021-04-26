'use strict';

let username =  prompt('please enter your name ?'); 
console.log(username);

alert('hello ' + username );

let ans1 =  prompt('Do you know how to swim ?').toLowerCase(); 

condition (ans1);

let ans2 =  prompt('Do you love summer ?').toLowerCase(); 

condition (ans2);

let ans3 =  prompt('Do you believe in ghosts ?').toLowerCase(); 

condition (ans3);

let ans4 =  prompt('Have you ever seen an alien ?').toLowerCase(); 

condition (ans4);

let ans5 =  prompt('Can you play poker ?').toLowerCase(); 
   alert('By the way playing poker is haram. hhhhh');

condition (ans5);



function condition (ans){
    if(ans == 'yes' || ans == 'y'){
  console.log("correct answer" );
  alert('correct answer ' );
  } else if(ans == 'no' || ans == 'n'){
   console.log("uncorrect answer ");
   alert('uncorrect  answer ');
  }
}

alert('Thanks for your time , See you later.');
