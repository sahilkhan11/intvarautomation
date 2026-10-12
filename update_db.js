const mysql = require('mysql2/promise');

async function run() {
  try {
    const conn = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'intvar_leads' });
    
    const queries = [
      "UPDATE portfolio_projects SET image='/portfolio/camukhtyar.png' WHERE project_id='ca-mukhtyar'",
      "UPDATE portfolio_projects SET image='/portfolio/shikshahisamadhan.png' WHERE project_id='shiksha-hi-samadhan'",
      "UPDATE portfolio_projects SET image='/portfolio/gym_levelling.png' WHERE project_id='gym-levelling-app'",
      "UPDATE portfolio_projects SET image='/portfolio/jashoda_hospital.png' WHERE project_id='jashoda-hospital'",
      "UPDATE portfolio_projects SET image='/portfolio/meosociety.png' WHERE project_id='meo-society'",
      "UPDATE portfolio_projects SET image='/portfolio/ram_solar.png' WHERE project_id='ram-solar'",
      "UPDATE portfolio_projects SET image='/portfolio/sahi_jagah.png' WHERE project_id='sahi-jagah-app'",
      "UPDATE portfolio_projects SET image='/portfolio/sahi_jagah.png' WHERE project_id='sahi-jagah-web'"
    ];

    for (let q of queries) {
      await conn.execute(q);
    }
    
    await conn.end();
    console.log('Database updated successfully');
  } catch (err) {
    console.error('Error updating DB:', err);
  }
}

run();
