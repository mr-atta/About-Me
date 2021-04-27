'use strict' ;

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

let graed = 0 ;
let num = 8 ;

for(let i = 1; i <= 4 ;i++) {
 let ans6 =  prompt(' guess a number.'); 
 console.log("The Entered Number Is " + ans6 );
 if(ans6 == num){ 
   graed++ ;
   break ;
   }
 if(ans6 > num){ alert('TOO high'); }
 if(ans6 < num){ alert('TOO low'); }
}
alert('The Current  Number is ' + num );
alert('The Graed ' + graed);

alert('WELCOME LEVEL 02 ');

let  Canseres = [5 , 15 , 25 , 50] ;

for(let m = 0 ; m < Canseres.length ; m++){
  let ans7 =  prompt(' guess a number.'); 
  console.log("The Entered Number Is " + ans7 );
 for(let k = 0 ; k < Canseres.length ; k++){
   
   if( ans7 == Canseres[k] ){ 
    graed++ ;
    break ;
    }
  }
}

console.log("The Graed Is " + graed );

alert('The Current  Number is ' + Canseres);
alert('The Total Graed ' + graed + '/5');


