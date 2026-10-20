'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('open', !expanded);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('open');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
const topButton = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  topButton.classList.toggle('visible', window.scrollY > 650);
}, { passive: true });
topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const companion = document.querySelector('#siteCompanion');
const companionButton = document.querySelector('#companionButton');
const companionSpeech = document.querySelector('#companionSpeech');
if (companion && companionButton && companionSpeech) {
  const greetings = ['Hi, explorer!', 'Ready for another orbit?', 'You found my star!'];
  let greetingIndex = 0;
  let companionTimer;
  companionButton.addEventListener('click', () => {
    companion.classList.remove('is-waving');
    void companion.offsetWidth;
    companion.classList.add('is-waving');
    companionSpeech.textContent = greetings[greetingIndex % greetings.length];
    greetingIndex += 1;
    companionSpeech.hidden = false;
    window.clearTimeout(companionTimer);
    companionTimer = window.setTimeout(() => {
      companion.classList.remove('is-waving');
      companionSpeech.hidden = true;
    }, 2600);
  });
}

// Data-driven research universe. Orbital coordinates and guide paths share one model.
(() => {
  const stage = document.querySelector('#universeGallery');
  const orbitLayer = document.querySelector('#orbitItems');
  const starField = document.querySelector('#universeStars');
  const particleField = document.querySelector('#bhParticles');
  const dialog = document.querySelector('#universeViewer');
  if (!stage || !orbitLayer || !dialog) return;

  const source = window.universeItems || {};
  const categories = ['research', 'projects', 'repositories'];
  const labels = { research: 'Research', projects: 'Project', repositories: 'Repository' };
  const colors = { research: '#8cecff', projects: '#559cff', repositories: '#bd9aff' };
  const entries = categories.flatMap((category) => Array.isArray(source[category]) ? source[category]
    .filter((entry) => entry && entry.id && entry.title && entry.description && entry.category === category)
    .map((entry) => ({ ...entry, category })) : []);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const system = document.querySelector('#blackHoleSystem');
  const assembly = document.querySelector('#universeOrbitAssembly');
  const modalLink = document.querySelector('#viewerLink');
  const orbitState = [];
  let selectedButton = null;
  let frame = 0;
  let lastTime = 0;
  let geometry = null;
  const random = (min, max) => min + Math.random() * (max - min);

  function addAtmosphere() {
    const mobile = window.matchMedia('(max-width: 600px)').matches;
    for (let i = 0; i < (mobile ? 28 : 72); i += 1) {
      const star = document.createElement('i');
      star.className = 'universe-star';
      star.style.setProperty('--star-x', `${random(2, 98)}%`);
      star.style.setProperty('--star-y', `${random(3, 97)}%`);
      star.style.setProperty('--star-size', `${random(1, 2.4)}px`);
      star.style.setProperty('--star-delay', `${random(-4, 0)}s`);
      starField.append(star);
    }
    const particleCount = mobile ? 7 : 18;
    for (let i = 0; i < particleCount; i += 1) {
      const particle = document.createElement('i');
      particle.className = 'bh-particle';
      particle.style.setProperty('--particle-angle', `${360 / particleCount * i}deg`);
      particle.style.setProperty('--particle-radius', `${random(70, 132)}px`);
      particle.style.setProperty('--particle-speed', `${random(5, 13)}s`);
      particle.style.setProperty('--particle-delay', `${random(-12, 0)}s`);
      particleField.append(particle);
    }
  }

  function openEntry(entry, item, button) {
    selectedButton = button;
    cancelAnimationFrame(frame); frame = 0;
    system.classList.add('is-paused');
    assembly?.classList.add('is-paused');
    item.classList.add('is-focused');
    document.querySelector('#viewerCategory').textContent = labels[entry.category];
    document.querySelector('#viewerTitle').textContent = entry.title;
    document.querySelector('#viewerDescription').textContent = entry.description;
    const metadata = document.querySelector('#viewerMetadata');
    metadata.replaceChildren();
    [['Status', entry.status], ['Contribution', entry.contribution], ['Venue / topic', entry.venue || entry.topic], ['Technologies', entry.technologies?.join(' · ')], ['Authors', entry.authors], ['Source note', entry.sourceNote]]
      .filter(([, value]) => value).forEach(([label, value]) => {
        const dt = document.createElement('dt'); dt.textContent = label;
        const dd = document.createElement('dd'); dd.textContent = value;
        metadata.append(dt, dd);
      });
    if (entry.url && /^https:\/\//.test(entry.url)) {
      modalLink.href = entry.url;
      modalLink.hidden = false;
      modalLink.textContent = entry.linkLabel || `Open ${labels[entry.category].toLowerCase()} source ↗`;
    } else modalLink.hidden = true;
    dialog.showModal();
  }

  function makeCard(entry) {
    const item = document.createElement('div');
    item.className = `orbit-item category-${entry.category}`;
    const button = document.createElement('button');
    button.className = 'orbit-card'; button.type = 'button';
    button.setAttribute('aria-label', `${entry.title}, ${labels[entry.category]}`);
    const satellite = document.createElement('span'); satellite.className = 'orbit-satellite'; satellite.setAttribute('aria-hidden', 'true');
    const title = document.createElement('span'); title.className = 'orbit-title'; title.textContent = entry.orbitTitle || entry.title;
    button.append(satellite, title); item.append(button); orbitLayer.append(item);
    button.addEventListener('click', () => openEntry(entry, item, button));
    return { item, button, entry, angle: 0, speed: entry.category === 'research' ? .035 : entry.category === 'projects' ? -.026 : .02, rx: 0, ry: 0 };
  }

  function placeOrbits() {
    const width = stage.clientWidth, height = stage.clientHeight;
    const satelliteSize = window.matchMedia('(max-width: 600px)').matches ? 18 : 20;
    const maxRx = Math.max(24, (width - satelliteSize - 36) / 2);
    const maxRy = Math.max(24, (height - satelliteSize - 72) / 2);
    const maxRadius = Math.min(maxRx, maxRy / .98);
    const coreRadius = system.clientWidth * .205;
    const itemHalfDiagonal = Math.hypot(satelliteSize / 2, satelliteSize / 2);
    const coreClearance = coreRadius + itemHalfDiagonal + 14;
    const scale = { research: .52, projects: .76, repositories: 1 };
    geometry = {};
    categories.forEach((category, i) => {
      const ringScale = scale[category];
      const rx = Math.min(maxRx, Math.max(coreClearance, maxRadius * ringScale));
      const ry = Math.min(maxRy, Math.max(coreClearance, maxRadius * ringScale * .98));
      geometry[category] = { rx, ry };
      const guide = stage.querySelector(`.orbit-guides i:nth-child(${i + 1})`);
      guide.style.width = `${rx * 2}px`; guide.style.height = `${ry * 2}px`;
      guide.style.setProperty('--orbit-color', colors[category]);
    });
    categories.forEach((category) => {
      const group = orbitState.filter((orbit) => orbit.entry.category === category);
      group.forEach((orbit, index) => {
        const { rx, ry } = geometry[category];
        orbit.rx = rx; orbit.ry = ry;
        orbit.angle = (2 * Math.PI * index) / group.length;
      });
    });
    distributeInitialAngles();
    paintOrbits(0);
  }

  function positionFor(orbit, angle = orbit.angle) {
    return {
      x: stage.clientWidth / 2 + orbit.rx * Math.cos(angle),
      y: stage.clientHeight / 2 + orbit.ry * Math.sin(angle)
    };
  }

  function overlapCost(a, b) {
    const pointA = positionFor(a), pointB = positionFor(b);
    const overlapX = (a.item.offsetWidth + b.item.offsetWidth) / 2 + 8 - Math.abs(pointA.x - pointB.x);
    const overlapY = (a.item.offsetHeight + b.item.offsetHeight) / 2 + 8 - Math.abs(pointA.y - pointB.y);
    return overlapX > 0 && overlapY > 0 ? 1000 + overlapX * overlapY : 0;
  }

  function overlaps(a, b) { return overlapCost(a, b) > 0; }

  function distributeInitialAngles() {
    const positioned = [];
    categories.forEach((category) => {
      const group = orbitState.filter((orbit) => orbit.entry.category === category);
      let best = { phase: 0, cost: Infinity };
      for (let step = 0; step < 72; step += 1) {
        const phase = (2 * Math.PI * step) / 72;
        group.forEach((orbit, index) => { orbit.angle = (2 * Math.PI * index) / group.length + phase; });
        let cost = 0;
        group.forEach((orbit, index) => {
          positioned.forEach((other) => { cost += overlapCost(orbit, other); });
          group.slice(0, index).forEach((other) => { cost += overlapCost(orbit, other); });
        });
        if (cost < best.cost) best = { phase, cost };
        if (cost === 0) break;
      }
      group.forEach((orbit, index) => { orbit.angle = (2 * Math.PI * index) / group.length + best.phase; });
      positioned.push(...group);
    });
  }

  function paintOrbits(dt) {
    const previousAngles = orbitState.map((orbit) => orbit.angle);
    if (dt) orbitState.forEach((orbit) => {
      orbit.angle = (orbit.angle + orbit.speed * dt + Math.PI * 2) % (Math.PI * 2);
    });
    // Keep each card on its ellipse while holding a step that would collide.
    for (let pass = 0; pass < orbitState.length; pass += 1) {
      let reverted = false;
      for (let first = 0; first < orbitState.length; first += 1) {
        for (let second = first + 1; second < orbitState.length; second += 1) {
          const a = orbitState[first], b = orbitState[second];
          if (!overlaps(a, b)) continue;
          const movedA = Math.abs(Math.atan2(Math.sin(a.angle - previousAngles[first]), Math.cos(a.angle - previousAngles[first]))) > 1e-9;
          const movedB = Math.abs(Math.atan2(Math.sin(b.angle - previousAngles[second]), Math.cos(b.angle - previousAngles[second]))) > 1e-9;
          const held = !movedA ? b : !movedB ? a : Math.abs(a.speed) < Math.abs(b.speed) ? a : b;
          held.angle = previousAngles[orbitState.indexOf(held)];
          reverted = true;
        }
      }
      if (!reverted) break;
    }
    orbitState.forEach((orbit) => {
      const x = orbit.rx * Math.cos(orbit.angle);
      const y = orbit.ry * Math.sin(orbit.angle);
      const depth = .72 + .28 * ((Math.sin(orbit.angle) + 1) / 2);
      orbit.item.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      orbit.item.style.setProperty('--depth', depth.toFixed(3));
      orbit.item.style.zIndex = String(Math.round(depth * 100));
      const point = positionFor(orbit);
      orbit.item.dataset.tooltipX = point.x < stage.clientWidth * .4 ? 'right' : point.x > stage.clientWidth * .6 ? 'left' : 'center';
      orbit.item.dataset.tooltipY = point.y < stage.clientHeight * .35 ? 'below' : 'above';
    });
  }

  function animate(now) {
    if (document.hidden || reduceMotion.matches || dialog.open) { frame = 0; return; }
    if (lastTime) paintOrbits(Math.min((now - lastTime) / 1000, .05));
    lastTime = now; frame = requestAnimationFrame(animate);
  }
  function startMotion() {
    if (!document.hidden && !reduceMotion.matches && orbitState.length && !frame && !dialog.open) {
      lastTime = 0; frame = requestAnimationFrame(animate);
    }
  }

  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    orbitLayer.querySelector('.is-focused')?.classList.remove('is-focused');
    system.classList.remove('is-paused');
    assembly?.classList.remove('is-paused');
    selectedButton?.focus({ preventScroll: true }); selectedButton = null;
    startMotion();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
    else startMotion();
  });
  reduceMotion.addEventListener('change', () => {
    if (reduceMotion.matches) { cancelAnimationFrame(frame); frame = 0; paintOrbits(0); }
    else startMotion();
  });

  addAtmosphere();
  entries.forEach((entry) => orbitState.push(makeCard(entry)));
  placeOrbits();
  if ('ResizeObserver' in window) new ResizeObserver(placeOrbits).observe(stage);
  else window.addEventListener('resize', placeOrbits, { passive: true });
  startMotion();
})();
