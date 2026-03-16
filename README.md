# 🛍️ Projet Final — API REST Produits

API REST CRUD de gestion de produits, développée avec **Node.js / Express** et **MySQL**.

---

## 📋 Prérequis

Avant de commencer, assure-toi d'avoir installé :

- [Node.js](https://nodejs.org) (v18 ou supérieur)
- [MySQL](https://www.mysql.com) (via MAMP, WAMP, ou natif)
- [Git](https://git-scm.com)

---

## 🚀 Installation

### 1. Cloner le repo

```bash
git clone https://github.com/TON_USERNAME/projet-final-docker.git
cd projet-final-docker
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Crée un fichier `.env` à la racine du projet :

```bash
cp .env.example .env
```

Puis édite `.env` avec tes informations MySQL :

```env
DB_HOST=127.0.0.1
DB_PORT=3306       # 8889 si tu utilises MAMP
DB_NAME=produits_db
DB_USER=root
DB_PASSWORD=ton_mot_de_passe
PORT=3000
NODE_ENV=development
```

### 4. Créer la base de données

Connecte-toi à MySQL et crée la base :

```sql
CREATE DATABASE produits_db;
```

> La table `produits` est créée automatiquement au démarrage du serveur.

---

## ▶️ Lancer le projet

### Mode développement (avec rechargement automatique)

```bash
npm run dev
```

### Mode production

```bash
npm start
```

Le serveur démarre sur **http://localhost:3000**

---

## 🌐 Routes disponibles

| Méthode | Route           | Description                 | Code retour |
|---------|-----------------|-----------------------------|-------------|
| GET     | /health         | Santé de l'API              | 200         |
| GET     | /produits       | Lister tous les produits    | 200         |
| GET     | /produits/:id   | Récupérer un produit par ID | 200 / 404   |
| POST    | /produits       | Créer un produit            | 201 / 400   |
| PUT     | /produits/:id   | Modifier un produit         | 200 / 404   |
| DELETE  | /produits/:id   | Supprimer un produit        | 200 / 404   |

### Exemple de body (POST / PUT)

```json
{
  "nom": "Laptop Pro",
  "description": "Un super laptop",
  "prix": 999.99,
  "stock": 10
}
```

---

## ✅ Lancer les tests

```bash
npm test
```

Les tests utilisent des **mocks** — aucune base de données réelle n'est nécessaire.

---

## 🔍 Lancer le linter

```bash
npm run lint
```

---

## 📁 Structure du projet

```
projet-final-docker/
├── .github/
│   └── workflows/
│       └── ci.yml              # Pipeline GitHub Actions
├── src/
│   ├── app.js                  # Configuration Express
│   ├── server.js               # Point d'entrée
│   ├── controllers/
│   │   └── produitController.js
│   ├── middlewares/
│   │   └── validation.js
│   ├── models/
│   │   ├── db.js               # Connexion MySQL
│   │   └── produit.js          # Requêtes SQL
│   └── routes/
│       └── produits.js
├── tests/
│   └── produits.test.js
├── .eslintrc.json
├── .gitignore
└── package.json
```

---

## ⚙️ Pipeline CI/CD

Le pipeline **GitHub Actions** se déclenche automatiquement sur chaque **Pull Request** vers `main` ou `develop`.

```
Lint ──► Tests
```

- **Lint** : vérifie la qualité du code avec ESLint
- **Tests** : exécute les 8 tests Jest

---

## 👤 Auteur

**Tom Julliat** — Escen Tech N3 — 2026
