const $=s=>document.querySelector(s);
const noBtn=$("#noBtn");if(noBtn)noBtn.addEventListener("click",()=>{$("#noReply").classList.add("show");noBtn.textContent="TRY AGAIN ♡";noBtn.classList.add("hot");popHearts( innerWidth/2, innerHeight*.68, 10)});
const cake=$("#bigCake");if(cake){const blow=()=>{cake.classList.add("blown");$("#cakeMessage").textContent="Wish sent into the universe! ✨ May all your wishes come true. ♡";popHearts(innerWidth/2,innerHeight/2,20)};cake.addEventListener("click",blow);cake.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();blow()}})}
const envelope=$("#bigEnvelope");if(envelope){const open=()=>{envelope.classList.add("open");$("#letterText").classList.add("show");$("#letterHint").textContent="A letter from my heart to yours ♡";popHearts(innerWidth/2,innerHeight/2,14)};envelope.addEventListener("click",open);envelope.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}})}
function popHearts(x,y,n){for(let i=0;i<n;i++){const h=document.createElement("span");h.textContent=["♥","♡","✦","💗"][Math.floor(Math.random()*4)];h.style.cssText="position:fixed;z-index:20;pointer-events:none;left:"+(x+Math.random()*100-50)+"px;top:"+y+"px;font-size:"+(18+Math.random()*18)+"px;animation:heartRise 1.3s ease-out forwards";document.body.append(h);setTimeout(()=>h.remove(),1350)}}
const style=document.createElement("style");style.textContent="@keyframes heartRise{to{transform:translateY(-110px) rotate(35deg) scale(.5);opacity:0}}";document.head.append(style);
// Automatically crossfade between the two Bubu-Dudu illustrations every 2 seconds.
document.querySelectorAll(".rotating-bear").forEach(gallery=>{
 const frames=gallery.querySelectorAll("img");
 if(frames.length<2)return;
 let active=0;
 window.setInterval(()=>{
   frames[active].classList.remove("is-visible");
   active=(active+1)%frames.length;
   frames[active].classList.add("is-visible");
 },2000);
});

// Remove any legacy manual slideshow control left by an older cached version.
document.querySelectorAll(".next-frame-button, #nextFrameButton, [data-next-frame]").forEach(button=>button.remove());
