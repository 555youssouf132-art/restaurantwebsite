const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  const data = {
    nom: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  fetch("http://localhost:3000/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(() => console.log("Contacts enregistrées !"));
});