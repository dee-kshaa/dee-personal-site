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

// Personal artwork universe. The data file stays empty until Dee adds real
// images and verified titles; no procedural or stock art is created here.
(() => {
  const stage = document.querySelector('#universeGallery');
  const orbitLayer = document.querySelector('#orbitItems');
  const emptyState = document.querySelector('#universeEmpty');
  const starField = document.querySelector('#universeStars');
  const particleField = document.querySelector('#bhParticles');
  const dialog = document.querySelector('#artworkViewer');
  if (!stage || !orbitLayer || !dialog) return;

  const artworks = Array.isArray(window.artworks) ? window.artworks : [];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionOff = () => reduceMotion.matches;
  const system = document.querySelector('#blackHoleSystem');
  const seenIds = new Set();
  const validArtworks = artworks.filter((art) => {
    if (!art || !art.id || !art.src || !art.title || !art.category || seenIds.has(art.id)) return false;
    seenIds.add(art.id);
    return true;
  });
  const orbitState = [];
  let selected = null;
  let frame = 0;
  let lastTime = 0;

  const random = (min, max) => min + Math.random() * (max - min);

  function addAtmosphere() {
    const mobile = window.matchMedia('(max-width: 600px)').matches;
    const stars = mobile ? 28 : 72;
    const particles = mobile ? 7 : 18;
    for (let i = 0; i < stars; i += 1) {
      const star = document.createElement('i');
      star.className = 'universe-star';
      star.style.setProperty('--star-x', `${random(2, 98)}%`);
      star.style.setProperty('--star-y', `${random(3, 97)}%`);
      star.style.setProperty('--star-size', `${random(1, 2.4)}px`);
      star.style.setProperty('--star-delay', `${random(-4, 0)}s`);
      starField.append(star);
    }
    for (let i = 0; i < particles; i += 1) {
      const particle = document.createElement('i');
      particle.className = 'bh-particle';
      particle.style.setProperty('--particle-angle', `${(360 / particles) * i + random(-8, 8)}deg`);
      particle.style.setProperty('--particle-radius', `${random(70, 132)}px`);
      particle.style.setProperty('--particle-speed', `${random(5, 13)}s`);
      particle.style.setProperty('--particle-delay', `${random(-12, 0)}s`);
      particleField.append(particle);
    }
  }

  function makeCard(art, index) {
    const item = document.createElement('div');
    item.className = 'orbit-item';
    item.dataset.artworkId = art.id;
    const button = document.createElement('button');
    button.className = 'orbit-card';
    button.type = 'button';
    button.setAttribute('aria-label', `View ${art.title}, ${art.category}`);
    const frame = document.createElement('span');
    frame.className = 'orbit-image';
    const image = document.createElement('img');
    image.src = art.src;
    image.alt = art.alt || `${art.title}, ${art.category} artwork`;
    image.loading = 'eager';
    image.decoding = 'async';
    image.addEventListener('error', () => {
      image.remove();
      const missing = document.createElement('span');
      missing.className = 'orbit-image-missing';
      missing.textContent = 'Image missing';
      frame.append(missing);
      button.disabled = true;
      button.setAttribute('aria-label', `${art.title}: image could not be loaded`);
    }, { once: true });
    frame.append(image);
    const label = document.createElement('span');
    label.className = 'orbit-label';
    const title = document.createElement('span');
    title.className = 'orbit-title';
    title.textContent = art.title;
    const category = document.createElement('span');
    category.className = 'orbit-category';
    category.textContent = art.category;
    label.append(title, category);
    button.append(frame, label);
    item.append(button);
    button.addEventListener('click', () => openArtwork(art, item, button));
    orbitLayer.append(item);
    return { item, button, angle: (index * 137.508) % 360, speed: (index % 2 ? -1 : 1) * random(4.5, 10) };
  }

  function placeOrbits() {
    if (!orbitState.length) return;
    const width = stage.clientWidth;
    const height = stage.clientHeight;
    const compact = window.matchMedia('(max-width: 600px)').matches;
    const card = compact ? 96 : 158;
    const maxRadius = Math.max(48, Math.min(width * 0.47 - card * 0.52, height * 0.44 - card * 0.52));
    const radii = [maxRadius * 0.58, maxRadius * 0.8, maxRadius];
    const perRing = [0, 0, 0];
    orbitState.forEach((orbit, index) => {
      const ring = index % radii.length;
      const slot = perRing[ring]++;
      const count = Math.ceil((orbitState.length - ring) / radii.length);
      orbit.angle = slot * (360 / count) + ring * 37;
      orbit.radius = radii[ring];
    });
    if (motionOff()) paintOrbits(0);
  }

  function paintOrbits(dt) {
    orbitState.forEach((orbit) => {
      if (dt) orbit.angle = (orbit.angle + orbit.speed * dt + 360) % 360;
      const radians = orbit.angle * Math.PI / 180;
      const x = Math.cos(radians) * orbit.radius;
      const y = Math.sin(radians) * orbit.radius * 0.82;
      const depth = 0.66 + ((Math.sin(radians) + 1) / 2) * 0.34;
      orbit.item.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      orbit.item.style.setProperty('--depth', depth.toFixed(3));
      orbit.item.style.zIndex = String(Math.round(depth * 100));
    });
  }

  function animate(now) {
    if (motionOff() || dialog.open) { frame = 0; return; }
    if (lastTime) paintOrbits(Math.min((now - lastTime) / 1000, 0.05));
    lastTime = now;
    frame = requestAnimationFrame(animate);
  }

  function startMotion() {
    if (orbitState.length && !motionOff() && !frame) {
      lastTime = 0;
      frame = requestAnimationFrame(animate);
    }
  }

  function openArtwork(art, item, button) {
    selected = button;
    cancelAnimationFrame(frame);
    frame = 0;
    system.classList.add('is-paused');
    item.classList.add('is-focused');
    item.style.transform = 'translate3d(0, 0, 0) translate(-50%, -50%)';
    document.querySelector('#viewerImage').src = art.src;
    document.querySelector('#viewerImage').alt = art.alt || `${art.title}, ${art.category} artwork`;
    document.querySelector('#viewerTitle').textContent = art.title;
    document.querySelector('#viewerCategory').textContent = art.category;
    const description = document.querySelector('#viewerDescription');
    description.textContent = art.description || '';
    description.hidden = !art.description;
    const attribution = document.querySelector('#viewerAttribution');
    attribution.textContent = art.attribution ? `Image: ${art.attribution}` : '';
    attribution.hidden = !art.attribution;
    window.setTimeout(() => {
      if (dialog.isConnected && !dialog.open) dialog.showModal();
    }, motionOff() ? 0 : 260);
  }

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    orbitLayer.querySelector('.is-focused')?.classList.remove('is-focused');
    system.classList.remove('is-paused');
    if (selected?.isConnected) selected.focus({ preventScroll: true });
    selected = null;
    if (motionOff()) paintOrbits(0);
    else startMotion();
  });
  reduceMotion.addEventListener('change', () => {
    if (motionOff()) {
      cancelAnimationFrame(frame);
      frame = 0;
      paintOrbits(0);
    } else startMotion();
  });

  addAtmosphere();
  validArtworks.forEach((art, index) => orbitState.push(makeCard(art, index)));
  emptyState.hidden = validArtworks.length > 0;
  if (validArtworks.length) {
    stage.classList.add('has-artworks');
    placeOrbits();
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(placeOrbits);
      observer.observe(stage);
    } else window.addEventListener('resize', placeOrbits, { passive: true });
    startMotion();
  }
})();
