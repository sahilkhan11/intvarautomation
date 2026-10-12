const mysql = require('mysql2/promise');
async function run() {
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'intvar_leads' });
  await connection.execute("INSERT INTO blog (title, slug, excerpt, content) VALUES ('Welcome to the Blog', 'welcome', 'This is the first post.', '<p>Content goes here.</p>')");
  console.log('Dummy post inserted');
  await connection.end();
}
run().catch(console.error);
