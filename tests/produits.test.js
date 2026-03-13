const request = require('supertest');
const app = require('../src/app');

jest.mock('../src/models/produit', () => ({
  findAll: jest.fn(),
  findById: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
}));

const Produit = require('../src/models/produit');

const mockProduit = {
  id: 1,
  nom: 'Laptop Pro',
  description: 'Un super laptop',
  prix: '999.99',
  stock: 10,
};

afterEach(() => {
  jest.clearAllMocks();
});

// GET /health
describe('GET /health', () => {
  it('devrait retourner 200 et status OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});

// GET /produits
describe('GET /produits', () => {
  it('devrait retourner la liste des produits (200)', async () => {
    Produit.findAll.mockResolvedValue([mockProduit]);
    const res = await request(app).get('/produits');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(1);
  });
});

// GET /produits/:id
describe('GET /produits/:id', () => {
  it('devrait retourner un produit existant (200)', async () => {
    Produit.findById.mockResolvedValue(mockProduit);
    const res = await request(app).get('/produits/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it('devrait retourner 404 si le produit n\'existe pas', async () => {
    Produit.findById.mockResolvedValue(null);
    const res = await request(app).get('/produits/999');
    expect(res.statusCode).toBe(404);
  });
});

// POST /produits
describe('POST /produits', () => {
  it('devrait créer un produit (201)', async () => {
    Produit.create.mockResolvedValue(mockProduit);
    const res = await request(app)
      .post('/produits')
      .send({ nom: 'Laptop Pro', description: 'Un super laptop', prix: 999.99, stock: 10 });
    expect(res.statusCode).toBe(201);
  });

  it('devrait retourner 400 si le nom est manquant', async () => {
    const res = await request(app)
      .post('/produits')
      .send({ prix: 999.99, stock: 10 });
    expect(res.statusCode).toBe(400);
  });
});

// DELETE /produits/:id
describe('DELETE /produits/:id', () => {
  it('devrait supprimer un produit (200)', async () => {
    Produit.delete.mockResolvedValue(mockProduit);
    const res = await request(app).delete('/produits/1');
    expect(res.statusCode).toBe(200);
  });

  it('devrait retourner 404 si le produit n\'existe pas', async () => {
    Produit.delete.mockResolvedValue(null);
    const res = await request(app).delete('/produits/999');
    expect(res.statusCode).toBe(404);
  });
});