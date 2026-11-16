const $=s=>document.querySelector(s);
const noBtn=$("#noBtn");if(noBtn)noBtn.addEventListener("click",()=>{$("#noReply").classList.add("show");noBtn.textContent="TRY AGAIN ♡";noBtn.classList.add("hot");popHearts( innerWidth/2, innerHeight*.68, 10)});
const cake=$("#bigCake");if(cake){const blow=()=>{cake.classList.add("blown");$("#cakeMessage").textContent="Wish sent into the universe! ✨ May all your wishes come true. ♡";popHearts(innerWidth/2,innerHeight/2,20)};cake.addEventListener("click",blow);cake.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();blow()}})}
const envelope=$("#bigEnvelope");if(envelope){const open=()=>{envelope.classList.add("open");$("#letterText").classList.add("show");$("#letterHint").textContent="A letter from my heart to yours ♡";popHearts(innerWidth/2,innerHeight/2,14)};envelope.addEventListener("click",open);envelope.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}})}
function popHearts(x,y,n){for(let i=0;i<n;i++){const h=document.createElement("span");h.textContent=["♥","♡","✦","💗"][Math.floor(Math.random()*4)];h.style.cssText="position:fixed;z-index:20;pointer-events:none;left:"+(x+Math.random()*100-50)+"px;top:"+y+"px;font-size:"+(18+Math.random()*18)+"px;animation:heartRise 1.3s ease-out forwards";document.body.append(h);setTimeout(()=>h.remove(),1350)}}
const style=document.createElement("style");style.textContent="@keyframes heartRise{to{transform:translateY(-110px) rotate(35deg) scale(.5);opacity:0}}";document.head.append(style);

// Remove any obsolete manual slideshow controls left in a cached/older page.
document.querySelectorAll("button, a, [role='button']").forEach(element=>{
 const label=[element.textContent,element.id,element.className,element.getAttribute("aria-label"),element.getAttribute("title")].join(" ").toLowerCase();
 if(/next[-_ ]?(frame|image|gif|slide)?|next\s*(gif|image|picture)/.test(label)) element.remove();
});
