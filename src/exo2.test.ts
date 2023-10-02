import { sortByDate, Obj, Subject } from './exo2';

describe('sortByDate', () => {
  let obj: Obj;

  beforeEach(() => {
    obj = {
      "1": {
        id: 1,
        name: "test",
        created_at: "2021-01-01"
      },
      "2": {
        id: 2,
        name: "test",
        created_at: "2021-01-02"
      },
      "3": {
        id: 3,
        name: "test",
        created_at: "2021-01-03"
      }
    };
  });

  it('devrait trier les objets par date dans l\'ordre décroissant', () => {
    const sorted: Subject[] = sortByDate(obj, true);

    expect(sorted.length).toBe(3);
    expect(sorted[0].id).toBe(3);
    expect(sorted[1].id).toBe(2);
    expect(sorted[2].id).toBe(1);
  });

  it('devrait trier les objets par date dans l\'ordre croissant par défaut', () => {
    const sorted: Subject[] = sortByDate(obj);

    expect(sorted.length).toBe(3);
    expect(sorted[0].id).toBe(1);
    expect(sorted[1].id).toBe(2);
    expect(sorted[2].id).toBe(3);
  });

  it('devrait retourner un tableau vide si l\'objet est vide', () => {
    const emptyObj: Obj = {};
    const sorted: Subject[] = sortByDate(emptyObj);

    expect(sorted.length).toBe(0);
  });
});
