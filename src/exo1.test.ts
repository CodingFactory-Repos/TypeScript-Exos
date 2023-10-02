import { getUserSummary } from './exo1';

describe('getUserSummary', () => {
  it('devrait récupérer les détails d\'un utilisateur', async () => {
    const userId = 1;
    const user = await getUserSummary(userId);

    expect(user.id).toBe(userId);
    expect(user.name).toBeDefined();
    expect(user.email).toBeDefined();
    expect(user.address.city).toBeDefined();
  });

  it('devrait lever une erreur si l\'utilisateur n\'existe pas', async () => {
    await expect(getUserSummary(11)).rejects.toThrow('User not found');
  });
});
