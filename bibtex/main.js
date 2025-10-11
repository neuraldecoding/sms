const bibBody = document.getElementById('bibBody');

// Membaca file references_final.bib secara fetch
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
        fields[fieldMatch[1].toLowerCase()] = fieldMatch[2];
      }
      return { type, key, fields };
    });

    // Tampilkan dalam tabel
    entries.forEach((entry, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${entry.key}</td>
        <td>${entry.fields.title || ''}</td>
        <td>${entry.fields.abstract || ''}</td>
      `;
      bibBody.appendChild(row);
    });
  })
  .catch(err => {
    console.error('Gagal membaca file references_final.bib:', err);
    bibBody.innerHTML = `<tr><td colspan="4">Error: ${err.message}</td></tr>`;
  });
