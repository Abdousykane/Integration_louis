console.log("TP6 Loaded - Animations JS");

window.addEventListener("DOMContentLoaded", function() {
    let intervalTimer;
    const image = document.getElementById("image-deform");
    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");

    if(image && startBtn && stopBtn) {
        startBtn.addEventListener("click", function() {
            if (!intervalTimer) {
                applyRandomMatrix();
                intervalTimer = setInterval(applyRandomMatrix, 1000);
            }
        });

        stopBtn.addEventListener("click", function() {
            clearInterval(intervalTimer);
            intervalTimer = undefined;
            image.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
        });
    }

    function applyRandomMatrix() {
        let a = 0.8 + Math.random() * 0.4;
        let d = 0.8 + Math.random() * 0.4;
        let b = (Math.random() - 0.5) * 0.6;
        let c = (Math.random() - 0.5) * 0.6;
        let e = (Math.random() - 0.5) * 100;
        let f = (Math.random() - 0.5) * 100;

        image.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`;
    }
});