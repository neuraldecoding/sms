// Tunggu sampai DOM selesai dimuat
window.addEventListener('load', function () {
    // Dapatkan referensi ke elemen-elemen DOM
    const bibBody = document.querySelector('#bibBody');
    const errorDiv = document.querySelector('#error');

    // Fungsi untuk menampilkan error
    function showError(message) {
        if (errorDiv) {
            errorDiv.style.display = 'block';
            errorDiv.textContent = `Error: ${message}`;
        }
    }

    // Cek apakah elemen yang diperlukan ada
    if (!bibBody) {
        showError('Table body element not found');
        return;
    }

    // Membaca file BibTeX
    fetch('all.bib')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            if (!text.trim()) {
                throw new Error('BibTeX file is empty');
            }

            // Parser BibTeX yang lebih robust
            const entries = text.split(/^@/m).slice(1).map(entry => {
                const typeMatch = entry.match(/^\w+/);
                const type = typeMatch ? typeMatch[0] : '';
                const keyMatch = entry.match(/\{([^,]+),/);
                const key = keyMatch ? keyMatch[1] : '';
                const fields = {};

                // Parser yang lebih robust untuk menangani nested braces dan multi-line
                let i = entry.indexOf('{');
                if (i === -1) return { type, key, fields };

                i++; // Skip opening brace
                while (i < entry.length) {
                    // Skip whitespace dan koma
                    while (i < entry.length && /[\s,]/.test(entry[i])) i++;
                    if (i >= entry.length) break;

                    // Cek apakah ini closing brace dari entry
                    if (entry[i] === '}') break;

                    // Baca field name
                    let fieldName = '';
                    while (i < entry.length && /[\w-]/.test(entry[i])) {
                        fieldName += entry[i++];
                    }
                    if (!fieldName) break;

                    // Skip whitespace dan '='
                    while (i < entry.length && /[\s=]/.test(entry[i])) i++;
                    if (i >= entry.length) break;

                    // Baca field value
                    let fieldValue = '';
                    if (entry[i] === '{') {
                        // Count braces untuk nested content
                        let braceCount = 1;
                        i++; // Skip opening brace
                        while (i < entry.length && braceCount > 0) {
                            if (entry[i] === '{') braceCount++;
                            else if (entry[i] === '}') braceCount--;
                            if (braceCount > 0) fieldValue += entry[i];
                            i++;
                        }
                    } else if (entry[i] === '"') {
                        // Handle quoted strings
                        i++; // Skip opening quote
                        while (i < entry.length && entry[i] !== '"') {
                            fieldValue += entry[i++];
                        }
                        if (i < entry.length) i++; // Skip closing quote
                    }

                    if (fieldName && fieldValue) {
                        fields[fieldName.toLowerCase()] = fieldValue.trim();
                    }
                }

                return { type, key, fields };
            }).filter(entry => entry.key); // Filter entries tanpa key

            // Bersihkan tabel sebelum menambahkan data baru
            while (bibBody.firstChild) {
                bibBody.removeChild(bibBody.firstChild);
            }

            // Tampilkan data dalam tabel
            if (entries.length === 0) {
                const row = bibBody.insertRow();
                const cell = row.insertCell();
                cell.colSpan = 4;
                cell.textContent = 'Tidak ada data yang ditemukan';
                return;
            }

            entries.forEach((entry, index) => {
                const row = bibBody.insertRow();

                // Fungsi untuk membuat link DOI
                const createDoiLink = (doi, text) => {
                    if (!doi) return text;
                    const a = document.createElement('a');
                    a.href = `https://doi.org/${doi}`;
                    a.textContent = text;
                    a.target = '_blank'; // Buka di tab baru
                    a.style.color = 'inherit'; // Mengikuti warna teks parent
                    a.style.textDecoration = 'none'; // Hapus garis bawah default
                    a.addEventListener('mouseover', () => a.style.textDecoration = 'underline');
                    a.addEventListener('mouseout', () => a.style.textDecoration = 'none');
                    return a;
                };

                const cellsData = [
                    { label: 'No', value: index + 1 },
                    {
                        label: 'Cite Key',
                        value: entry.key,
                        isLink: true,
                        doi: entry.fields.doi
                    },
                    { label: 'Judul', value: entry.fields.title || '' },
                    { label: 'Abstrak', value: entry.fields.abstract || '' }
                ];

                cellsData.forEach(({ label, value, isLink, doi }) => {
                    const cell = row.insertCell();
                    cell.setAttribute('data-label', label);
                    if (isLink && doi) {
                        cell.appendChild(createDoiLink(doi, value));
                    } else {
                        cell.textContent = value;
                    }
                });
            });

            // Sembunyikan pesan error jika berhasil
            if (errorDiv) {
                errorDiv.style.display = 'none';
            }
        })
        .catch(err => {
            console.error('Error:', err);
            showError(err.message);

            // Tampilkan pesan error dalam tabel
            while (bibBody.firstChild) {
                bibBody.removeChild(bibBody.firstChild);
            }
            const row = bibBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 4;
            cell.textContent = 'Terjadi kesalahan saat memuat data';
        });
});
