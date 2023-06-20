// Obtention des éléments nécessaires
const languageLinks = document.querySelectorAll(".language-link");
const greeting = document.getElementById("greeting");

// Fonction de changement de langue
function changeLanguage(event) {
  event.preventDefault();
  const selectedLanguage = this.getAttribute("data-lang");

  // Suppression de la classe active de tous les liens
  languageLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Ajout de la classe active au lien sélectionné
  this.classList.add("active");
}

// Ajout d'un écouteur d'événement à chaque lien de langue
languageLinks.forEach((link) => {
  link.addEventListener("click", changeLanguage);
});
