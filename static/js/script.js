// Script pour la page d'accueil 

// Fonction pour mettre à jour l'horloge
function updateClock() {
    const now = new Date();
    
    // Formater l'heure (HH:MM:SS)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Formater la date (Jour de la semaine, Jour Mois Année)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('fr-FR', options);
    
    // Mettre à jour l'affichage
    const clockTime = document.getElementById('clock-time');
    const clockDate = document.getElementById('clock-date');
    
    if (clockTime) clockTime.textContent = timeString;
    if (clockDate) clockDate.textContent = dateString.charAt(0).toUpperCase() + dateString.slice(1);
}

// Mettre à jour l'horloge immédiatement et toutes les secondes
updateClock();
setInterval(updateClock, 1000)