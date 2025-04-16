document.addEventListener('DOMContentLoaded', function() {
  const revealBtn = document.getElementById('revealBtn');
  const preSurprise = document.getElementById('preSurprise');
  const surpriseContent = document.getElementById('surpriseContent');
  const heartsContainer = document.getElementById('heartsContainer');
  const musicBtn = document.getElementById('musicBtn');
  const romanticMusic = document.getElementById('romanticMusic');
  let musicPlaying = false;
  
  // Révéler la surprise
  revealBtn.addEventListener('click', function() {
    // Animation de disparition
    preSurprise.style.opacity = '0';
    preSurprise.style.transform = 'scale(0.9)';
    
    // Après l'animation, cacher et montrer le contenu
    setTimeout(() => {
      preSurprise.style.display = 'none';
      surpriseContent.style.display = 'block';
      
      // Animation d'apparition
      setTimeout(() => {
        surpriseContent.style.opacity = '1';
        createHearts();
      }, 100);
    }, 1000);
  });
  
  // Créer des cœurs flottants
  function createHearts() {
    const heartColors = ['#e91e63', '#ff5722', '#2196F3', '#4CAF50', '#9C27B0'];
    
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      
      // Position aléatoire
      heart.style.left = Math.random() * 100 + 'vw';
      
      // Taille aléatoire
      const size = Math.random() * 30 + 20;
      heart.style.fontSize = size + 'px';
      
      // Couleur aléatoire
      const colorIndex = Math.floor(Math.random() * heartColors.length);
      heart.style.color = heartColors[colorIndex];
      
      // Animation avec durée et délai aléatoires
      const duration = Math.random() * 4 + 4;
      heart.style.animationDuration = duration + 's';
      heart.style.animationDelay = Math.random() * 5 + 's';
      
      heartsContainer.appendChild(heart);
    }
  }
  
  // Bouton musique
  musicBtn.addEventListener('click', function() {
    if (musicPlaying) {
      romanticMusic.pause();
      musicBtn.textContent = '♫ Musique romantique';
    } else {
      romanticMusic.play();
      musicBtn.textContent = '⏸ Pause musique';
    }
    musicPlaying = !musicPlaying;
  });
  
  // Bouton souvenirs (à personnaliser)
  document.getElementById('memoryBtn').addEventListener('click', function() {
    alert("Cette fonctionnalité peut être développée pour afficher vos souvenirs spéciaux avec Nancy!");
  });
});
