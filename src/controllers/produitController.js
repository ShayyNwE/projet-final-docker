const Produit = require('../models/produit');

const health = (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API opérationnelle' });
};

const getAllProduits = async (req, res) => {
  try {
    const produits = await Produit.findAll();
    res.status(200).json(produits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

const getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }
    res.status(200).json(produit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

const createProduit = async (req, res) => {
  try {
    const { nom, description, prix, stock } = req.body;
    const produit = await Produit.create({ nom, description, prix, stock });
    res.status(201).json(produit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

const updateProduit = async (req, res) => {
  try {
    const existing = await Produit.findById(req.params.id);
    if (!existing) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }
    const { nom, description, prix, stock } = req.body;
    const produit = await Produit.update(req.params.id, { nom, description, prix, stock });
    res.status(200).json(produit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

const deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.delete(req.params.id);
    if (!produit) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }
    res.status(200).json({ message: 'Produit supprimé avec succès', produit });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

module.exports = { health, getAllProduits, getProduitById, createProduit, updateProduit, deleteProduit };