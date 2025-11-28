const monForm = document.getElementById('monForm');

monForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  const data = {
    nom: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    people: document.getElementById("people").value,
    message: document.getElementById("message").value
  };

  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(() => console.log("Données enregistrées !"));
});


