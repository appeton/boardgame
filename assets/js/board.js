let die1=0;
let die2=0;
let total1=0;
let total2=0;
let total3=0;
let total4=0;
let gameplay=true;
let array=[];



function close1(){
    let aa=document.getElementById('aa').value;
    if(aa>1 && aa<=4)
    {
      
    document.getElementById("hidden-port1").style.display="none";
    }
    else{
        document.getElementById("hidden-port1").style.display="block";
    }
}

let i=0;
document.getElementById('exit').addEventListener("click",function(){
  window.location.href = "https://google.com";
})
document.getElementById('playagain').addEventListener("click",function(){
  location.reload();
})
document.getElementById('roll').addEventListener("click",function(){

   if(gameplay=1){
     if(i==document.getElementById('aa').value){
       i=0;
     }
  if(i<document.getElementById('aa').value ){

    let score1=Math.floor(Math.random()*6+1);
let score2=Math.floor(Math.random()*6+1);
document.getElementById('dice1').src="120px-Dice-"+score1+".png";
document.getElementById('dice2').src="120px-Dice-"+score2+".png"; 
let Total=score1+score2;

document.getElementById('turn').style.display="block";
// let d=i+1;

// let string1="Player "+d+" Turn";

//   document.getElementById('cc').textContent=string1;

  
 
if(!array[i]){
array[i]=Total;
}
else if(array[i]){
array[i]=array[i]+Total;
if(array[i]>22){
  
array[i]=22-Total+(22-(array[i]-Total));
}

if(array[i]==22){
  let string="Player "+(i+1)+" is winner!";
  document.getElementById('string').textContent=string;
  document.getElementById('winner').style.display="block";
  document.getElementById('cc').style.display="none";
  gameplay=0;
}

}
if(array[i]==4){
  array[i]=17;
}
if(array[i]==20){
  array[i]=0;
 
}

 if(i==0){
   let player1 = document.getElementById("player1");
   let now= document.getElementById("akwat"+array[i]);
  now.appendChild(player1); 
  
 
 }
 
 else if(i==1){
    let player2 = document.getElementById("player2");
    let now= document.getElementById("akwat"+array[i]);
   now.appendChild(player2); 
 
   
}
 
 else if(i==2){
    let player3 = document.getElementById("player3");
    let now= document.getElementById("akwat"+array[i]);
   now.appendChild(player3); 
 
 

 }

 else if(i==3){
    let player4 = document.getElementById("player4");
    let now= document.getElementById("akwat"+array[i]);
   now.appendChild(player4); 
 
   
}
  i++;

   }
  }
})



