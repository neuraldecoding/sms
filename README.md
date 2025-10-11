# Systematic Mapping Study: Neural Decoding and Stimulus Reconstruction Using Neuroimaging and Artificial Intelligence

* Rolly Maulana Awangga -- rollymaulanaa@student.telkomuniversity.ac.id
* Prof. Dr. SUYANTO S.T., M.Sc. -- suyanto@telkomuniversity.ac.id
* Bedy Purnama, S.Si., M.T., Ph.D. -- bedypurnama@telkomuniversity.ac.id

## Introduction

Visual neural decoding is a research field focused on interpreting neural signals to reconstruct or understand visual information processed by the brain. This systematic mapping study (SMS) aims to provide an overview of research trends, methods, datasets, and applications in visual neural decoding.

Systematic Mapping Study (SMS) yang bersifat lebih luas mencakup berbagai modalitas neuroimaging, seperti fMRI, MEG, NIRS, atau multimodal fusion (EEG+fMRI, EEG+Eye-tracking, dll). Pengolahan meta data artikel berupa bibtex, dengan langkah:

1. Diagnostik bibtex entry sintaks error dan tidak lengkap
2. Standarisasi format bibtex
3. Diagnostik hasil standarisasi
4. Merubah citation key agar deskriptif
5. Merge dan deduplikkasi bibtex dari multi sumber

```url
https://colab.research.google.com/drive/1dK1OTfULLtE1d9Gd-a5iWjef9h8PjUD2?usp=sharing
```

## Research Questions

| Kode | Pertanyaan Penelitian | Tujuan |
| --- | --- | --- |
| RQ1  | Apa saja **jenis sinyal otak (modality)** yang digunakan dalam penelitian brain decoding dan rekonstruksi stimulus? | Mengidentifikasi seberapa banyak studi yang berbasis EEG, fMRI, MEG, NIRS, dll.                          |
| RQ2  | Apa **tujuan utama penelitian** dalam bidang brain decoding?                                                        | Mengetahui orientasi penelitian: klasifikasi, rekonstruksi visual/auditori, kontrol motorik, emosi, dsb. |
| RQ3  | **Metode dan arsitektur AI** apa yang digunakan untuk decoding atau rekonstruksi?                                   | Mengidentifikasi tren model: CNN, RNN, Transformer, VAE, CLIP, Diffusion, dsb.                           |
| RQ4  | Bagaimana **strategi multimodal fusion** (EEG–fMRI, EEG–Eye-tracking, dsb) diterapkan dalam decoding?               | Memetakan integrasi data otak lintas modalitas.                                                          |
| RQ5  | **Dataset dan sumber data** apa yang digunakan, serta bagaimana ketersediaannya (publik vs tertutup)?               | Menilai aksesibilitas dataset untuk replikasi.                                                           |
| RQ6  | **Metrik evaluasi** apa yang digunakan untuk menilai performa decoding/reconstruction?                              | Menganalisis standar penilaian hasil (Accuracy, SSIM, FID, MSE, dsb).                                    |
| RQ7  | Apa saja **tren dan celah penelitian (research gaps)** di bidang ini?                                               | Mengidentifikasi arah riset masa depan.                                                                  |


## Search Strategy

Pencarian artikel SMS dengan kriteria tabel di bawah ini:

| Komponen | Deskripsi |
| --- | --- |
| **Sumber Database** | Scopus, IEEE Xplore, ~~PubMed, SpringerLink, ScienceDirect, ACM Digital Library~~(dua dulu, udah banyak :D) |
| **Rentang Tahun** | 2019–2027 *(dipilih rentang 8 tahun terakhir agar bisa terlihat trend saat ini dan apakah masih ada peluang gap penelitian lanjutan)* |
| **Bahasa** | English |
| **Kata Kunci Pencarian (Search String Scopus)** | `( ( TITLE-ABS-KEY ( "neural decoding" ) OR TITLE-ABS-KEY ( "brain decoding" ) ) AND ( TITLE-ABS-KEY ( "visual cortex" ) OR TITLE-ABS-KEY ( "image reconstruction" ) )) AND PUBYEAR > 2019 AND PUBYEAR < 2027` |
| **URL Hasil Pencarian Scopus** | `https://www.scopus.com/results/results.uri?sort=plf-f&src=s&sid=e0fb38e56ceb4ccc9b9cb87a68a7e449&sot=a&sdt=a&sl=211&s=%28+%28+TITLE-ABS-KEY+%28+%22neural+decoding%22+%29+OR+TITLE-ABS-KEY+%28+%22brain+decoding%22+%29+%29+AND+%28+TITLE-ABS-KEY+%28+%22visual+cortex%22+%29+OR+TITLE-ABS-KEY+%28+%22image+reconstruction%22+%29+%29+%29+AND+PUBYEAR+%26gt%3B+2019+AND+PUBYEAR+%26lt%3B+2027&origin=searchadvanced&editSaveSearch=&txGid=aa3784a413bf1d310e2527d64bcd7eac&sessionSearchId=e0fb38e56ceb4ccc9b9cb87a68a7e449&limit=200` |
| **Kata Kunci Pencarian (Search String IEEE Xplore)** | `"neural decoding" OR "brain decoding" AND "visual cortex" OR "image reconstruction" Publication Year2019 to 2026` |
| **URL Hasil IEEE Xplore** | `https://ieeexplore.ieee.org/search/searchresult.jsp?action=search&newsearch=true&matchBoolean=true&queryText=(%22All%20Metadata%22:%22neural%20decoding%22%20OR%20%22All%20Metadata%22:%22brain%20decoding%22)%20AND%20(%22All%20Metadata%22:%22visual%20cortex%22%20OR%20%22All%20Metadata%22:%22image%20reconstruction%22)&ranges=2019_2026_Year` |
| **Jenis Publikasi** | Journal, Conference, Book Chapter (peer-reviewed) |

### Keyword scopus

<img width="1334" height="596" alt="image" src="https://github.com/user-attachments/assets/657dd394-b411-4f4f-bcf1-e3d3ac2565b6" />

### Keyword IEEE Xplore

<img width="1263" height="700" alt="image" src="https://github.com/user-attachments/assets/18327f57-0054-4c85-bdc4-c4dea959fd32" />

## Inclusion and Exclusion Criteria

| Kriteria | Deskripsi |
| --- | --- |
| **Inclusion** | (1) Studi menggunakan sinyal otak (EEG, fMRI, MEG, NIRS, atau multimodal). <br> (2) Fokus pada decoding, klasifikasi, atau rekonstruksi stimulus. <br> (3) Menggunakan pendekatan AI/ML/DL. <br> (4) Publikasi peer-reviewed dengan hasil empiris. |
| **Exclusion** | (1) Studi hanya membahas teori tanpa eksperimen. <br> (2) Studi klinis murni (tanpa decoding). <br> (3) Fokus pada neurofeedback tanpa decoding stimulus. <br> (4) Paper duplikat antar sumber.                                                    |

## Study Selection Process
1. Initial search using keywords and strings
2. Screening titles and abstracts
3. Full-text review for eligibility
4. Data extraction

## Classification Schema

| Dimensi | Contoh Kategori |
| --- | --- |
| **Modality** | EEG, fMRI, MEG, NIRS, Multimodal |
| **Research Objective** | Classification, Reconstruction, Prediction, Emotion Recognition |
| **Learning Type** | Supervised, Unsupervised, Self-Supervised, Contrastive |
| **Architecture** | CNN, RNN, VAE, GAN, CLIP, Diffusion |
| **Stimulus Type** | Visual, Auditory, Textual, Motor |
| **Dataset Type** | Public, Private, Synthetic |
| **Evaluation Metric** | Accuracy, SSIM, FID, Correlation, MSE, R² |
| **Publication Year** | 2010–2025 |


## Data Extraction Schema

| No  | Judul & Tahun | Penulis | Modality | Tujuan | Dataset        | Metode | Evaluasi | Kontribusi | Research Gap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | ...           | ...     | fMRI     | Rekonstruksi gambar natural | NSD Dataset    | Diffusion Model + CLIP | FID = 12.4     | Text-to-image reconstruction from brain | Perlu validasi cross-subject |
| 2   | ...           | ...     | EEG      | Klasifikasi digit visual    | MindBigData    | CNN                    | Accuracy = 88% | CNN temporal filtering                  | Perlu integrasi multimodal   |
| 3   | ...           | ...     | EEG+fMRI | Multimodal decoding         | Custom dataset | CLIP-VAE Fusion        | SSIM = 0.72    | Fusion alignment model                  | Belum ada dataset publik     |
| ... | ...           | ...     | ...      | ...                         | ...            | ...                    | ...            | ...                                     | ...                          |


## Visualisasi hasil pemetaan

Gunakan hasil data untuk menghasilkan peta seperti:
1. Tren publikasi per tahun (2019–2026)
   * Increasing use of deep learning since 2019
   * Shift from simple classification to complex reconstruction tasks
   * Growing interest in real-time decoding
2. Distribusi modality vs metode
   * (contoh: fMRI–VAE dominan; EEG–CNN meningkat)
3. Peta tujuan penelitian
   * (klasifikasi vs rekonstruksi)
4. Distribusi dataset publik vs private (e.g., HCP, OpenNeuro)
5. Gap Analysis Chart
   * area dengan publikasi rendah namun penting (misal: multimodal fusion atau real-time decoding)

### Visualization
- [ ] Bubble chart: Methods vs. Application Areas
- [ ] Timeline: Number of publications per year
- [ ] Table: Dataset usage frequency

## Expected Insight

1. Tren global: pergeseran dari decoding linear (SLR) → deep generative models (VAE, Diffusion).
2. Dominasi modality: fMRI banyak untuk visual decoding, EEG lebih untuk klasifikasi emosi/simbol.
3. Kesenjangan:
   * Minimnya dataset multimodal publik.
   * Kurangnya studi cross-subject dan zero-shot generalization.
   * Masih sedikit yang memanfaatkan self-supervised atau foundation models (mis. CLIP, LLaVA, Kosmos-2).

## Format Output yang Disarankan

Output SMS ini bisa disajikan dalam:
1. Paper mapping (seperti di Information and Software Technology atau Neuroinformatics Journal).
2. Spreadsheet hasil ekstraksi (Excel/CSV) untuk visualisasi di Python (Pandas/Matplotlib).
3. Diagram taxonomy:
   * Level 1: Modality
   * Level 2: Objective
   * Level 3: Model type
   * Level 4: Evaluation metric / Dataset

## References
List of selected studies (to be filled after literature review).
