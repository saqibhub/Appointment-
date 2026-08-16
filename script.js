let selectedDate = "";
let selectedPlace = "";

// Show screen
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Typewriter
function typeWriter() {
  const text = "You have this quiet kind of beauty that makes everything around you feel softer.";
  const el = document.getElementById('compliment-text');
  let i = 0;
  el.innerHTML = '';
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 35);
    }
  }
  type();
}

// Buttons
document.getElementById('next-to-invite').onclick = () => show('invite-screen');
document.getElementById('next-to-date').onclick = () => show('date-screen');
document.getElementById('maybe-btn').onclick = () => show('maybe-screen');
document.getElementById('back-from-maybe').onclick = () => show('invite-screen');

// Date select
document.getElementById('date-options').addEventListener('click', function(e) {
  if (e.target.classList.contains('option-btn')) {
    selectedDate = e.target.dataset.date;
    document.querySelectorAll('#date-options .option-btn').forEach(b => b.classList.remove('selected'));
    e.target.classList.add('selected');
    setTimeout(() => show('place-screen'), 300);
  }
});

// Place select
document.getElementById('place-options').addEventListener('click', function(e) {
  if (e.target.classList.contains('option-btn')) {
    selectedPlace = e.target.dataset.place;
    document.querySelectorAll('#place-options .option-btn').forEach(b => b.classList.remove('selected'));
    e.target.classList.add('selected');

    document.getElementById('chosen-date').innerText = selectedDate;
    document.getElementById('chosen-place').innerText = selectedPlace;

    setTimeout(() => show('final-screen'), 300);
  }
});

// WhatsApp Button
document.getElementById('finish-btn').onclick = function() {
  // 🔴 CHANGE THIS to your number (example: 919876543210)
  const number = "917409020802";

  const message = `Hey! I selected the coffee date ☕

📅 Date: ${selectedDate}
📍 Place: ${selectedPlace}`;

  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
};

// Start
typeWriter();