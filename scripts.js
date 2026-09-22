let verses = [];

async function loadVerses() {
  const response = await fetch("./data/verses.json");
  verses = await response.json();

  showRandomVerse();
}

function showRandomVerse() {
  if (verses.length === 0) return;

  const randomIndex = Math.floor(Math.random() * verses.length);
  const selected = verses[randomIndex];

  document.getElementById("verse").innerText = selected.text;
  document.getElementById("reference").innerText = selected.reference;
  document.getElementById("category").innerText = selected.category;
  document.getElementById("description").innerText = selected.description;
}

loadVerses();
