let keysHero={le:false,ri:false,up:false,ac:false,};
let keysVillain={le:false,ri:false,up:false,ac:false,};
var rel=document.querySelector(".reload");
var fight=document.querySelector(".fight");
var heal=document.querySelector("health");
var per1=document.querySelector(".per1");
var per2=document.querySelector(".per2");
var heroHealth=100,villainHealth=100;
var hero=document.querySelector(".hero");
var villain=document.querySelector(".villain");
var audio=new Audio('music/backgMusic.mp3');
var audioPurple=new Audio('music/shootMusic.mp3');
var audioBlue=new Audio('music/shootMusic.mp3');
var body=document.querySelector("body");
var start=document.querySelector(".start");
var info=document.querySelector(".infor");
var check;

var end=true;
setTimeout(()=>{
    window.scrollTo(top);
    console.log("upped");
},10);

start.addEventListener("click",()=>{
    if(end)
    {console.log("start is clicked");
    info.style.height="0";
    info.style.width="0";
    info.style.margin="0";
    info.style.padding="0";
    per1.style.width="300px";
    per2.style.width="300px";
    per1.innerText="100%";
    per2.innerText="100%";
    start.visibility="hidden";
    info.style.visibility="hidden";
    // check=setInterval(working,10);
    rel.style.visibility="hidden";
    fight.innerText="FIGHT!";
     
    hero.style.bottom="60px";
    hero.style.left="200px";
    villain.style.bottom="60px";
    villain.style.left="calc(100% - 370px)";
    
    heroHealth=100;villainHealth=100;
    audio.play();
    work();}
    end=false;
});


rel.addEventListener("click",function(){
    console.log("WORKING");
    per1.innerText=heroHealth+"%";
    per2.innerText=villainHealth+"%";
    fight.innerText="FIGHT!";
    // audio.play();
    
    hero.style.bottom="60px";
    hero.style.left="200px";
    villain.style.bottom="60px";
    villain.style.left="calc(100% - 370px)";
    info.style.visibility="visible";
    start.visibility="visible";
    info.style.height="100vw";
    info.style.width="100vw";
    info.style.padding="20px";
    
    rel.style.visibility="hidden";
    window.scrollTo(top);

});


document.addEventListener('keydown',function(event)
{
    console.log(event.key+" "+event.keyCode);
    if(event.keyCode==37) keysVillain.le=true;
    if(event.keyCode==39) keysVillain.ri=true;
    if(event.keyCode==38) keysVillain.up=true;
    if(event.keyCode==17) keysVillain.ac=true;
    if(event.keyCode==65) keysHero.le=true;
    if(event.keyCode==68) keysHero.ri=true;
    if(event.keyCode==87) keysHero.up=true;
    if(event.keyCode==32) keysHero.ac=true;
    
    

    //FOR HERO : 

    if(keysHero.le && keysHero.up){
        left=parseInt(window.getComputedStyle(hero).getPropertyValue("left"));
        hero.style.left=left-30+"px";
        hero.classList.add("jump");
        setTimeout(()=>{
            hero.classList.remove("jump");
        },1000);
    }
    else if(keysHero.le && keysHero.ac)
    {
        left=parseInt(window.getComputedStyle(hero).getPropertyValue("left"));
        hero.style.left=left-30+"px";
        blue=document.querySelector(".blue");
        blue.classList.add("animateBlue");
        audioBlue.play();
        setTimeout(()=>
        {
            blue.classList.remove("animateBlue");
        },1000);
    }
    else if(keysHero.ri && keysHero.up)
    {
        left=parseInt(window.getComputedStyle(hero).getPropertyValue("left"));
        hero.style.left=left+30+"px";
        hero.classList.add("jump");
        setTimeout(()=>{
            hero.classList.remove("jump");
        },1000);
    }
    else if(keysHero.ri && keysHero.ac)
    {
        left=parseInt(window.getComputedStyle(hero).getPropertyValue("left"));
        hero.style.left=left+30+"px";
        blue=document.querySelector(".blue");
        blue.classList.add("animateBlue");
        audioBlue.play();
        setTimeout(()=>
        {
            blue.classList.remove("animateBlue");
        },1000);
    }
    else if(keysHero.up && keysHero.ac)
    {
        hero.classList.add("jump");
        setTimeout(()=>{
            hero.classList.remove("jump");
        },1000);
        blue=document.querySelector(".blue");
        blue.classList.add("animateBlue");
        audioBlue.play();
        setTimeout(()=>
        {
            blue.classList.remove("animateBlue");
        },1000);
    }
    else if(keysHero.le)
    {
        left=parseInt(window.getComputedStyle(hero).getPropertyValue("left"));
        hero.style.left=left-30+"px";
    }
    else if(keysHero.ri){
        left=parseInt(window.getComputedStyle(hero).getPropertyValue("left"));
        hero.style.left=left+30+"px";
    }
    else if(keysHero.ac)
    {
        blue=document.querySelector(".blue");
        blue.classList.add("animateBlue");
        audioBlue.play();
        setTimeout(()=>
        {
            blue.classList.remove("animateBlue");
        },1000);
    }
    else if(keysHero.up) {
        hero=document.querySelector(".hero");
        hero.classList.add("jump");
        setTimeout(()=>{
            hero.classList.remove("jump");
        },1000);
    }






    //FOR VILLAIN:

    if(keysVillain.le && keysVillain.up){
        left=parseInt(window.getComputedStyle(villain).getPropertyValue("left"));
        villain.style.left=left-30+"px";
        villain.classList.add("jump");
        setTimeout(()=>{
            villain.classList.remove("jump");
        },1000);
    }
    else if(keysVillain.le && keysVillain.ac)
    {
        left=parseInt(window.getComputedStyle(villain).getPropertyValue("left"));
        villain.style.left=left-30+"px";
        purple=document.querySelector(".purple");
        purple.classList.add("animatePurple");
        audioPurple.play();
        setTimeout(()=>
        {
            purple.classList.remove("animatePurple");
        },1000);
    }
    else if(keysVillain.ri && keysVillain.up)
    {
        left=parseInt(window.getComputedStyle(villain).getPropertyValue("left"));
        villain.style.left=left+30+"px";
        villain.classList.add("jump");
        setTimeout(()=>{
            villain.classList.remove("jump");
        },1000);
    }
    else if(keysVillain.ri && keysVillain.ac)
    {
        left=parseInt(window.getComputedStyle(villain).getPropertyValue("left"));
        villain.style.left=left+30+"px";
        purple=document.querySelector(".purple");
        purple.classList.add("animatePurple");
        audioPurple.play();
        setTimeout(()=>
        {
            purple.classList.remove("animatePurple");
        },1000);
    }
    else if(keysVillain.up && keysVillain.ac)
    {
        villain.style.right=right+30+"px";
        villain.classList.add("jump");
        setTimeout(()=>{
            villain.classList.remove("jump");
        },1000);
        purple=document.querySelector(".purple");
        purple.classList.add("animatePurple");
        audioPurple.play();
        setTimeout(()=>
        {
            purple.classList.remove("animatePurple");
        },1000);
    }
    else if(keysVillain.le)
    {
        left=parseInt(window.getComputedStyle(villain).getPropertyValue("left"));
        villain.style.left=left-30+"px";
    }
    else if(keysVillain.ri){
        left=parseInt(window.getComputedStyle(villain).getPropertyValue("left"));
        villain.style.left=left+30+"px";
    }
    else if(keysVillain.ac)
    {
        purple=document.querySelector(".purple");
        purple.classList.add("animatePurple");
        audioPurple.play();
        setTimeout(()=>
        {
            audioPurple.pause();
            purple.classList.remove("animatePurple");
        },1500);
    }
    else if(keysVillain.up) {
        villain.classList.add("jump");
        setTimeout(()=>{
            villain.classList.remove("jump");
        },1000);
    }

});
document.addEventListener('keyup',function(event){
    if(event.keyCode==37) keysVillain.le=false;
    if(event.keyCode==39) keysVillain.ri=false;
    if(event.keyCode==38) keysVillain.up=false;
    if(event.keyCode==17) keysVillain.ac=false;
    if(event.keyCode==65) keysHero.le=false;
    if(event.keyCode==68) keysHero.ri=false;
    if(event.keyCode==87) keysHero.up=false;
    if(event.keyCode==32) keysHero.ac=false;
});


function work()
{
    
    check=setInterval(working,10);
}

function working(){//check collisions

    var blue=document.querySelector(".blue");
    var purple=document.querySelector(".purple");
    var h=document.querySelector(".fight");

    var blueX=parseInt(window.getComputedStyle(blue,null).getPropertyValue("left"));
    var blueY=parseInt(window.getComputedStyle(blue,null).getPropertyValue("bottom"));

    var purpleX=parseInt(window.getComputedStyle(purple,null).getPropertyValue("left"));
    var purpleY=parseInt(window.getComputedStyle(purple,null).getPropertyValue("bottom"));

    var heroX=parseInt(window.getComputedStyle(hero,null).getPropertyValue("left"));
    var heroY=parseInt(window.getComputedStyle(hero,null).getPropertyValue("bottom"));

    var villainX=parseInt(window.getComputedStyle(villain,null).getPropertyValue("left"));
    var villainY=parseInt(window.getComputedStyle(villain,null).getPropertyValue("bottom"));
    // //blue and purple collide: they cancel each other out
    if((villainX+purpleX-heroX-blueX)<31 && (villainX+purpleX-heroX-blueX)>-31 && (villainY+purpleY-heroY-blueY)<31 && (villainY+purpleY-heroY-blueY)>-31)
    {
        blue.classList.remove("animateBlue");
        purple.classList.remove("animatePurple");
    }
    else
    {
        // purple hits hero
        
        if((villainX+purpleX-heroX)>15 && (villainX+purpleX-heroX)<145 && (purpleY +villainY-heroY)>-90 && (purpleY+villainY-heroY)<290)
        {
            heroHealth-=1;
            if(heroHealth>=0){per1.innerText=heroHealth+"%";per1.style.width=(3*heroHealth)+"px";}
        }
        //Blue hits villain
        if(Math.abs(heroX+blueX-villainX)<70&& (blueY+heroY-villainY)>-5 && (blueY  +heroY-villainY)<185)
        {
            villainHealth-=1;
            if(villainHealth>=0){per2.innerText=villainHealth+"%";per2.style.width=(3*villainHealth)+"px";}
        }
    }

    
    
    //if hero's health is finished:
    if(heroHealth<=0 && villainHealth>0)
    {
        h.innerText="Beerus Wins!";rel.style.visibility="visible";
        audio.pause();
        end=true;
        // audioGo.play();
        clearInterval(check);
    }
    //if villain's health is finished:
    else if(villainHealth<=0 && heroHealth>0)
    {
        h.innerText="Goku Wins!";rel.style.visibility="visible"; 
        audio.pause();
        end=true;
        // audioGo.play();
        clearInterval(check);
    }
    else if(villainHealth<=0 && heroHealth<=0)
    {
        h.innerText="Tie!";rel.style.visibility="visible"; 
        audio.pause();
        end=true;
        // audioGo.play();
        clearInterval(check);
    }
    
}

