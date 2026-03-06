const app = require('./app');
const Produit = require('./models/produit');

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await Produit.createTable();
    console.log('✅ Table produits prête');
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Erreur au démarrage :', error);
    process.exit(1);
  }
};

start();