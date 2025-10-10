// main.js
const fileInput = document.getElementById('bibfile');
const output = document.getElementById('output');

fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const text = await file.text();

  // Parser BibTeX sederhana
  const entries = text.split(/@/).slice(1).map(entry => {
    const typeMatch = entry.match(/^\w+/);
    const type = typeMatch ? typeMatch[0] : '';
    const keyMatch = entry.match(/\{([^,]+),/);
    const key = keyMatch ? keyMatch[1] : '';
    const fields = {};
    const fieldRegex = /(\w+)\s*=\s*\{([^}]*)\}/g;
    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(entry)) !== null) {
      fields[fieldMatch[1]] = fieldMatch[2];
    }
    return { type, key, fields };
  });

  // Tampilkan hasil parsing
  output.textContent = entries.map(e => {
    return `Type: ${e.type}\nKey: ${e.key}\n` +
      Object.entries(e.fields).map(([k, v]) => `${k}: ${v}`).join('\n') + '\n---\n';
  }).join('\n');
});
