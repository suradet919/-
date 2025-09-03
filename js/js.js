
  const noteChars = ["♪","♫","♩","♬","♭","♯"];
  const sky = document.getElementById('sky');

  function spawnNote() {
    const el = document.createElement('div');
    el.className = 'note';
    el.textContent = noteChars[Math.floor(Math.random() * noteChars.length)];

    const left = Math.random() * 100;
    const size = 18 + Math.random() * 36;
    const duration = 4 + Math.random() * 6;
    const hue = Math.floor(Math.random() * 360);

    el.style.left = `${left}vw`;
    el.style.fontSize = size + 'px';
    el.style.animationDuration = duration + 's';
    el.style.color = `hsl(${hue} 100% 55%)`;

    el.addEventListener('animationend', () => el.remove());
    sky.appendChild(el);
  }

  setInterval(spawnNote, 250);