import { createPool } from 'mysql2/promise';


// Créez un pool de connexions avec une limite de connexions maximale
const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});



// Vérifiez si la connexion est ouverte avant d'exécuter une requête
const executeQuery = async (query, params) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const rows = await connection.query(query, params);
    return rows;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'exécution de la requête :', error);
    
  } finally {
    if (connection) {
      connection.release(); // Libérer la connexion après l'exécution de la requête
    }
  }
};

export default executeQuery;