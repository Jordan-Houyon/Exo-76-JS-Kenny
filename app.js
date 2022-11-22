let compteur = document.getElementById("compatge")
let x = 0;

document.body.addEventListener('keydown',function(event){
    console.log(event.key)

    if (event.key === "z" || event.key === "ArrowUp"){

//Deplacement vers le haut

        let t = parseInt(document.getElementById('kenny').style.top);
        t = t - 10;
        if (t < 0) {
//arrete de déplacer Kenny

        } else {
            document.getElementById('kenny').style.top = t + 'px';
            console.log('up' + t);
        }


        // Deplacement vers le bas

    } else if (event.key ==="s" || event.key === "ArrowDown") {
        let t = parseInt(document.getElementById('kenny').style.top);
        t = t + 10;
        if (t > 470) {

//arrete de déplacer Kenny

        } else {
            document.getElementById('kenny').style.top = t + 'px';
            console.log('down' + t);
        }


//Deplacement vers la droite

    } else if (event.key === "d" || event.key === "ArrowRight") {
        let t = parseInt(document.getElementById('kenny').style.left);
        t = t + 10;
        if (t > 470) {

        } else {
            document.getElementById('kenny').style.left = t + 'px';
            console.log('right' + t);
        }


// Deplacement vers la gauche

    } else if (event.key === "q" || event.key === "ArrowLeft") {

        let t = parseInt(document.getElementById('kenny').style.left);
        t = t - 10;
        document.getElementById('kenny').style.left = t + 'px';
        console.log('left' + t);
        if (t < 50) {
            alert(" Ils ont tués Kenny")
            document.getElementById("kenny").style.left = "200px";
            document.getElementById("kenny").style.top = "200px";
            console.log(x)
            ++x;
            compteur.innerHTML = x.toString()
        }
    }
})
