import mysql from 'mysql2/promise';

export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'intvar_leads',
  port: parseInt(process.env.DB_PORT || '3306', 10),
};

export async function getDbConnection() {
  return await mysql.createConnection(dbConfig);
}
