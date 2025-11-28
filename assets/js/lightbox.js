document.querySelectorAll('.menu-img').forEach(img => {

  // Ajouter un curseur "clic"
  img.style.cursor = "pointer";

  img.addEventListener('click', function () {

    // Création de l’overlay
    const overlay = document.createElement('div');
    overlay.classList.add('menu-lightbox-overlay');

    // Ajout de l’image zoomée
    const zoomImg = document.createElement('img');
    zoomImg.src = this.src;

    overlay.appendChild(zoomImg);
    document.body.appendChild(overlay);

    // Activation avec petite temporisation pour l’animation
    setTimeout(() => overlay.classList.add('active'), 10);

    // Fermeture au clic
    overlay.addEventListener('click', () => {
      overlay.classList.remove('active');
      setTimeout(() => overlay.remove(), 300);
    });
  });
});
