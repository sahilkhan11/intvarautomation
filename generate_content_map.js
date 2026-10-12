const fs = require('fs');
const path = require('path');

const artifactPath = "C:\\Users\\Administrator\\.gemini\\antigravity-ide\\brain\\f8d6f7c4-9700-4e74-b9ae-4bb94058d8dd\\website_content_map.md";
const srcPath = path.join(__dirname, 'src', 'app');

function findFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, fileList);
    } else if (file === 'page.tsx' || file === 'page.jsx') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allPages = findFiles(srcPath);
let markdown = '# Website Content Map\n\nThis document contains the raw code for all pages on the website. \n\n**Instructions:**\n1. Search for the page you want to update (e.g., `src/app/about/page.tsx`).\n2. Look at the `Original Code / Content` section to see the current text.\n3. Write your humanized text directly under the `✍️ Humanized Content` header for that specific page.\n4. You can provide just the rewritten paragraphs (e.g., "Change the hero subtitle to: ...") or the full rewritten block.\n5. Once you save this file, let me know, and I will accurately map your changes back to the exact files and lines!\n\n---\n\n';

for (const file of allPages) {
  const relativePath = path.relative(__dirname, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  
  markdown += `## 📄 \`${relativePath}\`\n\n`;
  markdown += `### Original Code / Content:\n`;
  markdown += '```tsx\n' + content.trim() + '\n```\n\n';
  markdown += `### ✍️ Humanized Content:\n`;
  markdown += `> Write your updated content for \`${relativePath}\` here.\n\n`;
  markdown += `---\n\n`;
}

fs.writeFileSync(artifactPath, markdown);
console.log('Created ' + artifactPath + ' with ' + allPages.length + ' files.');
