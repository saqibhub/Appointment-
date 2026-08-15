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

// ===== Particles =====
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

// ===== Typewriter for compliments =====
const compliments = [
  "You have this quiet kind of beauty that makes everything around you feel softer.",
  "There’s something about your smile that feels like home.",
  "You make ordinary moments feel a little more special."
];

let currentCompliment = 0;
const complimentEl = document.getElementById('compliment-text');

function typeCompliment() {
  const text = compliments[currentCompliment];
  let i = 0;
  complimentEl.textContent = '';
  
  function type() {
    if (i < text.length) {
      complimentEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, 32 + Math.random() * 25);
    }
  }
  type();
}

// ===== Screen switch =====
function show(screenName) {
  Object.values(screens).forEach(s => s.classList.add('hidden'));
  screens[screenName].classList.remove('hidden');
}

// ===== Events =====
document.getElementById('next-to-invite').addEventListener('click', () => {
  show('invite');
});

document.getElementById('next-to-date').addEventListener('click', () => {
  show('date');
});

document.getElementById('maybe-btn').addEventListener('click', () => {
  show('maybe');
});

document.getElementById('back-from-maybe').addEventListener('click', () => {
  show('invite');
});

// Date selection
document.getElementById('date-options').addEventListener('click', (e) => {
  if (e.target.classList.contains('option-btn')) {
    document.querySelectorAll('#date-options .option-btn').forEach(b => b.classList.remove('selected'));
    e.target.classList.add('selected');
    selectedDate = e.target.dataset.date;

    setTimeout(() => {
      show('place');
    }, 400);
  }
});

// Place selection
document.getElementById('place-options').addEventListener('click', (e) => {
  if (e.target.classList.contains('option-btn')) {
    document.querySelectorAll('#place-options .option-btn').forEach(b => b.classList.remove('selected'));
    e.target.classList.add('selected');
    selectedPlace = e.target.dataset.place;

    document.getElementById('chosen-date').textContent = selectedDate;
    document.getElementById('chosen-place').textContent = selectedPlace;

    setTimeout(() => {
      show('final');
    }, 400);
  }
});

document.getElementById('finish-btn').addEventListener('click', () => {
  // You can add more later (like confetti)
  alert("Thank you ☕ Looking forward to our coffee date!");
});

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  typeCompliment();
});