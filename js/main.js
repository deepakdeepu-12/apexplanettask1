document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();
  const msgEl=document.getElementById('formMsg');
  if(!name||!email||!message){ msgEl.textContent='Please complete all fields.'; return; }
  msgEl.textContent='Thanks! This demo does not send messages.';
  this.reset();
});
