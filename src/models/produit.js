const pool = require('./db');

const Produit = {
  async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS produits (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(255) NOT NULL,
        description TEXT,
        prix DECIMAL(10, 2) NOT NULL,
        stock INT NOT NULL DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `;
    await pool.query(query);
  },

  async findAll() {
    const [rows] = await pool.query('SELECT * FROM produits ORDER BY id ASC');
    return rows;
  },

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM produits WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ nom, description, prix, stock }) {
    const [result] = await pool.query(
      'INSERT INTO produits (nom, description, prix, stock) VALUES (?, ?, ?, ?)',
      [nom, description, prix, stock]
    );
    return this.findById(result.insertId);
  },

  async update(id, { nom, description, prix, stock }) {
    await pool.query(
      'UPDATE produits SET nom = ?, description = ?, prix = ?, stock = ? WHERE id = ?',
      [nom, description, prix, stock, id]
    );
    return this.findById(id);
  },

  async delete(id) {
    const produit = await this.findById(id);
    await pool.query('DELETE FROM produits WHERE id = ?', [id]);
    return produit;
  },
};

module.exports = Produit;