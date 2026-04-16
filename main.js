// ============================================
// sf-sys | minimal interactivity
// ============================================

(function () {
‘use strict’;

// Sticky header shadow on scroll
const header = document.querySelector(’.site-header’);
if (header) {
const onScroll = () => {
if (window.scrollY > 8) {
header.classList.add(‘scrolled’);
} else {
header.classList.remove(‘scrolled’);
}
};
window.addEventListener(‘scroll’, onScroll, { passive: true });
onScroll();
}

// Mobile nav toggle
const toggle = document.querySelector(’.nav-toggle’);
const navLinks = document.querySelector(’.nav-links’);
if (toggle && navLinks) {
toggle.addEventListener(‘click’, () => {
navLinks.classList.toggle(‘open’);
});
// Close menu after tapping a link
navLinks.querySelectorAll(‘a’).forEach((a) => {
a.addEventListener(‘click’, () => navLinks.classList.remove(‘open’));
});
}

// FAQ accordion
document.querySelectorAll(’.faq-item’).forEach((item) => {
const q = item.querySelector(’.faq-q’);
if (!q) return;
q.addEventListener(‘click’, () => {
const wasOpen = item.classList.contains(‘open’);
// close siblings
item.parentElement.querySelectorAll(’.faq-item.open’).forEach((o) => {
o.classList.remove(‘open’);
});
if (!wasOpen) item.classList.add(‘open’);
});
});

// Simple form stub — prevents navigation, shows confirmation
document.querySelectorAll(‘form[data-stub]’).forEach((form) => {
form.addEventListener(‘submit’, (e) => {
e.preventDefault();
const note = form.querySelector(’.form-confirmation’);
if (note) note.hidden = false;
form.reset();
});
});
})();