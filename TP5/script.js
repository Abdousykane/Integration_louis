function toHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function updateBackgroundColor() {
    
    const scrollableElement = document.getElementById('exo2_scrollable_content');

    if (!scrollableElement) return;

    const scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
    const scrollTop = scrollableElement.scrollTop;
    
    let scrollProgress = 0;
    if (scrollHeight > 0) {
        scrollProgress = scrollTop / scrollHeight;
    }
    
    // Borner entre 0 et 1
    scrollProgress = Math.max(0, Math.min(1, scrollProgress)); 

    // Calcul du rouge (0 à 255)
    const redValue = Math.round(255 * scrollProgress); 
    
    // Couleur finale : Rouge variable, Vert 00, Bleu 00
    const newColor = `#${toHex(redValue)}0000`; 

    scrollableElement.style.backgroundColor = newColor;
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    const scrollableContent = document.getElementById('exo2_scrollable_content');

    if (scrollableContent) {
        scrollableContent.addEventListener('scroll', updateBackgroundColor);
        // Appel initial pour caler la couleur si la page est rechargée scrollée
        updateBackgroundColor();
    }
});