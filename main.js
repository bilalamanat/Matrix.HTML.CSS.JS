console.log('Hello World!');
let lines=document.getElementsByClassName('lines');
 let words=['q','w','0','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','1','z','x','c','v','5','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
let first=0;

let rand;
let condi=32;
let idk;

function work(time,column,rest){      
  
for(let i=0;i<32;i++){
  function gen(){
    rand=Math.floor(Math.random()*52); 

   lines[column].innerHTML= rest+' '+words[rand];
  rest=rest+" "+words[rand];
  if(i==31){
    rest='';
        
  }}
  setTimeout(gen,i*time);
     }
     
}
setInterval(function(){
work(100,0,'');},3000);
setInterval(function(){work(100,1,'');
},1000);

setInterval(function(){
work(100,2,'');},800);
setInterval(function(){
work(150,3,'');},700);
setInterval(function(){
work(100,4,'');},1000);
setInterval(function(){
work(100,5,'');},900);
setInterval(function(){
work(100,6,'');},1000);
setInterval(function(){
work(100,7,'');},1200);
setInterval(function(){
work(450,8,'');},700);
setInterval(function(){
work(150,9,'');},500);
setInterval(function(){
work(330,10,'');},600);
setInterval(function(){
work(180,11,'');},900);
setInterval(function(){
work(100,12,'');},700);
setInterval(function(){
work(320,13,'');},1000);
setInterval(function(){
work(100,14,'');},100);
setInterval(function(){
work(180,15,'');},150);
setInterval(function(){
work(250,16,'');},400);
setInterval(function(){
work(80,17,'');},500);
setInterval(function(){
work(100,18,'');},1000);
setInterval(function(){
work(150,19,'');},250);
