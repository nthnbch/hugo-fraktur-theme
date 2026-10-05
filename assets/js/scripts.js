var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-menu-main-mobile');
var menuContainer = document.querySelector('#menu-main-mobile');
var hamburgerIcon = document.querySelector('.hamburger');

if (menuTrigger !== null) {
  menuTrigger.addEventListener('click', function(e) {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  });
}

// ── Theme switcher (Light / Dark) ───────────────────────────
var themeToggle = document.querySelector('#theme-toggle');
if (themeToggle !== null) {
  themeToggle.addEventListener('click', function() {
    var currentTheme = document.documentElement.getAttribute('data-theme');
    var isDark = currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var targetTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  });
}

