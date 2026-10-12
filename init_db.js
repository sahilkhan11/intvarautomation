const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function run() {
  try {
    // Connect without DB to create it if not exists
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: '' });
    await connection.query('CREATE DATABASE IF NOT EXISTS intvar_leads');
    await connection.end();

    // Now connect to the DB
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'intvar_leads', multipleStatements: true });

    // Read sql files
    const setupSql = fs.readFileSync(path.join(__dirname, 'api', 'setup.sql'), 'utf8');
    const portfolioSetupSql = fs.readFileSync(path.join(__dirname, 'api', 'portfolio_setup.sql'), 'utf8');

    console.log('Running setup.sql...');
    await db.query(setupSql);

    console.log('Running portfolio_setup.sql...');
    await db.query(portfolioSetupSql);

    await db.end();
    console.log('Database initialized successfully.');
  } catch (e) {
    console.error('Database initialization failed:', e);
  }
}

run();
