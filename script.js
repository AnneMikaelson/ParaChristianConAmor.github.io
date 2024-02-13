const siButton = document.querySelector("#si");
const noButton = document.querySelector("#no");

let noCount = 0;


siButton.addEventListener("click", () => {
    // Mostrar página con gif de celebración y texto
    window.location.href = "page2.html";
});

noButton.addEventListener("click", () => {
    noCount++;


    if (noCount === 1) {
        noButton.textContent = "¿Estás seguro?";
        siButton.style.fontSize = parseInt(siButton.style.fontSize || 16) + 30 + 'px';
        siButton.style.padding = "20px 40px";
        document.getElementById('GifContainer1').style.display = 'none';
        document.getElementById('GifContainer2').style.display = 'block';

    } else if (noCount === 2) {
        noButton.textContent = "¿Realmente seguro?";
        siButton.style.fontSize = parseInt(siButton.style.fontSize || 16) + 30 + 'px';
        siButton.style.padding = "20px 40px";
        document.getElementById('GifContainer2').style.display = 'none';
        document.getElementById('GifContainer3').style.display = 'block';

    } else if (noCount === 3) {
        noButton.textContent = "¿Segurísimo?";
        siButton.style.fontSize = parseInt(siButton.style.fontSize || 16) + 30 + 'px';
        siButton.style.padding = "20px 40px";
        document.getElementById('GifContainer3').style.display = 'none';
        document.getElementById('GifContainer4').style.display = 'block';

    } else if (noCount === 4) {
        noButton.textContent = "Porfis porfis";
        siButton.style.fontSize = parseInt(siButton.style.fontSize || 16) + 30 + 'px';
        siButton.style.padding = "20px 40px";
        document.getElementById('GifContainer4').style.display = 'none';
        document.getElementById('GifContainer5').style.display = 'block';

    } else if (noCount === 5) {
        noButton.textContent = "Solo piensalo un poquito";
        siButton.style.fontSize = parseInt(siButton.style.fontSize || 16) + 30 + 'px';
        siButton.style.padding = "20px 40px";
        document.getElementById('GifContainer5').style.display = 'none';
        document.getElementById('GifContainer6').style.display = 'block';

    } else if (noCount === 6) {
        noButton.textContent = "Esta bien, ya no preguntaré más";
        siButton.style.fontSize = parseInt(siButton.style.fontSize || 16) + 30 + 'px';
        siButton.style.padding = "20px 40px";
        document.getElementById('GifContainer6').style.display = 'none';
        document.getElementById('GifContainer7').style.display = 'block';

    }
    else if (noCount == 7) {
        noButton.textContent = "Mentiraaaa por favor di que siii";
        siButton.style.fontSize = parseInt(siButton.style.fontSize || 16) + 30 + 'px';
        siButton.style.padding = "20px 40px";
        document.getElementById('GifContainer7').style.display = 'none';
        document.getElementById('GifContainer8').style.display = 'block';

    }
    else if (noCount == 8) {
        noButton.textContent = "No";
        noCount = 0;
        siButton.style.fontSize = parseInt(siButton.style.fontSize || 16) + 30 + 'px';
        document.getElementById('GifContainer8').style.display = 'none';
        document.getElementById('GifContainer1').style.display = 'block';
    }
});
