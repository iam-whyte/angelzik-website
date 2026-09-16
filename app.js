const WA_NUMBER='447448886107';
const WA_MESSAGE='Hello Angelzik Humanitarian Foundation, I would like to support or donate to your work.';
const WA_URL='https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(WA_MESSAGE);
document.querySelectorAll('.wa-link').forEach(link=>link.href=WA_URL);
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}
document.getElementById('year').textContent=new Date().getFullYear();