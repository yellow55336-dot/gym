const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.desktop-nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open);});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}));}

const form=document.querySelector('#consult-form');
form?.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const values=new FormData(form);
  const result=form.querySelector('.form-result');
  result.hidden=false;
  result.textContent=`${values.get('name')}님, 상담 신청 정보가 준비되었습니다. 실제 운영 접수 채널은 사이트 운영자가 연결한 뒤 전송됩니다.`;
});

