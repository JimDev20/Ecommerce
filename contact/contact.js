// Contact page - form validation + nav cart count
function showToast(message,type){
  var t=document.getElementById('appToast'),b=document.getElementById('appToastBody');
  if(!t||!b)return;
  b.textContent=message;
  t.className='toast align-items-center text-bg-'+(type||'success')+' border-0';
  new bootstrap.Toast(t,{delay:3000}).show();
}

document.addEventListener('DOMContentLoaded',function(){
  var c=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var n=c.reduce(function(s,i){return s+i.qty},0);
  var el=document.getElementById('navCartCount');
  if(el&&n>0){el.textContent=n;el.classList.add('badge','bg-danger');}

  var form=document.getElementById('contactForm');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    var name=document.getElementById('fullName').value.trim();
    var email=document.getElementById('email').value.trim();
    var subject=document.getElementById('subject').value;
    var message=document.getElementById('message').value.trim();
    if(!name||!email||!subject||!message){showToast('Please fill in all fields.','warning');return;}
    showToast('Thank you! Your message has been sent.','success');
    form.reset();
  });}
});
