/*
 * ---Projet 01---

 * Soit une application permettant d'encoder les températures relevées chaque jour de la
 * semaine à 12h.
 * Pour atteindre le seuil minimal de réussite, vous répondrez aux trois points suivants :
 * 
 * 1. Ces températures, exprimées en degrés Celsius, doivent être comprises entre les
 * valeurs -5 et +25 (afin de faciliter l'affichage au point 4)
 * 
 * 2. Vous devez calculer et afficher le minimum et le maximum de ces valeurs ainsi que
 * le(s) jour(s) où ces valeurs ont été relevées
 * 
 * 3. Vous afficherez également la moyenne de ces valeurs
 * Pour déterminer le degré de maîtrise :
 * 
 * 4. Vous afficherez les valeurs sous forme de bargraphes dans la console. Une étoile
 * pour 2.5°C. Exemple d'affichage :
 *  |-5|00|05|10|15|20|
 * L|**|**|**|**|**|**| // Température = 25°C
 * M|**|**|**|**|* | |  // Température = 18°C
 * M|**|**|**|* | | |   // Température = 13.5°C
 * J|**|**|**|**|**|* | // Température = 23°C
 * V|**|**|**|**|**| |  // Température = 21°C
 * S|**|**| | | | |     // Température = 6.5°C
 * D|**|**|**|* | | |   // Température = 14.5°C
 * 
 * VOUS TROUVERIEZ LES JEUX DE TEST A PART DANS UN FICHIER .TXT ET LES FONCTIONS A PART DANS UN FICHIER FONCTIONS.JS
 */

/*DÉCLARATION DES VARIABLES*/
// a) Données de rentrée
let temperatures = [];
let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
let jours_bargraphe = ["L", "M", "M", "J", "V", "S", "D"];

// b) Données de travail
let i, j;
let nombre_etoile;

// c) Données de résultat
let temp_max, temp_min;
let jour_max, jour_min;
let temp_moy;
let message;
let bargraphe;

// d) Constantes
const TAILLE_JOURS = jours.length;
const LIMITE_TEMP_MIN = -5;
const LIMITE_TEMP_MAX = 25;
const MSG_INVITATION = "Veuillez introduire une température entre -5 et 25 pour ";
const BARGRAPHE_NB_COLONNES = 6;
const AFF_DEUX_ETOILE = "**|";
const AFF_UNE_ETOILE = "* |";
const AFF_ZERO_ETOILE = "  |";

/*INITIALISATION DES VARIABLES*/
message = "";
bargraphe = "";

/*SAISIE DES VARIABLES + APPEL FONCTION*/
// Saisie de températures avec message varié selon le jour, bouclé sur le nombre des jours et stockage dans un tableau
for (i = 0; i < TAILLE_JOURS; i++) {
    temperatures[i] = inputNB(LIMITE_TEMP_MIN, LIMITE_TEMP_MAX, MSG_INVITATION + jours[i], 0);
}

/*CALCUL/TRAITEMENT + APPEL FONCTION*/
// 1) Recherche des températures max / min, des jours correspondants aux températures max / min et la moyenne
temp_max = rechMax(temperatures);
temp_min = rechMin(temperatures);
jour_max = rechPosVal(temperatures, jours, temp_max);
jour_min = rechPosVal(temperatures, jours, temp_min);
temp_moy = rechMoy(temperatures);

// 2) Création de la première partie de l'affichage
message += "La température maximale est " + temp_max + "°C.\nJour" + ((jour_max.length > 1) ? "s" : "") + " de relevage : " + jour_max + "\n\n";
message += "La température minimale est " + temp_min + "°C \nJour" + ((jour_min.length > 1) ? "s" : "") + " de relevage : " + jour_min + "\n\n";
message += "La température moyenne de cette semaine est " + temp_moy + "°C\n\n";

// 3) Création bargraphe
// Création d'une nouvelle variable d'affichage pour mieux séparer les deux parties (message et bargraphe)
bargraphe += " |-5|00|05|10|15|20|\n";

for (i = 0; i < TAILLE_JOURS; i++) {
    //Calcul du nombre des etoiles 
    nombre_etoile = parseInt((temperatures[i] + 5) / 2.5);
    //Création bargraphe
    bargraphe += jours_bargraphe[i] + "|";
    for (j = 0; j < BARGRAPHE_NB_COLONNES; j++) {        
        //Création affichage
        if (nombre_etoile > 1) {
            bargraphe += AFF_DEUX_ETOILE;
            nombre_etoile -= 2;
        } else if (nombre_etoile === 1) {
            bargraphe += AFF_UNE_ETOILE;
            nombre_etoile -= 1;
        } else if (nombre_etoile === 0) {
            bargraphe += AFF_ZERO_ETOILE;
        }
    }
    bargraphe += " // Température = " + temperatures[i] + "°C\n";
}

/*AFFICHAGE DES DONNÉES*/

console.log(message);
console.log(bargraphe);