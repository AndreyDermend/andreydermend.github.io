const cur=document.getElementById('cursor');
const ring=document.getElementById('cursor-ring');
if (cur && ring) {
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop)})();
}
const pbar=document.getElementById('progress-bar');
if (pbar) {
  window.addEventListener('scroll',()=>{pbar.style.transform=`scaleX(${window.scrollY/(document.body.scrollHeight-window.innerHeight)})`});
}
const ro=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
const tw=document.getElementById('typewriter');
if (tw) {
  const roles=['Full-Stack Software Engineer','Production PWA Builder','AI & Systems Projects','Angular · Python · TypeScript'];
  let ri=0,ci=0,del=false;
  function type(){
    const w=roles[ri];
    if(!del){tw.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(type,2000);return}}
    else{tw.textContent=w.slice(0,--ci);if(ci===0){del=false;ri=(ri+1)%roles.length}}
    setTimeout(type,del?48:88);
  }
  setTimeout(type,900);
}
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card=>{
      const categories = card.dataset.categories || '';
      card.classList.toggle('hidden',f!=='all'&&!categories.includes(f));
    });
  });
});
