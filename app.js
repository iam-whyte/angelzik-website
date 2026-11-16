const WA_NUMBER='447448886107';
const WA_MESSAGE='Hello Angelzik Humanitarian Foundation, I would like to support or donate to your work.';
const WA_URL='https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(WA_MESSAGE);
document.querySelectorAll('.wa-link').forEach(link=>link.href=WA_URL);

const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}

// Social profiles are intentionally inactive until Angelzik supplies its official URLs.
document.querySelectorAll('[data-social]').forEach(link=>{
  link.href='#';
  link.setAttribute('aria-disabled','true');
  link.title='Official social media link coming soon';
  link.addEventListener('click',event=>event.preventDefault());
});

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }),{threshold:.12});
  items.forEach(item=>observer.observe(item));
}else{
  items.forEach(item=>item.classList.add('is-visible'));
}