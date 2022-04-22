function rand()
{
    return (1+Math.floor(Math.random()*13));
}
let firstc = 0;
let secc = 0;
let cards=[];

let isblackj=false;
let isalive=true;

let mes="";

let sum=0;
let varb= false;

// let mesEl = document.getElementById("card");
// let mesEl = document.querySelector(".dd");
let mesEl=document.querySelector("#card");
console.log(mesEl);

let el = document.getElementById("sum");
let cd=document.getElementById("cc");

function startg()
{
    firstc=rand();
    secc=rand();
    cards=[firstc,secc];
    sum=firstc+secc;
    renderg();
}

function renderg()
{
    if(!varb)
    firstc = rand();
    secc = rand();
    if(sum<=20)
{
    mes="Do you want to draw the next card? ";
}else if(sum===21) /*== gives true age=="100" but === is strict , it knows we are comparing an int with string */
{
    mes="Congrats! you have made it";
    isblackj=true;
}else{
    mes="Sorry, you have lost the game";
    isalive=false;
}
mesEl.textContent=mes;
el.textContent="Sum: "+sum;
cd.textContent="Cards: ";
let i=0;
for(i=0;i<cards.length;i++)
{
    cd.textContent+=cards[i]+" ";
}
}

let v=rand();
function newc()
{
    varb = true;
    if(sum<21&&sum!=0)
    {
        cards.push(v);
    sum=sum+v;
    console.log(sum);
    {renderg();}
    }
}

//challenge
let ob1={
    name:"Ragini",
    chips:500,
    // sayhello:function(){
    //     console.log("Hello");
    // }
}

let para=document.getElementById("myid");
para.textContent=ob1.name+" :$"+ob1.chips;

// ob1.sayhello();

