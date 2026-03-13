# Projet Final — API REST Produits

API REST CRUD avec Node.js/Express + MySQL, tests Jest, pipeline GitHub Actions.

## Routes disponibles

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | /health | Santé de l'API |
| GET | /produits | Lister tous les produits |
| GET | /produits/:id | Récupérer un produit |
| POST | /produits | Créer un produit |
| PUT | /produits/:id | Modifier un produit |
| DELETE | /produits/:id | Supprimer un produit |

## Lancer le projet
```bash
npm install
cp .env.example .env
npm run dev
```