// Contact page - form validation + nav cart count + scroll to top
document.addEventListener('DOMContentLoaded',function(){
  // Cart count
  var c=JSON.parse(localStorage.getItem('unclegorg_cart')||'[]');
  var n=c.reduce(function(s,i){return s+i.quantity},0);
  var el=document.getElementById('navCartCount');
  if(el&&n>0){el.textContent=n;el.classList.add('badge','bg-danger');}

  // Scroll top
  var b=document.getElementById('scrollTopBtn');
  if(b){window.addEventListener('scroll',function(){b.classList.toggle('show',window.scrollY>300)});b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});}

  // Contact form
  var form=document.getElementById('contactForm');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    var name=document.getElementById('fullName').value.trim();
    var email=document.getElementById('email').value.trim();
    var subject=document.getElementById('subject').value;
    var message=document.getElementById('message').value.trim();
    if(!name||!email||!subject||!message){alert('Please fill in all fields.');return;}
    alert('Thank you! Your message has been sent.');
    form.reset();
  });}
});