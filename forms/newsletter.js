const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  const data = {
    email: document.getElementById("email").value
  };

  fetch("http://localhost:3000/newsletters", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(() => console.log("Newsletters enregistrées !"));
});