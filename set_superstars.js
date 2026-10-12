const mysql = require('mysql2/promise');
async function run() {
  const conn = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'intvar_leads' });
  await conn.execute("UPDATE portfolio_projects SET is_superstar = TRUE WHERE project_id IN ('shoptec-ecommerce', 'gym-levelling-app', 'alwar-furniture')");
  await conn.end();
  console.log('Updated superstars!');
}
run();
