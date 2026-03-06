const validateProduit = (req, res, next) => {
    const { nom, prix, stock } = req.body;
    const errors = [];
  
    if (!nom || nom.trim() === '') {
      errors.push('Le champ "nom" est obligatoire');
    }
  
    if (prix === undefined || prix === null || prix === '') {
      errors.push('Le champ "prix" est obligatoire');
    } else if (isNaN(prix) || Number(prix) < 0) {
      errors.push('Le champ "prix" doit être un nombre positif');
    }
  
    if (stock === undefined || stock === null || stock === '') {
      errors.push('Le champ "stock" est obligatoire');
    } else if (!Number.isInteger(Number(stock)) || Number(stock) < 0) {
      errors.push('Le champ "stock" doit être un entier positif');
    }
  
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
  
    next();
  };
  
  module.exports = { validateProduit };