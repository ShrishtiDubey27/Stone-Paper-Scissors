

let username;

var score ={
 win :0,
 lose :0,
 tie :0,
};

let userchoice='null';
let compchoice='null';
document.querySelector('#user').innerHTML=`Your choice is ${userchoice}.`;
document.querySelector('#cmp').innerHTML=`Computer choice is ${compchoice}.`;

function rand(){
let cmpval= Math.round(Math.random()*3);
if(cmpval==1)
{
    return 'STONE';
}
else if(cmpval==2)
{
    return 'PAPER';
}
else
{
return 'SCISSORS';
}
}

function result(x,y){
 if(username==null) 
  {
    document.querySelector('#winner').innerHTML=`⚠️ENTER YOUR NAME⚠️`;
 }
 else
 {
    if(x==y)
    {
        document.querySelector('#winner').innerHTML=`⚠️Its a TIE⚠️`;
        score.tie++;
        document.querySelector('#tie').innerHTML=score.tie;

    }
    else if( x=='PAPER' && y=='STONE' || x=='STONE' && y=='SCISSORS'|| x=='SCISSORS' && y=='PAPER')
    {
        document.querySelector('#winner').innerHTML=`🎉${username} won🎉`;
        score.win++;
        document.querySelector('#win').innerHTML=score.win;
    }
    else 
    {
        document.querySelector('#winner').innerHTML=`🖥️Computer won🖥️`
        score.lose++;
        document.querySelector('#lose').innerHTML= score.lose;
    }
     
    if(score.win==3 || score.lose==3)
    {
      if( score.win==3)
      {
        document.querySelector('#final').innerHTML=`🏆${username} is the ULTIMATE WINNER🏆 `;
        score.lose=0;
        score.win=0;
        score.tie=0;
        document.querySelector('#tie').innerHTML=score.tie;
        document.querySelector('#lose').innerHTML= score.lose;
        document.querySelector('#win').innerHTML=score.win;
        
      }
      else
      {
        document.querySelector('#final').innerHTML=`🏆COMPUTER  is the  ULTIMATE WINNER🏆 `;
        score.lose=0;
        score.win=0;
        score.tie=0;
        document.querySelector('#tie').innerHTML=score.tie;
        document.querySelector('#lose').innerHTML= score.lose;
        document.querySelector('#win').innerHTML=score.win;
      }
    }
     
}
}
