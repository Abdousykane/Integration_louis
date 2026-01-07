console.log("TP7 Loaded - Canvas");

document.addEventListener('DOMContentLoaded', function() {
    


    // =======================================================
    // EXERCICE 2 : PACMAN (Votre fonction exacte)
    // =======================================================
    const canvasPac = document.getElementById('canvas_pacman');
    if (canvasPac) {
        const ctxPac = canvasPac.getContext('2d');
        const W_Pac = canvasPac.width;
        const H_Pac = canvasPac.height;

        // Fonction fournie par vos soins
        function drawPacManStatic(ctx, W, H) {
    const centerX = W / 2;
    const centerY = H / 2;
    const radius = 100;
    
    const mouthOpenAngle = -0.070; 
    
    const startAngle = (0.25 + mouthOpenAngle) * Math.PI; 
    const endAngle = (1.75 - mouthOpenAngle) * Math.PI;   

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
    ctx.lineTo(centerX, centerY); 
    ctx.fillStyle = '#FFD700'; 
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(centerX + 0, centerY - 50, 15, 0, Math.PI * 2, false);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    const eyeRadius = 8; 
    const reflectionRadius = 5; 
    const eyeX = centerX + 3; 
    const eyeY = centerY - 50; 

    const reflectionX = eyeX + 2; 
    const reflectionY = eyeY - 2; 

    ctx.arc(reflectionX, reflectionY, reflectionRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
    
    const pillRadius = 14;
    ctx.fillStyle = 'white';
    
    ctx.beginPath();
    ctx.arc(centerX + radius + 0, centerY, pillRadius, 0, Math.PI * 2, false);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(centerX + radius + 70, centerY, pillRadius, 0, Math.PI * 2, false);
    ctx.fill();
}

        // Appel de la fonction
        drawPacManStatic(ctxPac, W_Pac, H_Pac);
    }

    // =======================================================
    // EXERCICE 4 : LA FLEUR (Fidèle à script.js)
    // =======================================================
    const cvsF1 = document.getElementById('canvas1');
    const cvsF2 = document.getElementById('canvas2');
    const cvsF3 = document.getElementById('canvas3');

    if (cvsF1 && cvsF2 && cvsF3) {
        const ctx1 = cvsF1.getContext('2d');
        const ctx2 = cvsF2.getContext('2d');
        const ctx3 = cvsF3.getContext('2d');

        const FILL_COLOR = "#EE66CC"; 
        const STROKE_COLOR = "#00FFFF"; 

        function dessinerPetale(ctx, longueur, largeur) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(longueur * 0.3, -largeur * 0.1, longueur * 0.9, -largeur, longueur, 0);
            ctx.bezierCurveTo(longueur * 0.9, largeur, longueur * 0.3, largeur * 0.1, 0, 0);
            ctx.closePath();
            ctx.fillStyle = FILL_COLOR;
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = STROKE_COLOR;
            ctx.stroke();
        }

        function dessinerFleur(ctx, x, y, nbPetales, rayon) {
            ctx.save();
            ctx.translate(x, y);
            for (let i = 0; i < nbPetales; i++) {
                let angle = (Math.PI * 2) / nbPetales;
                ctx.rotate(angle);
                dessinerPetale(ctx, rayon, 45); 
            }
            ctx.beginPath();
            ctx.arc(0, 0, 15, 0, Math.PI * 2);
            ctx.fillStyle = "#FFFF00";
            ctx.fill();
            ctx.restore();
        }

        // Canvas 1 : Pétale
        ctx1.save();
        ctx1.translate(50, 150); 
        dessinerPetale(ctx1, 150, 50);
        ctx1.restore();

        // Canvas 2 : Fleur
        dessinerFleur(ctx2, 150, 150, 8, 100);

        // Canvas 3 : Animation
        let angleRot = 0;
        function animer() {
            ctx3.clearRect(0, 0, 300, 300);
            ctx3.save();
            ctx3.translate(150, 150);
            ctx3.rotate(angleRot);
            ctx3.translate(-150, -150);
            dessinerFleur(ctx3, 150, 150, 8, 100);
            ctx3.restore();
            angleRot += 0.01;
            requestAnimationFrame(animer);
        }
        animer();
    }
});