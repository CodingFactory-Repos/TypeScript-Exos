import { Livre, Bibliotheque } from './exo3';

describe('Livre', () => {
    it('devrait créer une instance de Livre', () => {
        const livre = new Livre('Titre', 'Auteur', 'ISBN123', 200, false);

        expect(livre).toBeDefined();
        expect(livre.titre).toBe('Titre');
        expect(livre.auteur).toBe('Auteur');
        expect(livre.ISBN).toBe('ISBN123');
        expect(livre.nombreDePages).toBe(200);
        expect(livre.estEmprunte).toBe(false);
    });

    it('devrait emprunter un livre', () => {
        const livre = new Livre('Titre', 'Auteur', 'ISBN123', 200, false);
        livre.emprunter();

        expect(livre.estEmprunte).toBe(true);
    });

    it('devrait retourner un livre', () => {
        const livre = new Livre('Titre', 'Auteur', 'ISBN123', 200, true);
        livre.retourner();

        expect(livre.estEmprunte).toBe(false);
    });
});

describe('Bibliotheque', () => {
    it('devrait créer une instance de Bibliotheque', () => {
        const bibliotheque = new Bibliotheque([]);

        expect(bibliotheque).toBeDefined();
        expect(bibliotheque.livres).toEqual([]);
    });

    it('devrait ajouter un livre à la bibliothèque', () => {
        const bibliotheque = new Bibliotheque([]);
        const livre = new Livre('Titre', 'Auteur', 'ISBN123', 200, false);
        bibliotheque.ajouterLivre(livre);

        expect(bibliotheque.livres.length).toBe(1);
        expect(bibliotheque.livres[0]).toBe(livre);
    });

    it('devrait chercher un livre par titre', () => {
        const livre1 = new Livre('Titre1', 'Auteur', 'ISBN123', 200, false);
        const livre2 = new Livre('Titre2', 'Auteur', 'ISBN456', 250, false);
        const bibliotheque = new Bibliotheque([livre1, livre2]);

        const result = bibliotheque.chercherParTitre('Titre1');

        expect(result.length).toBe(1);
        expect(result[0]).toBe(livre1);
    });

    it('devrait emprunter un livre par ISBN', () => {
        const livre = new Livre('Titre', 'Auteur', 'ISBN123', 200, false);
        const bibliotheque = new Bibliotheque([livre]);

        bibliotheque.emprunterLivre('ISBN123');

        expect(livre.estEmprunte).toBe(true);
    });

    it('devrait retourner un livre par ISBN', () => {
        const livre = new Livre('Titre', 'Auteur', 'ISBN123', 200, true);
        const bibliotheque = new Bibliotheque([livre]);

        bibliotheque.retournerLivre('ISBN123');

        expect(livre.estEmprunte).toBe(false);
    });
});
