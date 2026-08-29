document.querySelectorAll('.dropdown .drop-toggle').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.preventDefault();
    const parent=btn.closest('.dropdown');
    parent.classList.toggle('open');
    document.querySelectorAll('.dropdown.open').forEach(other=>{if(other!==parent) other.classList.remove('open')});
  });
});
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav-links');
if(menu && nav){
  menu.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}

document.addEventListener('click',e=>{
  if(!e.target.closest('.dropdown')) document.querySelectorAll('.dropdown.open').forEach(d=>d.classList.remove('open'));
});

// Light / Dark Mode
const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '☾';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '☾';
    } else {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀';
    }
  });
}