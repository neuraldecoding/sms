// main.js
const output = document.getElementById('output');

// Membaca file references_final.bib secara fetch (hanya bisa jika file diakses via server)
fetch('references_final.bib')
  .then(response => response.text())
  .then(text => {
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
  })
  .catch(err => {
    output.textContent = 'Gagal membaca file references_final.bib: ' + err;
  });
