const express = require('express');
const router = express.Router();
const {
  getAllProduits,
  getProduitById,
  createProduit,
  updateProduit,
  deleteProduit,
} = require('../controllers/produitController');
const { validateProduit } = require('../middlewares/validation');

router.get('/', getAllProduits);
router.get('/:id', getProduitById);
router.post('/', validateProduit, createProduit);
router.put('/:id', validateProduit, updateProduit);
router.delete('/:id', deleteProduit);

module.exports = router;