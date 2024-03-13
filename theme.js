let theme=document.getElementById("theme");
let white_t=document.getElementsByClassName("white-t");
let text_mute=document.querySelectorAll(".nav a");
let ytvideo=document.querySelectorAll(".ytvideo");
let rew=document.querySelectorAll(".rew");




theme.addEventListener("click",()=>
{
    document.body.style.backgroundColor="black";
   for (let i = 0; i < white_t.length; i++) {
    white_t[i].style.color="white";
    
   }
   text_mute.forEach((text_mute)=>
{
    text_mute.classList.remove("text-muted");
    text_mute.classList.add("foot-nav-t");
})
   ytvideo.forEach((ytvideo)=>
{
    ytvideo.classList.remove("ytvideo");
    ytvideo.classList.add("ytvideo-new");
})
rew.forEach((rew)=>
{
rew.classList.add("new-rew")
})
})