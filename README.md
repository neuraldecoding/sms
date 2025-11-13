# Systematic Mapping Study(SMS) : Neural Decoding and Stimulus Reconstruction Using Neuroimaging and Artificial Intelligence

* Rolly Maulana Awangga -- rollymaulanaa@student.telkomuniversity.ac.id
* Prof. Dr. SUYANTO S.T., M.Sc. -- suyanto@telkomuniversity.ac.id
* Bedy Purnama, S.Si., M.T., Ph.D. -- bedypurnama@telkomuniversity.ac.id

Visual neural decoding is a research field focused on interpreting neural signals to reconstruct or understand visual information processed by the brain. This systematic mapping study (SMS) aims to provide an overview of research trends, methods, datasets, and applications in visual neural decoding.

Systematic Mapping Study (SMS) yang bersifat lebih luas mencakup berbagai modalitas neuroimaging, seperti fMRI, MEG, NIRS, atau multimodal fusion (EEG+fMRI, EEG+Eye-tracking, dll). 

## PRISMA

![mapping](https://github.com/user-attachments/assets/316aa5ae-f84e-465a-b82c-8e44710f3b30)

The literature review (SMS) aims to answer the following research questions (Examples):
* <span style="color:red">**RQ1**</span> : Bagaimana evolusi penelitian **Visual Neural Encoding** ditinjau dari dukungan serta populasi publikasi dari lima tahun terakhir yaitu 2019-2027?  
* <span style="color:blue">**RQ2**</span> : Apa saja yang termasuk pada area topik penelitian **Visual Neural Encoding**? 
* **RQ3** : Bagaimana trend topik dan apa topik saat ini yang merupakan promising research topic pada **Visual Neural Encoding** ? 

### Search Query

Pencarian per tanggal 13 November 2025.

Kata Kunci:
```txt
TITLE-ABS-KEY ( "neural decoding" ) OR TITLE-ABS-KEY ( "brain decoding" ) 
```
[Scopus.com](https://www.scopus.com/results/results.uri?sort=plf-f&src=s&sid=7671a4bc715f080e37cad1c687738363&sot=a&sdt=a&sl=73&s=TITLE-ABS-KEY+%28+%22neural+decoding%22+%29+OR+TITLE-ABS-KEY+%28+%22brain+decoding%22+%29&origin=searchadvanced&editSaveSearch=&txGid=672375c17252b496571b97b7adeef4c5&sessionSearchId=7671a4bc715f080e37cad1c687738363&limit=10) : 1.523 (1967-2026)

```txt
( ( TITLE-ABS-KEY ( "neural decoding" ) OR TITLE-ABS-KEY ( "brain decoding" ) ) ) AND PUBYEAR > 2019 AND PUBYEAR < 2027
```
[Scopus.com](https://www.scopus.com/results/results.uri?sort=plf-f&src=s&sid=1a061a10921eac9e304ad819cd2e05c4&sot=a&sdt=a&sl=125&s=%28+%28+TITLE-ABS-KEY+%28+%22neural+decoding%22+%29+OR+TITLE-ABS-KEY+%28+%22brain+decoding%22+%29+%29+%29+AND+PUBYEAR+%26gt%3B+2019+AND+PUBYEAR+%26lt%3B+2027&origin=searchadvanced&editSaveSearch=&txGid=9f3e2caa5361de32ae8a4ae65ede4607&sessionSearchId=1a061a10921eac9e304ad819cd2e05c4&limit=10) : 901



#### Pencarian dengan filter
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

**Keyword scopus**

<img width="1334" height="596" alt="image" src="https://github.com/user-attachments/assets/657dd394-b411-4f4f-bcf1-e3d3ac2565b6" />

**Keyword IEEE Xplore**

<img width="1263" height="700" alt="image" src="https://github.com/user-attachments/assets/18327f57-0054-4c85-bdc4-c4dea959fd32" />


### Study Selection

[Pengolahan meta data artikel berupa bibtex](https://colab.research.google.com/drive/1dK1OTfULLtE1d9Gd-a5iWjef9h8PjUD2?usp=sharing), dengan langkah:

1. Diagnostik bibtex entry sintaks error dan tidak lengkap
2. Standarisasi format bibtex
3. Diagnostik hasil standarisasi
4. Merubah citation key agar deskriptif
5. [Merge dan deduplikkasi bibtex dari multi sumber](https://neuraldecoding.github.io/sms/bibtex/)

```url
https://colab.research.google.com/drive/1dK1OTfULLtE1d9Gd-a5iWjef9h8PjUD2?usp=sharing
```
### Data Extraction

Hasil akhir referensi berupa [tabel daftar referensi](https://neuraldecoding.github.io/sms/bibtex/) dan file [bibtex](./bibtex/references_final.bib):
* Files processed: 2 (Scopus dan IEEE)
* Total entries imported: 140
* Duplicates removed: 22
* Final unique entries: 118

### Study Selection to Answer RQ1

[Kode program untuk pengolahan data](https://colab.research.google.com/drive/16A-BISyPvpvAuQ_BtgljR6gE8vRt0yzd?usp=sharing)

Total data setelah filter tahun: 118

Distribusi kategori:
category
Article             81
Conference Paper    37
Name: count, dtype: int64

Total entries: 118

Total publikasi (harus 118 untuk 2019-2027): 118

| year | 2019 | 2020 | 2021 |	2022 | 2023 | 2024 | 2025 |	2026 | 2027 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Article | 2 | 8 | 9 | 7 | 9 | 18 | 28 | 0 | 0 |
| Conference Paper | 3 | 4 | 3 | 8 | 6 | 10 | 3 | 0 | 0 |
| Book | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Book Chapter | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| Jumlah | 5 | 12 | 12 | 15 | 15 | 28 | 31 | 0 | 0 |

<img width="1190" height="690" alt="image" src="https://github.com/user-attachments/assets/639b1353-5f9c-46f7-8653-b8cbd02e60f7" />

<img width="989" height="590" alt="image" src="https://github.com/user-attachments/assets/d04fcb69-8599-4ea4-82c6-43e2d0e4549a" />



## Bibliometric Analysis

Untuk menjawab RQ2, mengggunakan VOSviewer dari [data RIS](./bibtex/my_references.ris)

Topik-topik yang terkait:

**visual neural encoding**  
<img width="875" height="581" alt="image" src="https://github.com/user-attachments/assets/544e939e-c164-40b7-99c4-d97f0bbf4236" />

**eeg**  
<img width="892" height="571" alt="image" src="https://github.com/user-attachments/assets/0412c4ea-c37c-4149-9e00-8f63708a7edc" />

**artificial intelligence**  
<img width="867" height="562" alt="image" src="https://github.com/user-attachments/assets/d98e5f60-6330-49a5-a0be-42f6f931e0bc" />

**algorithm**  
<img width="851" height="579" alt="image" src="https://github.com/user-attachments/assets/816f4fc3-7565-4850-904e-9b7c64a83ca3" />

**recontructed image**  
<img width="877" height="571" alt="image" src="https://github.com/user-attachments/assets/48ff8bdc-21f4-4279-ba95-5d0ec8c7b671" />

**latent space**  
<img width="869" height="571" alt="image" src="https://github.com/user-attachments/assets/65da848f-37e8-4bb1-81e9-7516f6e73bec" />


**brain signal**  
<img width="882" height="573" alt="image" src="https://github.com/user-attachments/assets/8166cb01-1aea-4bb4-8f44-8218fb3a997b" />


## Topic Analysis

Untuk menjawan RQ 3 dengan menggunakan Systematic Topic Modeling.

Word Cloud:  

<img width="400" height="200" alt="image" src="https://github.com/user-attachments/assets/f937df4f-9057-47ac-b2ea-9f23cdb4b179" />

**Pengelompokan topik berdasarkan keyword**

| Topik | Keywords |
| --- | --- |
| 1 | "human, activities, accuracy, encoding, network, framework, performance, feature, features, cortex" |
| 2 | "fmri, space, stimuli, activity, training, eeg, latent, signals, human, features"|
| 3 | "eeg, feature, encoding, high, stimulus, imaging, noise, framework, signals, performance" |
| 4 | "speech, activity, cortex, motor, stimuli, single, neurons, field, population, communication" |
| 5 | "imagery, eeg, proposed, channel, network, self, mental, source, decoder, trained" |
| 6 | "method, encoding, fmri, attention, human, deep, stimuli, proposed, activity, natural" |
| 7 | "representations, cortex, memory, control, cognitive, research, variability, patterns, activity, network" |
| 8 | "natural, perceptual, quality, similarity, network, algorithm, ssim, features, signals, high" |
| 9 | "eeg, signals, representation, depth, insights, work, multimodal, modalities, focus, comprehensive" |
| 10 | "fmri, semantic, features, deep, natural, level, stimulus, learning, functional, latent" |

**Trend dari setiap topik per keyword**

<img width="989" height="3990" alt="image" src="https://github.com/user-attachments/assets/06b6f98d-1b22-4373-82dd-64a97bd1a795" />


[**Lihat Intertopic Distance Map**](./lda/)
