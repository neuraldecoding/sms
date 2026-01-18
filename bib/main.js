// Tunggu sampai DOM selesai dimuat
window.addEventListener('load', function() {
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
    fetch('references_final.bib')
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
