let compte= document.querySelector('#container');

let i = 60;

while(i >= 0) {
    let chiffre = document.createElement('p');
        chiffre.innerHTML = i;

    compte.appendChild(chiffre);

    i--;
}


