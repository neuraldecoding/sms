# Systematic Mapping Study: Neural Decoding and Stimulus Reconstruction Using Neuroimaging and Artificial Intelligence

## Introduction

Visual neural decoding is a research field focused on interpreting neural signals to reconstruct or understand visual information processed by the brain. This systematic mapping study (SMS) aims to provide an overview of research trends, methods, datasets, and applications in visual neural decoding.

Systematic Mapping Study (SMS) yang bersifat lebih luas mencakup berbagai modalitas neuroimaging, seperti fMRI, MEG, NIRS, atau multimodal fusion (EEG+fMRI, EEG+Eye-tracking, dll).

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

| Komponen | Deskripsi |
| --- | --- |
| **Sumber Database** | Scopus, IEEE Xplore, ~~PubMed, SpringerLink, ScienceDirect, ACM Digital Library~~(dua dulu, udah banyak :D) |
| **Rentang Tahun** | 2019–2026 *(dipilih rentang 6 tahun terakhir agar bisa terlihat trend saat ini dan apakah masih ada peluang gap penelitian lanjutan)* |
| **Bahasa** | English |
| **Kata Kunci Utama (Search String)** | `("brain decoding" OR "neural decoding" OR "stimulus reconstruction" OR "brain reading" OR "visual reconstruction") AND ("EEG" OR "fMRI" OR "MEG" OR "NIRS" OR "BCI") AND ("deep learning" OR "machine learning" OR "VAE" OR "GAN" OR "transformer" OR "CLIP" OR "diffusion model")` |
| **Jenis Publikasi** | Journal, Conference, Book Chapter (peer-reviewed) |

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
| Study | Year | Method | Dataset | Application | Results |
|-------|------|--------|---------|-------------|---------|
|       |      |        |         |             |         |


| No  | Judul & Tahun | Penulis | Modality | Tujuan | Dataset        | Metode | Evaluasi | Kontribusi | Research Gap |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | ...           | ...     | fMRI     | Rekonstruksi gambar natural | NSD Dataset    | Diffusion Model + CLIP | FID = 12.4     | Text-to-image reconstruction from brain | Perlu validasi cross-subject |
| 2   | ...           | ...     | EEG      | Klasifikasi digit visual    | MindBigData    | CNN                    | Accuracy = 88% | CNN temporal filtering                  | Perlu integrasi multimodal   |
| 3   | ...           | ...     | EEG+fMRI | Multimodal decoding         | Custom dataset | CLIP-VAE Fusion        | SSIM = 0.72    | Fusion alignment model                  | Belum ada dataset publik     |
| ... | ...           | ...     | ...      | ...                         | ...            | ...                    | ...            | ...                                     | ...                          |


## Mapping Results
### Methods Used
- Deep learning (CNN, RNN, GAN)
- Traditional machine learning (SVM, LDA)
- Signal processing techniques

### Datasets
- fMRI visual datasets (e.g., HCP, OpenNeuro)
- EEG visual stimulus datasets
- Custom experimental datasets

### Application Areas
- Image reconstruction
- Visual object recognition
- Brain-computer interfaces
- Medical diagnostics

### Research Trends
- Increasing use of deep learning since 2015
- Shift from simple classification to complex reconstruction tasks
- Growing interest in real-time decoding

## Visualization
- [ ] Bubble chart: Methods vs. Application Areas
- [ ] Timeline: Number of publications per year
- [ ] Table: Dataset usage frequency

## Discussion
Summarize key findings, gaps, and future directions in visual neural decoding research.

## References
List of selected studies (to be filled after literature review).
