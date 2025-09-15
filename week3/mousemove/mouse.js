  window.addEventListener("mousemove", e => {
    const light = Math.round((e.clientX / window.innerWidth) * 100);
    const sat   = Math.round((e.clientY / window.innerHeight) * 100);

    document.documentElement.style.setProperty("--light", light);
    document.documentElement.style.setProperty("--sat", sat);
  });