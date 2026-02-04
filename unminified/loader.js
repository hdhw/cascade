(() => {
  if (!/(\.|^)blooket\.com$/.test(location.hostname)) {
    alert("please load cascade.lol on blooket.com")
    return
  }

  if (document.getElementById("cascade-menu")) return

  const css = `
  #cascade-menu {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 220px;
    padding: 32px 28px;
    background: #0a0a0a;
    color: #fff;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.08);
    transform: translate(-50%, -50%) scale(0.92) translateY(8px);
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
    z-index: 999999;
    box-shadow: 
      0 0 0 1px rgba(255,255,255,0.04),
      0 4px 6px -1px rgba(0,0,0,0.3),
      0 20px 25px -5px rgba(0,0,0,0.4),
      0 45px 60px -15px rgba(0,0,0,0.5);
    transition: all .55s cubic-bezier(.16,1,.3,1);
  }

  #cascade-menu.show {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) translateY(0);
  }

  #title {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    transition: all .5s cubic-bezier(.16,1,.3,1);
  }

  #title.up {
    transform: translateY(-12px);
    opacity: 0.25;
  }

  #action {
    width: 100%;
    height: 42px;
    margin-top: 8px;
    border-radius: 11px;
    border: none;
    background: #fff;
    color: #000;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.01em;
    cursor: pointer;
    transition: all .2s cubic-bezier(.16,1,.3,1);
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }

  #action:hover {
    background: #f5f5f5;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255,255,255,0.15);
  }

  #action:active {
    transform: scale(0.97) translateY(0);
    background: #e5e5e5;
  }

  #action.morph {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    font-size: 0;
    background: rgba(255,255,255,0.08);
    box-shadow: none;
  }

  #loader {
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: 0;
    transition: opacity .5s ease;
  }

  #loader.show {
    opacity: 1;
  }

  .ring {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.12);
    border-top-color: rgba(255,255,255,0.9);
    animation: spin .7s cubic-bezier(.5,.1,.5,.9) infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  #loader-text {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .01em;
    color: rgba(255, 255, 255, 0.5);
  }

  .fade-in {
    animation: fadein .5s cubic-bezier(.16,1,.3,1) forwards;
  }

  @keyframes fadein {
    from { opacity: 0; transform: translateX(-6px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .success-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    animation: pop .5s cubic-bezier(.16,1,.3,1) forwards;
  }

  .success-icon svg {
    width: 10px;
    height: 10px;
  }

  @keyframes pop {
    0% { transform: scale(0) rotate(-45deg); opacity: 0; }
    60% { transform: scale(1.15) rotate(0deg); }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }
  `

  const style = document.createElement("style")
  style.textContent = css
  document.head.appendChild(style)

  const menu = document.createElement("div")
  menu.id = "cascade-menu"

  const title = document.createElement("div")
  title.id = "title"
  title.textContent = "cascade.lol"

  const btn = document.createElement("button")
  btn.id = "action"
  btn.textContent = "Load"

  const loader = document.createElement("div")
  loader.id = "loader"

  const ring = document.createElement("div")
  ring.className = "ring"

  const loaderText = document.createElement("div")
  loaderText.id = "loader-text"
  loaderText.textContent = "loading"

  loader.appendChild(ring)
  loader.appendChild(loaderText)

  menu.appendChild(title)
  menu.appendChild(btn)
  menu.appendChild(loader)
  document.body.appendChild(menu)

  requestAnimationFrame(() => menu.classList.add("show"))

  btn.onclick = () => {
    title.classList.add("up")
    btn.classList.add("morph")

    setTimeout(() => {
      btn.remove()
      loader.classList.add("show")

      setTimeout(() => {
        (function(){if(!location.hostname.includes('blooket.com')){alert('Use on blooket.com only');return}if(document.getElementById('cascade-menu'))return;var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/hdhw/cascade@main/unminified/cascade.lol.js';document.head.appendChild(s);})();
        ring.remove()
        
        const successIcon = document.createElement("span")
        successIcon.className = "success-icon"
        successIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>'
        loader.insertBefore(successIcon, loaderText)
        
        loaderText.textContent = "injected"
        loaderText.classList.add("fade-in")

        setTimeout(() => {
          menu.style.opacity = "0"
          menu.style.transform = "translate(-50%, -50%) scale(.9)"
          setTimeout(() => menu.remove(), 600)
        }, 2000)

      }, 3000)
    }, 400)
  }
})()
