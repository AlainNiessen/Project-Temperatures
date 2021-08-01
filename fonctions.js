/*PROJET01 - FONCTIONS*/

// 1) Fonction pour rentrer une valeur (avec une valeur qui s'affiche par défaut) + contrôle isNaN et entre 2 valeurs (val1 et val2)
function inputNB (val1, val2, txt, defaut) {
    let error_txt = "";  
    let n;  
    
    do {
        n = parseFloat(prompt(error_txt + "\n" + txt, defaut));
        if ( isNaN(n) || n < val1 || n > val2) {
            error_txt = "La valeur rentrée est invalide";
        } 
    } while (isNaN(n) || n < val1 || n > val2);    

    return n;
}

// 2) Fonction qui recherche la valeur max dans un tableau
function rechMax (tab) {
    let val;
    let max = tab[0];

    for (val of tab) {
        if (val > max) {
            max = val;
        }
    }

    return max;
}

// 3) Fonction qui recherche la valeur min dans un tableau
function rechMin (tab) {
    let val;
    let min = tab[0];

    for (val of tab) {
        if (val < min) {
            min = val;
        }
    }

    return min;
}

// 4) Fonction qui recherche une valeur dans un premier tableau et transfére sa/ses position/s envers un deuxième tableau pour trouver des valeurs correspondant
//    => dans notre cas pour trouver des jours qui correspondent à une température (concrétement max et min)
function rechPosVal (tab1, tab2, val) {
    let i;
    let tabPos = [];

    for (i in tab1) {
        if (tab1[i] === val) {            
            tabPos.push(tab2[i]);
        } 
    }

    return tabPos;
}

// 5) Fonction qui recherche la moyenne des valeurs dans un tableau + limitation de deux valeurs après la virgule pour la lisibilité
function rechMoy (tab) {
    let i;
    let somme = 0;
    let moy;
    let taille_tab;

    for (i = 0, taille_tab = tab.length; i < taille_tab; i++) {
        somme += tab[i];
    }

    moy = somme / taille_tab;
    // Définition deux places après la virgule
    moy = parseInt(moy * 100) / 100;

    return moy;
}

