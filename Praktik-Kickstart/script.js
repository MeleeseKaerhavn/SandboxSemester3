const btn = document.getElementById("copyEmail");
btn.addEventListener("click", async () => {
  const email = btn.dataset.email;
  try { await navigator.clipboard.writeText(email); flash("Emailadresse kopieret!"); }
  catch { flash("Kunne ikke kopiere"); }
});
function flash(msg){
  const t = btn.textContent;
  btn.textContent = msg; btn.disabled = true;
  setTimeout(()=>{ btn.textContent = t; btn.disabled = false; }, 1200);
}
