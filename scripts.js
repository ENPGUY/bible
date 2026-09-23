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

async function addFavorite(verseId) {

    const {
        data: { user }
    } = await db.auth.getUser();

    if (!user) {
        alert("로그인이 필요합니다.");
        return;
    }

    const { error } = await db
        .from("favorites")
        .insert({
            user_id: user.id,
            verse_id: verseId
        });

    if (error) {
        console.error(error);
        return;
    }

    alert("말씀을 저장했습니다.");
}
