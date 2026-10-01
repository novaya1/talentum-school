const video = document.querySelector('.hero-video');
const toggle = document.querySelector('.video-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function syncButton() {
 toggle.textContent = video.paused ? 'Включить фон' : 'Приостановить фон';
 toggle.setAttribute('aria-pressed', String(video.paused));
}
video.muted = true;
if (reducedMotion.matches) { video.autoplay = false; video.pause(); }
video.addEventListener('play', syncButton);
video.addEventListener('pause', syncButton);
video.addEventListener('error', () => { video.hidden = true; toggle.hidden = true; });
toggle.addEventListener('click', () => {
 if (video.paused) video.play().catch(syncButton); else video.pause();
});
reducedMotion.addEventListener('change', e => { if (e.matches) video.pause(); });
syncButton();
