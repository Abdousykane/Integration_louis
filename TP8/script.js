console.log("TP8 Loaded - Canvas & Sprites");

document.addEventListener('DOMContentLoaded', function() {


    const area = document.getElementById('canvas-area');
    if (area) {
        area.addEventListener('click', (e) => {
            const goutte = document.createElement('div');
            goutte.className = 'goutte';


            const rect = area.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            goutte.style.left = x + 'px';
            goutte.style.top = y + 'px';

            area.appendChild(goutte);

  
            setTimeout(() => goutte.remove(), 1000);
        });
    }



    const ex4Canvas = document.getElementById('imageCanvas');
    if (ex4Canvas) {
        const ctx4 = ex4Canvas.getContext('2d');
        const colorDisplay = document.getElementById('colorDisplay');
        const rVal = document.getElementById('r-val');
        const gVal = document.getElementById('g-val');
        const bVal = document.getElementById('b-val');


        const img4 = new Image();
        img4.crossOrigin = "Anonymous";
        img4.src = 'https://picsum.photos/400/300?random=1';

        img4.onload = () => {
            ex4Canvas.width = 400;
            ex4Canvas.height = 300;
            ctx4.drawImage(img4, 0, 0, 400, 300);
        };

        ex4Canvas.addEventListener('click', (e) => {
            const rect = ex4Canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

         
            const pixelData = ctx4.getImageData(x, y, 1, 1).data; 
            const r = pixelData[0];
            const g = pixelData[1];
            const b = pixelData[2];

     
            const rgbColor = `rgb(${r}, ${g}, ${b})`;
            colorDisplay.style.backgroundColor = rgbColor;
            
            if(rVal) rVal.textContent = r;
            if(gVal) gVal.textContent = g;
            if(bVal) bVal.textContent = b;
        });
    }


    const mainCanvas = document.getElementById('mainCanvas');
    const magnifierCanvas = document.getElementById('magnifierCanvas');
    
    if (mainCanvas && magnifierCanvas) {
        const mainCtx = mainCanvas.getContext('2d');
        const magCtx = magnifierCanvas.getContext('2d');

        const CANVAS_WIDTH = 500;
        const CANVAS_HEIGHT = 350;
        const MAG_SIZE = 150; 
        const ZOOM = 2; 

        const img5 = new Image();
        img5.crossOrigin = "Anonymous";
        img5.src = 'https://picsum.photos/800/600?random=2'; 

        img5.onload = () => {
            mainCanvas.width = CANVAS_WIDTH;
            mainCanvas.height = CANVAS_HEIGHT;
            mainCtx.drawImage(img5, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      
            magnifierCanvas.width = MAG_SIZE;
            magnifierCanvas.height = MAG_SIZE;
        };


        const container = document.getElementById('container-ex5');
        
        container.addEventListener('mousemove', (e) => {
            const rect = mainCanvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

      
            if (mouseX < 0 || mouseX > CANVAS_WIDTH || mouseY < 0 || mouseY > CANVAS_HEIGHT) {
                magnifierCanvas.style.display = 'none';
                return;
            } else {
                magnifierCanvas.style.display = 'block';
            }

            magnifierCanvas.style.left = (mouseX - MAG_SIZE/2) + 'px';
            magnifierCanvas.style.top = (mouseY - MAG_SIZE/2) + 'px';

            magCtx.clearRect(0, 0, MAG_SIZE, MAG_SIZE);
            

            magCtx.save();
            magCtx.beginPath();
            magCtx.arc(MAG_SIZE/2, MAG_SIZE/2, MAG_SIZE/2, 0, Math.PI * 2);
            magCtx.clip();

       
            const sWidth = MAG_SIZE / ZOOM;
            const sHeight = MAG_SIZE / ZOOM;
            const sx = mouseX - sWidth / 2;
            const sy = mouseY - sHeight / 2;

   
            magCtx.drawImage(mainCanvas, sx, sy, sWidth, sHeight, 0, 0, MAG_SIZE, MAG_SIZE);
            

            magCtx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            magCtx.lineWidth = 1;
            magCtx.beginPath();
            magCtx.moveTo(MAG_SIZE/2, 0); magCtx.lineTo(MAG_SIZE/2, MAG_SIZE);
            magCtx.moveTo(0, MAG_SIZE/2); magCtx.lineTo(MAG_SIZE, MAG_SIZE/2);
            magCtx.stroke();

            magCtx.restore();
        });

        container.addEventListener('mouseleave', () => {
            magnifierCanvas.style.display = 'none';
        });
    }

});