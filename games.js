/* ------------------------------------------------------------------
   Playable game embeds.

   Each player is a <div class="game" data-src="..."> with a poster and
   a play button inside. We DON'T autoload the build (WebGL game builds
   are heavy) — the iframe is only created when the visitor clicks Play.

   data-src    : URL of the build's index.html OR an itch.io embed URL
   data-poster : (optional) cover image shown before play
   data-title  : (optional) accessible iframe title

   If data-src is empty, the player shows a "build coming soon" state.
------------------------------------------------------------------- */

function initGamePlayers() {
  document.querySelectorAll('.game').forEach((el) => {
    const src = el.getAttribute('data-src');
    const poster = el.querySelector('.game-poster');
    const playBtn = el.querySelector('.game-play');
    const posterImg = el.getAttribute('data-poster');

    if (poster && posterImg) {
      poster.style.backgroundImage = `url("${posterImg}")`;
    }

    // No build wired up yet — friendly empty state.
    if (!src) {
      el.classList.add('empty');
      if (playBtn) {
        playBtn.textContent = 'Build coming soon';
        playBtn.disabled = true;
      }
      return;
    }

    if (!playBtn) return;

    playBtn.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.title = el.getAttribute('data-title') || 'Playable game';
      iframe.allow =
        'autoplay; fullscreen; gamepad; microphone; xr-spatial-tracking';
      iframe.setAttribute('allowfullscreen', '');

      el.innerHTML = '';
      el.appendChild(iframe);

      const fs = document.createElement('button');
      fs.type = 'button';
      fs.className = 'game-fs';
      fs.textContent = '⤢ Fullscreen';
      fs.addEventListener('click', () => {
        const fn =
          el.requestFullscreen ||
          el.webkitRequestFullscreen ||
          el.msRequestFullscreen;
        if (fn) fn.call(el);
      });
      el.appendChild(fs);
    });
  });
}

document.addEventListener('DOMContentLoaded', initGamePlayers);
