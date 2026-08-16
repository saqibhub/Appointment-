const screens = {
  compliment: document.getElementById('compliment-screen'),
  invite: document.getElementById('invite-screen'),
  date: document.getElementById('date-screen'),
  place: document.getElementById('place-screen'),
  final: document.getElementById('final-screen'),
  maybe: document.getElementById('maybe-screen')
};

let selectedDate = '';
let selectedPlace = '';

// Particles
function createParticles() {
  const symbols = ['☕', '♡', '✦', '·'];
  const container = document.getElementById('particles');
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 9 + 's';
    p.style.animationDuration = 7 + Math.random() * 5 + 's';
    p.style.fontSize = 0.7 + Math.random() * 0.5 + 'rem';
    container.appendChild(p);
  }
}

// Typewriter
const compliments = [
  "You have this quiet kind of beauty that makes everything around you feel softer.",
  "There’s something about your smile that feels like home.",
  "You make ordinary moments feel a little more special."
];

function typeCompliment() {
  const text = compliments[0];
  let i = 0;
  const el = document.getElementById('compliment-text');
  el.textContent = '';

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 35);
    }
  }
  type();
}

function show(screenName) {
  Object.values(screens).forEach(s => s.classList.add('hidden'));
  screens[screenName].classList.remove('hidden');
}

// Buttons
document.getElementById('next-to-invite').addEventListener('click', () => show('invite'));
document.getElementById('next-to-date').addEventListener('click', () => show('date'));
document.getElementById('maybe-btn').addEventListener('click', () => show('maybe'));
document.getElementById('back-from-maybe').addEventListener('click', () => show('invite'));

// Date select
document.getElementById('date-options').addEventListener('click', function(e) {
  if (e.target.classList.contains('option-btn')) {
    selectedDate = e.target.dataset.date;
    document.querySelectorAll('#date-options .option-btn').forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    setTimeout(() => show('place'), 300);
  }
});

// Place select
document.getElementById('place-options').addEventListener('click', function(e) {
  if (e.target.classList.contains('option-btn')) {
    selectedPlace = e.target.dataset.place;
    document.querySelectorAll('#place-options .option-btn').forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');

    document.getElementById('chosen-date').textContent = selectedDate;
    document.getElementById('chosen-place').textContent = selectedPlace;

    setTimeout(() => show('final'), 300);
  }
});

// ========== WhatsApp Button ==========
document.getElementById('finish-btn').addEventListener('click', function() {

  // 🔴 CHANGE THIS NUMBER
  const myNumber = "917409020802";   // ← Put your number here (example: 919876543210)

  const text = `Hey! I selected the coffee date ☕

📅 Date: ${selectedDate}
📍 Place: ${selectedPlace}`;

  const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`;

  // Open WhatsApp
  window.open(url, '_blank');
});

// Start
document.addEventListener('DOMContentLoaded', function() {
  createParticles();
  typeCompliment();
});