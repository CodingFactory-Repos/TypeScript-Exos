export class Livre {
    titre: string;
    auteur: string;
    ISBN: string;
    nombreDePages: number;
    estEmprunte: boolean;

    constructor(titre: string, auteur: string, ISBN: string, nombreDePages: number, estEmprunte: boolean) {
        this.titre = titre;
        this.auteur = auteur;
        this.ISBN = ISBN;
        this.nombreDePages = nombreDePages;
        this.estEmprunte = estEmprunte;
    }

    emprunter(): void {
        this.estEmprunte = true;
    }

    retourner(): void {
        this.estEmprunte = false;
    }
}

export class Bibliotheque {
    livres: Livre[];

    constructor(livres: Livre[]) {
        this.livres = livres;
    }

    ajouterLivre(livre: Livre): void {
        this.livres.push(livre);
    }

    chercherParTitre(titre: string): Livre[] {
        return this.livres.filter(livre => livre.titre === titre);
    }

    emprunterLivre(ISBN: string): void {
        this.livres.filter(livre => livre.ISBN === ISBN).forEach(livre => livre.emprunter());
    }

    retournerLivre(ISBN: string): void {
        this.livres.filter(livre => livre.ISBN === ISBN).forEach(livre => livre.retourner());
    }
}

// // Créez une interface simple en utilisant `console.log` et `prompt` pour permettre à l'utilisateur d'ajouter des livres, de chercher des livres par titre, d'emprunter et de retourner des livres.
// const bibliotheque = new Bibliotheque([
//     new Livre("Harry Potter et la Chambre des Secrets", "J.K. Rowling", "978-2070643028", 364, false),
//     new Livre("Harry Potter et le Prisonnier d'Azkaban", "J.K. Rowling", "978-2070643042", 448, false),
//     new Livre("Harry Potter et la Coupe de Feu", "J.K. Rowling", "978-2070643066", 768, false),
//     new Livre("Harry Potter et l'Ordre du Phénix", "J.K. Rowling", "978-2070643080", 976, false),
//     new Livre("Harry Potter et le Prince de Sang-Mêlé", "J.K. Rowling", "978-2070643103", 672, false),
//     new Livre("Harry Potter et les Reliques de la Mort", "J.K. Rowling", "978-2070643127", 896, false),
//     new Livre("Harry Potter et l'Enfant Maudit", "J.K. Rowling", "978-2075074206", 352, false),
//     new Livre("Harry Potter : La Magie des films", "Brian Sibley", "978-2075074213", 192, false),
//     new Livre("Harry Potter : Le Chemin de Traverse", "Jody Revenson", "978-2075074220", 96, false),
// ]);
//
// function afficherMenu(): void {
//     console.log("1. Ajouter un livre");
//     console.log("2. Chercher un livre par titre");
//     console.log("3. Emprunter un livre");
//     console.log("4. Retourner un livre");
//     console.log("5. Quitter");
//
//     const choix: string = prompt("Que voulez-vous faire ?") || "";
//
//     switch (choix) {
//         case "1":
//             ajouterLivre();
//             break;
//         case "2":
//             chercherLivre();
//             break;
//         case "3":
//             emprunterLivre();
//             break;
//         case "4":
//             retournerLivre();
//             break;
//         case "":
//             console.log("Choix invalide");
//             afficherMenu();
//     }
// }
//
// function ajouterLivre(): void {
//     const titre: string = prompt("Titre du livre") || "";
//     const auteur: string = prompt("Auteur du livre") || "";
//     const ISBN: string = prompt("ISBN du livre") || "";
//     const nombreDePages: number = parseInt(prompt("Nombre de pages du livre") || "0");
//
//     bibliotheque.ajouterLivre(new Livre(titre, auteur, ISBN, nombreDePages, false));
//
//     console.log(`Le livre ${titre} a été ajouté`);
//
//     afficherMenu();
// }
//
// function chercherLivre(): void {
//     const titre: string = prompt("Titre du livre") || "";
//
//     const livres: Livre[] = bibliotheque.chercherParTitre(titre);
//
//     if (livres.length === 0) {
//         console.log("Aucun livre trouvé");
//     } else {
//         livres.forEach(livre => console.log(livre));
//
//         console.log(`${livres.length} livre(s) trouvé(s)`);
//
//         for (const livre of livres) {
//             console.log(`- ${livre.titre} de ${livre.auteur} (${livre.nombreDePages} pages) ${livre.estEmprunte ? "emprunté" : "disponible"} (ISBN: ${livre.ISBN})`);
//         }
//     }
//
//     afficherMenu();
// }
//
// function emprunterLivre(): void {
//     const ISBN: string = prompt("ISBN du livre") || "";
//
//     bibliotheque.emprunterLivre(ISBN);
//
//     console.log(`Le livre ${ISBN} a été emprunté`);
//
//     afficherMenu();
// }
//
// function retournerLivre(): void {
//     const ISBN: string = prompt("ISBN du livre") || "";
//
//     bibliotheque.retournerLivre(ISBN);
//
//     console.log(`Le livre ${ISBN} a été retourné`);
//
//     afficherMenu();
// }
//
// afficherMenu();
